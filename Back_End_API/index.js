var express = require('express');
var cookieParser = require('cookie-parser')
var registerRouter = require('./routers.js/NewUserRouter');
var loginRouter = require('./routers.js/LoginRouter');
var authMiddle = require('./Services.js/auth').authMiddle;
var app = express();
app.use(cookieParser());
app.use(authMiddle);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.listen(8000);