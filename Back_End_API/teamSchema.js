var Joi = require("joi");
var team = {
  teamName: String
  teamMembersIds: [{
    UserName: String,
    _id: String
  }],
  randCode: String,
  teamComments: [String],
  teamTasks: [{
    task: String,
    teamMemberIdFrom: String,
    teamMemberIdTo: String,
    deadLine: Date
  }]
}
var task = {
  Team: Joi.string().required(),
  Task: {
    task: Joi.string().required(),
    teamMemberIdFrom: Joi.string().required(),
    teamMemberIdTo: Joi.string().required(),
    deadLine: {
      day: Joi.number().required(),
      month: Joi.number().required(),
      year: Joi.number().required()
    }
  }
}

module.exports = {
  team,
  task
};