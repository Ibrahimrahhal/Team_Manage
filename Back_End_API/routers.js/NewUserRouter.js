var express = require('express');
var body = require('body-parser');
var Joi = require('joi');
var user = require('../userSchema');
var passService = require('../Services.js/Passwords');
var database = require('../Services.js/database_user');
var router = express.Router();
router.use(body.json());
router.post('/', async (req, res) => {
  let result = Joi.validate(req.body, user.user_joi);
  if (result.error) {
    res.sendStatus(400);
  } else {
    let password = passService.generateSaltAndHash(req.body.Password);
    let NewUserObject = req.body;
    NewUserObject.Password = password.password;
    NewUserObject.Salt = password.salt;
    let result = await database.addUser(NewUserObject);
    if (result === "db_err") res.send("0");
    if (result === "user_ex") res.send("userExist");
    if (result === "ok") res.send("1");
  }
});

module.exports = router;