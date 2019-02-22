var express = require('express');
var body = require('body-parser');
var database_t = require('../Services.js/database_team');
var database_u = require('../Services.js/database_user');
var auth = require('../Services.js/auth.js');
var router = express.Router();
router.use(body.json());
router.post('/', async (req, res) => {
  let teamCode = req.body.teamCode;
  console.log("shit");
  if (typeof teamCode === typeof "shit") {
    let result_t
    result_t = await database_t.joinTeam(teamCode, auth.getPayload(req.cookies.auth))
    switch (result_t) {
      case "1":
        let result_u = await database_u.joinTeam(teamCode, auth.getPayload(req.cookies.auth)._id);
        if (result_u === "1") res.send("1");
        else res.send("0");
        break;
      case "404":
        res.sendStatus(404);
        break;
      case "userErr":
        res.send("1");
        break;
      default:
        res.send("0");
    }
  } else {
    res.sendStatus(400);
  }



});

module.exports = router;