var express = require('express');
var body = require('body-parser');
var Joi = require('joi');
var auth = require('../Services.js/auth.js');
var database = require('../Services.js/database_team');
var router = express.Router();
router.use(body.json());
router.post('/', async (req, res) => {
  let validationResult = Joi.validate(req.body, {
    Comment: Joi.string().required(),
    Team: Joi.string().required()
  });
  if (validationResult.error) {
    res.sendStatus(400);
  } else {
    if (auth.verifyTeam(req.body.Team, req.cookes.auth)) {
      let result = await database.addComment(req.body.Team, req.body.Comment);
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
    Comment: Joi.string().required(),
    Team: Joi.string().required()
  });
  if (validationResult.error) {
    res.sendStatus(400);
  } else {
    if (auth.verifyTeam(req.body.Team, req.cookes.auth)) {
      let result = await database.deleteComment(req.body.Comment, req.body.Team);
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