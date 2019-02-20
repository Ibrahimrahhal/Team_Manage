var express = require('express');
var body = require('body-parser');
var database_t = require('../Services.js/database_team');
var database_u = require('../Services.js/database_user');
var auth = require('../Services.js/auth.js');
var router = express.Router();
router.use(body.json());
router.post('/', (req, res) => {
  async function ex(req, res) {
    let teamCode = req.body.teamCode;
    console.log("shit");
    if (typeof teamCode === typeof "shit") {
      let result_t
      result_t = await database_t.joinTeam(teamCode, auth.getPayload(req.cookies.auth)._id)

      if (result_t === "1") {
        let result_u = await database_u.joinTeam(teamCode, auth.getPayload(req.cookies.auth)._id);
        if (result_u === "1") res.send("1");
        else res.send("0");
      } else {
        if (result_t === "404") res.sendStatus(404);
        else res.send("0");
      }
    } else {
      if (result_t === "userErr")
        res.send("1");
      else
        res.sendStatus(400);
    }

  }

  ex(req, res).then().catch();


});

module.exports = router;