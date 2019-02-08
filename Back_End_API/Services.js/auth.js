var jwt = require("jsonwebtoken");
var _ = require('lodash/object');
var jwtPass = require('../Settings').jwtPassword;

function getJwt(user) {
  let payload = _.pick(user, ["_id", "teamIds", "UserName"]);
  return jwt.sign(payload, jwtPass);
}

function authUser(token, jwtPass) {
  try {
    jwt.verify(token, Password);
    return true;
  } catch {
    return false;
  }
}

function authMiddle(req, res, next) {
  var cookie = req.cookies.auth;
  if (req.path === '/login' || req.path === '/register') {
    next();
  } else {
    if (cookie === undefined) {
      res.sendStatus(401);
    } else {
      if (authUser(req.cookies.auth, jwtPass)) {
        next();
      } else {
        res.sendStatus(401);
      }
    }
    next();
  }

}

module.exports = {
  getJwt,
  authUser,
  authMiddle
};