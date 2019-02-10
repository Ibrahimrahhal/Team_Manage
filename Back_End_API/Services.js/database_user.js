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



module.exports = {
  addUser,
  getUserByUserName
};