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
      return {
        status: "ok",
        value: Team.randCode
      };
    } else {
      Team.randCode = randFunction.generate(8);
      addTeam(Team);
    }
  } catch {
    return {
      status: "db_err",
      value: null
    };;
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



async function joinTeam(team, _id) {
  let old;
  try {
    old = await teamModel.findOne({
      randCode: team
    });
    old = old.teamMembersIds;
    if (!old.includes(_id))
      old.push(_id);
    else
      return "userErr";

  } catch (e) {
    console.log(e);
    return "404";
  }
  try {
    await teamModel.updateOne({
      randCode: team
    }, {
      teamMembersIds: old
    });
  } catch {
    return "updateErr";
  }
  return "1";
}

async function addComment(team, comment) {
  let old;
  try {
    old = await teamModel.findOne({
      randCode: team
    });
    old = old.teamComments;
    if (old)
      old.push(comment);
    else
      old = [comment];

  } catch {
    return "404";
  }
  try {
    await teamModel.updateOne({
      randCode: team
    }, {
      teamComments: old
    });
  } catch {
    return "updateErr";
  }
  return "1";



}

async function getTeam(team) {
  try {
    let Team = await
    teamModel.findOne({
      randCode: team
    });
    return Team;
  } catch {
    return "Err";
  }
}

module.exports = {
  checkUniqueTeam,
  addTeam,
  joinTeam,
  addComment,
  getTeam
};