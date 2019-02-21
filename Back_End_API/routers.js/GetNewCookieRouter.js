var express = require('express');
var body = require('body-parser');
var database = require('../Services.js/database_user');
var auth = require('../Services.js/auth.js');
var router = express.Router();
router.use(body.json());
router.post('/', async (req, res) => {
  let _id = auth.getPayload(req.cookies.auth)._id;
  let user = await database.getUser(_id);
  let newCookie;
  if (user != "Err") {
    newCookie = auth.getJwt(user);
  }
  res.send(newCookie);
});

module.exports = router;