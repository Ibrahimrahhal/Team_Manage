var express = require('express');
var body = require('body-parser');
var Joi = require('joi');
var user = require('../userSchema');
var passService = require('../Services.js/Passwords');
var database = require('../Services.js/database');
var router = express.Router();
router.use(body.json());
router.post('/', (req, res) => {
  let result = Joi.validate(req.body, user.user_joi);
  if (result.error) {
    res.send(result);
  } else {
    let password = passService.generateSaltAndHash(req.body.Password);
    let NewUserObject = req.body;
    NewUserObject.Password = password.password;
    NewUserObject.Salt = password.salt;
    if ((database.addUser(NewUserObject)))
      res.send("0");
    res.send("1");
  }
});

module.exports = router;