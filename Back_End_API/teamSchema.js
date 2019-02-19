var Joi = require('joi');

var team = {
  teamMembersIds: [String],
  randCode: String,
  teamComments: [String],
  teamTasks: [{
    task: String,
    teamMemberIdFrom: String,
    teamMemberIdTo: String,
    deadLine: Date
  }]
}
var team_joi = {
  teamMembersIds: Joi.array().items(Joi.string()).required(),
  teamComments: Joi.array().items(Joi.string()).required(),
  teamTasks: Joi.array()
}

module.exports = {
  team,
  team_joi
};