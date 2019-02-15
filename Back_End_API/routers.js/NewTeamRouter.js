var express = require('express');
var body = require('body-parser');
var randFunction = require("randomstring");
var Joi = require('joi');
var schema = require('../TeamSchema');
var database = require('../Services.js/database_team');
var auth = require('../Services.js/auth.js');
var router = express.Router();
router.use(body.json());
router.post("/", async (req, res) => {
  let Team = req.body;
  let result = Joi.validate(Team, schema.team_joi);
  if (result.error) {
    res.sendStatus(400);
  } else {
    Team.randCode = randFunction.generate(8);
    Team.teamMembersIds.push(auth.getPayload(req.cookies.auth)._id);
    let saveResult = await database.addTeam(Team);
    if (saveResult != "ok") {
      res.send("0");
    } else {
      res.send("1");
    }

  }
});


module.exports = router;