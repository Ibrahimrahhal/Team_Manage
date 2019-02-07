var Joi = require('joi');
var user = {
  UserName: String,
  Password: String,
  Salt: String,
  teamId: String,
  Email: String
}
var user_joi = {
  UserName: Joi.string(),
  Password: Joi.string(),
  teamId: Joi.string(),
  Email: Joi.string().email()
}
module.exports = {
  user,
  user_joi
};