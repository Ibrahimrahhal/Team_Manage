var express = require('express');
var body = require('body-parser');
var Joi = require('joi');
var passService = require('../Services.js/Passwords');
var database = require('../Services.js/database_user');
var auth = require('../Services.js/auth');
var router = express.Router();
router.use(body.json());
router.post('/', (req, res) => {
  let user = null;
  let validationResult = Joi.validate(req.body, {
    UserName: Joi.string(),
    Password: Joi.string()
  });
  if (validationResult.error) {
    res.sendStatus(400);
  } else {
    database.getUserByUserName(req.body.UserName)
      .then((data) => {

        user = data;
        if (passService.validateHashedPassword(user.Password, req.body.Password, user.Salt)) {
          res.json(auth.getJwt(user));
        } else {
          res.send("Wrong_Pass");
        }
      })
      .catch(() => {
        res.send("user_notFOund");
      });
  }


});

module.exports = router;