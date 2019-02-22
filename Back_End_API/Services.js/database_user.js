var mongoose = require('mongoose');
var mongodbServer = require('../Setting').mongodbServer;
var user = require('../userSchema');
var userSchema = new mongoose.Schema(user.user);
var userModel = mongoose.model('user', userSchema);
mongoose.connect(mongodbServer);

async function addUser(user) {
  try {
    if (await checkUniqueUser(user)) {
      let newUser = new userModel(user);
      newUser.save(
        function(err) {
          if (err)
            throw err;
        }
      );
      return "ok";
    } else {
      return "user_ex";
    }
  } catch {
    return "db_err";
  }
}

async function getUserByUserName(UserName) {

  try {
    let result = await userModel.findOne({
      UserName
    });
    return result;

  } catch {
    return "not_found";
  }




}

async function checkUniqueUser({
  UserName
}) {
  let result = await userModel.find({
    UserName
  });
  if (result && result.length > 0) {
    return false;
  } else {
    return true;
  }

}
async function joinTeam({
  teamName,
  _id
}, id) {
  try {
    let team = {
      teamName,
      teamId: _id
    };
    let old = await userModel.findOne({
      id
    });
    old = old.teamIds;
    if (old)
      old.push(team);
    else
      old = [team];
    await userModel.updateOne({
      id
    }, {
      teamIds: old
    });
  } catch {
    return "dbErr"
  }
  return "1";

}

async function leaveTeam(team, _id) {
  try {
    let old = await userModel.findOne({
      _id
    });
    old = old.teamIds;
    old = old.filter((one) => {
      if (one.teamId === team)
        return false;
      return true;

    });
    await userModel.updateOne({
      _id
    }, {
      teamIds: old
    });
  } catch {
    return "dbErr"
  }
  return "1";

}

async function getUser(_id) {
  try {
    let obj = await userModel.findOne({
      _id
    });
    return obj;

  } catch (e) {
    return "Err"

  }

}



module.exports = {
  addUser,
  getUserByUserName,
  joinTeam,
  getUser,
  leaveTeam
};