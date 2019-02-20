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

module.exports = {
  team
};