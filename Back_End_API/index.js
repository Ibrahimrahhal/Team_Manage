var express = require('express');
var router = require('./routers.js/NewUserRouter');
var app = express();
app.use('/register', router);
app.listen(8000);