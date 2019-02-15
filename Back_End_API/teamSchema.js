var Joi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
var team = {
  teamMembersIds: [],
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
  randCode: Joi.string().required(),
  teamComments: Joi.array().items(Joi.string()).required(),
  teamTasks: [{
    task: Joi.string().required(),
    teamMemberIdFrom: Joi.string().required(),
    teamMemberIdTo: Joi.string().required(),
    deadLine: Joi.date().format('YYYY-MM-DD');
  }]
}

module.exports = {
  team
};