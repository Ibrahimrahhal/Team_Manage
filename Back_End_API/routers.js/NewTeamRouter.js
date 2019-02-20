var express = require('express');
var body = require('body-parser');
var database = require('../Services.js/database_team');
var auth = require('../Services.js/auth.js');
var router = express.Router();
router.use(body.json());
router.post('/', async (req, res) => {
  console.log(req.body)
  if (req.body === {}) {
    res.sendStatus(400);
    return;
  }
  let saveResult = await database.addTeam(auth.getPayload(req.cookies.auth)._id);
  if (saveResult != "ok") {
    res.send("0");
  } else {
    res.send("1");
  }


});

module.exports = router;