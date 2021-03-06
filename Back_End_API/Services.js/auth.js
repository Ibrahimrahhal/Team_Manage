var jwt = require("jsonwebtoken");
var _ = require('lodash/object');
var jwtPass = require('../Setting').jwtPassword;
var jwtDecode = require('jwt-decode');

function getJwt(user) {
  let payload = _.pick(user, ["_id", "teamIds", "UserName"]);
  return jwt.sign(payload, jwtPass);
}

function authUser(token) {
  try {
    jwt.verify(token, jwtPass);
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
      if (authUser(cookie)) {
        next();
      } else {
        res.sendStatus(401);
      }
    }
  }

}

function ValidateReqFromUser({
  _id
}, auth_cookie) {
  if (_id === jwtDecode(auth_cookie)._id) {
    return true;

  } else {
    return false;
  }
}

function getPayload(auth_cookie) {
  return jwtDecode(auth_cookie);
}

function verifyTeam(team, auth_cookie) {
  let teamIds = getPayload(auth_cookie).teamIds;
  if (teamIds)
    if (teamIds.includes(team))
      return true;
  return false;
}

module.exports = {
  getJwt,
  authUser,
  authMiddle,
  ValidateReqFromUser,
  getPayload,
  verifyTeam
};