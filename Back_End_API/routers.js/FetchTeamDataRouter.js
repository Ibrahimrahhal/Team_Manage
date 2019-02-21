var express = require('express');
var body = require('body-parser');
var Joi = require('joi');
var auth = require('../Services.js/auth.js');
var database = require('../Services.js/database_team');
var router = express.Router();
router.use(body.json());
router.post('/', async (req, res) => {
  let validationResult = Joi.validate(req.body, {
    Team: Joi.string().required()
  });
  if (validationResult.error) {
    res.sendStatus(400);
  } else {
    if (auth.verifyTeam(req.body.Team, req.cookies.auth)) {
      let result = await database.getTeam(req.body.Team);
      if (result != "Err" && result) {

        res.json({
          teamComments: result.teamComments,
          teamTasks: result.teamTasks
        });

      } else {
        res.send("0");
      }
    } else {
      res.sendStatus(401);
    }
  }


});

module.exports = router;