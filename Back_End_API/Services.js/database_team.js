var mongoose = require('mongoose');
var mongodbServer = require('../Setting').mongodbServer;
var team = require('../teamSchema');
var randFunction = require("randomstring");
var teamSchema = new mongoose.Schema(team.team);
var teamModel = mongoose.model('team', teamSchema);
mongoose.connect(mongodbServer);

async function addTeam(_id) {
  let Team = {
    randCode: randFunction.generate(8),
    teamMembersIds: [_id],
    teamTasks: [],
    teamComments: []
  };
  try {
    if (await checkUniqueTeam(Team)) {
      let newTeam = new teamModel(Team);
      newTeam.save(
        function(err) {
          if (err)
            throw err;
        }
      );
      return "ok";
    } else {
      Team.randCode = randFunction.generate(8);
      addTeam(Team);
    }
  } catch {
    return "db_err";
  }
}



async function checkUniqueTeam({
  randCode
}) {
  let result = await teamModel.find({
    randCode
  });
  if (result && result.length > 0) {
    return false;
  } else {
    return true;
  }

}

module.exports = {
  checkUniqueTeam,
  addTeam
};