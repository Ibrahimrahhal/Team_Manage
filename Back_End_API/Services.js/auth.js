var jwt = require("jsonwebtoken");
var _ = require('lodash/object');

function getJwt(user) {
  let payload = _.pick(user, ["_id", "teamIds", "UserName"]);
  return jwt.sign(payload, user.Password);
}

function authUser(token, Password) {
  try {
    jwt.verify(token, Password);
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  getJwt,
  authUser
};