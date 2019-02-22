var mongoose = require('mongoose');
var mongodbServer = require('../Setting').mongodbServer;
var team = require('../teamSchema');
var randFunction = require("randomstring");
var teamSchema = new mongoose.Schema(team.team);
var teamModel = mongoose.model('team', teamSchema);
mongoose.connect(mongodbServer);

async function addTeam({
  _id,
  UserName
}) {
  let Team = {
    randCode: randFunction.generate(8),
    teamMembersIds: [{
      _id,
      UserName
    }],
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



async function joinTeam(team, {
  _id,
  UserName
}) {
  let old;
  try {
    old = await teamModel.findOne({
      randCode: team
    });
    old = old.teamMembersIds;
    if (old)
      if (!old.includes({
          _id,
          UserName
        }))
        old.push({
          _id,
          UserName
        });
      else
        return "userErr";
    else
      old = [{
        _id,
        UserName
      }];

  } catch {
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

async function addTask({
  task,
  teamMemberIdFrom,
  teamMemberIdTo,
  deadLine
}, team) {
  let old;
  let neww = {
    task,
    teamMemberIdFrom,
    teamMemberIdTo,
    deadLine: new Date(deadLine.day, deadLine.month, deadLine.year)
  };
  try {
    old = await teamModel.findOne({
      randCode: team
    });
    old = old.teamTasks;
    if (old)
      old.push(neww);
    else
      old = [neww];

  } catch {
    return "404";
  }
  try {
    await teamModel.updateOne({
      randCode: team
    }, {
      teamTasks: old
    });
  } catch {
    return "updateErr";
  }
  return "1";



}

async function deleteTask({
  task,
  teamMemberIdFrom,
  teamMemberIdTo
}, team) {
  let old;
  let neww;
  try {
    old = await teamModel.findOne({
      randCode: team
    });
    old = old.teamTasks;
    if (old) {
      neww =
        old.filter((one) => {
          if (one.task === task &&
            one.teamMemberIdFrom === teamMemberIdFrom &&
            one.teamMemberIdTo === teamMemberIdTo)
            return false;
          return true;
        });
    }
  } catch {
    return "404";
  }
  try {
    await teamModel.updateOne({
      randCode: team
    }, {
      teamTasks: neww
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
    if (Team)
      return Team;
    else {
      throw "error";
    }
  } catch {
    return "Err";
  }
}


async function deleteComment(comment, team) {
  let old;
  let neww;
  try {
    old = await teamModel.findOne({
      randCode: team
    });
    old = old.teamComments;
    if (old) {
      neww =
        old.filter((one) => {
          if (one === comment)
            return false;
          return true;
        });
    }
  } catch {
    return "404";
  }
  try {
    await teamModel.updateOne({
      randCode: team
    }, {
      teamTasks: neww
    });
  } catch {
    return "updateErr";
  }
  return "1";



}


module.exports = {
  checkUniqueTeam,
  addTeam,
  joinTeam,
  addComment,
  getTeam,
  addTask,
  deleteComment,
  deleteTask
};