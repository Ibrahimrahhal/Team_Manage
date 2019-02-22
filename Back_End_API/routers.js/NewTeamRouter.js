var express = require('express');
var body = require('body-parser');
var database_t = require('../Services.js/database_team');
var database_u = require('../Services.js/database_user');
var auth = require('../Services.js/auth.js');
var _ = require('lodash');
var router = express.Router();
router.use(body.json());


router.post('/', async (req, res) => {
  let validationResult = Joi.validate(req.body, {
    teamName: Joi.string().required()
  });
  if (validationResult.error) {
    res.sendStatus(400);
  } else {
    let saveResult_t = await database_t.addTeam(auth.getPayload(req.cookies.auth));

    if (saveResult_t.status != "ok") {
      res.send("0");
    } else {
      let saveResult_u = await database_u.joinTeam(saveResult_t.value, auth.getPayload(req.cookies.auth)._id);
      if (saveResult_u != "1")
        res.send("0");
      else
        res.send("1");
    }

  }
});

module.exports = router;