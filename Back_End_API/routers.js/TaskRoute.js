var express = require('express');
var body = require('body-parser');
var Joi = require('joi');
var database = require('../Services.js/database_team');
var team = require('../teamSchema');
var router = express.Router();
router.use(body.json());
router.post('/', async (req, res) => {
  let validationResult = Joi.validate(req.body, team.task);
  if (validationResult.error) {
    res.sendStatus(400);
  } else {
    if (auth.verifyTeam(req.body.Team, req.cookes.auth) && (auth.getPayload(req.cookes.auth)._id === req.body.Task.teamMemberIdFrom)) {
      let result = await database.addTask(req.body.Task, req.body.Team);
      switch (result) {
        case "404":
          res.sendStatus(404);
          break;
        case "1":
          res.send("1");
          break;
        default:
          res.send("0");
      }
    } else {
      res.sendStatus(401);

    }


  }


});

router.delete('/', async (req, res) => {
  let validationResult = Joi.validate(req.body, {
      Team: Joi.string().required(),
      Task: {
        task: Joi.string().required(),
        teamMemberIdFrom: Joi.string().required(),
        teamMemberIdTo: Joi.string().required()
      }
    }
  });
if (validationResult.error) {
  res.sendStatus(400);
} else {
  let _id = auth.getPayload(req.cookes.auth)._id;
  if (auth.verifyTeam(req.body.Team, req.cookes.auth) &&
    (_id === req.body.Task.teamMemberIdFrom || _id === req.body.Task.teamMemberIdTo)) {
    let result = await database.deleteTask(req.body.Team, req.body.Task);
    switch (result) {
      case "404":
        res.sendStatus(404);
        break;
      case "1":
        res.send("1");
        break;
      default:
        res.send("0");
    }
  } else {
    res.sendStatus(401);

  }


}


});

module.exports = router;