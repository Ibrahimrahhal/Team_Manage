var Joi = require('joi');
var user = {
  UserName: String,
  Password: String,
  Salt: String,
  teamIds: [String],
  Email: String
}
var user_joi = {
  UserName: Joi.string().required(),
  Password: Joi.string().required(),
  teamIds: Joi.array().items(Joi.string()).required(),
  Email: Joi.string().email().required()
}
module.exports = {
  user,
  user_joi
};