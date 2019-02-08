var mongoose = require('mongoose');
var mongodbServer = require('../setting').mongodbServer;
var user = require('../userSchema');
var userSchema = new mongoose.Schema(user.user);
var userModel = mongoose.model('user', userSchema);
mongoose.connect(mongodbServer);

function addUser(user) {
  let newUser = new userModel(user);
  newUser.save(
    function(err) {
      if (err) {
        console.log(err);
        return false;
      }
      return true;
    }
  );
}

async function getUserByUserName(UserName) {

  try {
    let result = await userModel.findOne({
      UserName
    });
    return result
  } catch {}



}



module.exports = {
  addUser,
  getUserByUserName
};