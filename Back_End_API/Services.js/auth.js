var jwt = require("jsonwebtoken");

function getJwt(payload, Password) {
  return jwt.sign(payload, Password);
}

function authUser(jwt, Password) {
  return jwt.verify(jwt, Password);
}

module.exports = {
  getJwt,
  authUser
};