var Joi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
var team = {
  teamMembersIds: [Strings],
  randCode: String,
  teamComments: [Strings],
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
  teamTasks: []
}

module.exports = {
  team,
  team_joi
};