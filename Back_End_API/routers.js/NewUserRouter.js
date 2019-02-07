var express = require('express');
var body = require('body-parser');
var user = require('../userSchema');
var mongoose = require('mongoose');
var Joi = require('joi');
var _ = require('lodash/object');
var passService = require('../Services.js/Passwords');
var mongodbServer = require('../setting').mongodbServer;
var router = express.Router();
let userSchema = new mongoose.Schema(user.user);
var userModel = mongoose.model('user', userSchema);
router.use(body.json());
router.post('/', async (req, res) => {
  mongoose.connect(mongodbServer);
  let db = mongoose.connection;
  let result = Joi.validate(req.body, user.user_joi);

  if ((result.error)) {
    res.send("0");
  } else {
    let password = passService.generateSaltAndHash(req.body.Password);
    let NewUserObject = req.body;
    NewUserObject.Password = password.password;
    NewUserObject.Salt = password.salt;
    let newUser = new userModel(NewUserObject);
    newUser.save(function(err) {
      if (err) console.log(err);
      // saved!
    });


    res.json(
      _.pick(
        await userModel.findOne({
          UserName: NewUserObject.UserName
        }),
        ['_id', 'teamId', 'UserName'])
    );





    res.json(NewUserObject);
  }
});

module.exports = router;