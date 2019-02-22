var express = require('express');
var body = require('body-parser');
var Joi = require('joi');
var auth = require('../Services.js/auth.js');
var database_t = require('../Services.js/database_team');
var database_u = require('../Services.js/database_user');
var router = express.Router();
router.use(body.json());
router.post('/', async (req, res) => {
  let validationResult = Joi.validate(req.body, {
    Team: Joi.string().required()
  });
  if (validationResult.error) {
    res.sendStatus(400);
  } else {
    if (auth.verifyTeam(req.body.Team, req.cookes.auth)) {
      let result_t = await database_t.leaveTeam(req.body.Team, auth.getPayload(req.cookies.auth)._id);
      switch (result) {
        case "404":
          res.sendStatus(404);
          break;
        case "1":
          let result_u = await database_u.leaveTeam(req.body.Team, auth.getPayload(req.cookies.auth)._id);
          if (result_u === "1")
            res.send("1");
          else
            res.send("0");
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