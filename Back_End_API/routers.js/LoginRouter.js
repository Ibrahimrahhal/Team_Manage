var express = require('express');
var body = require('body-parser');
var Joi = require('joi');
var passService = require('../Services.js/Passwords');
var database = require('../Services.js/database');
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
        console.log(data);
        user = data;
        if (passService.validateHashedPassword(user.Password, req.body.Password, user.salt)) {
          res.json(auth.getJwt(user));


        } else {
          res.send("PassErr");
        }
      })
      .catch(() => {
        res.send("UserErr");
      });






  }


});

module.exports = router;