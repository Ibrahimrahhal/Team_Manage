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

function authMiddle(req, res, next) {
  var cookie = req.cookies.auth;
  if (req.path === '/login' || req.path === '/register') {
    next();
  } else {
    if (cookie === undefined) {
      res.sendStatus(401);
    }
    next();
  }

}

module.exports = {
  getJwt,
  authUser,
  authMiddle
};