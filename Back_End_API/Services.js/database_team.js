var mongoose = require('mongoose');
var mongodbServer = require('../Setting').mongodbServer;
var team = require('../teamSchema');
var randFunction = require("randomstring");
var teamSchema = new mongoose.Schema(team.team);
var teamModel = mongoose.model('team', teamSchema);
mongoose.connect(mongodbServer);

async function addTeam(team) {
  try {
    if (await checkUniqueTeam(team)) {
      let newTeam = new teamModel(team);
      newTeam.save(
        function(err) {
          if (err)
            throw err;
        }
      );
      return "ok";
    } else {
      team.randCode = randFunction.generate(8);
      addTeam(team);
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