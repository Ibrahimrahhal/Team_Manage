var Joi = require('joi');
var user = {
  UserName: String,
  Password: String,
  Salt: String,
  teamIds: [{
    teamName: String,
    teamId: String
  }],
  Email: String
}
var user_joi = {
  UserName: Joi.string().required(),
  Password: Joi.string().required(),
  teamIds: Joi.array().required(),
  Email: Joi.string().email().required()
}
module.exports = {
  user,
  user_joi
};