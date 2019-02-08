var jwt = require("jsonwebtoken");
var _ = require('lodash/object');

function getJwt(user) {
  let payload = _.pick(user, ["_id", "teamIds", "UserName"]);
  return jwt.sign(payload, user.Password);
}

function authUser(jwt, Password) {
  return jwt.verify(jwt, Password);
}

module.exports = {
  getJwt,
  authUser
};