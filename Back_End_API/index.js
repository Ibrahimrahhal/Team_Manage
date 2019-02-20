var express = require('express');
var cookieParser = require('cookie-parser')
var registerRouter = require('./routers.js/NewUserRouter');
var loginRouter = require('./routers.js/LoginRouter');
var newTeamRouter = require('./routers.js/NewTeamRouter');
var joinTeamRouter = require('./routers.js/JoinTeamRouter');
var authMiddle = require('./Services.js/auth').authMiddle;
require('express-async-errors');
var app = express();
app.use(cookieParser());
app.use(authMiddle);
app.use('/jointeam', joinTeamRouter);
app.use('/registerteam', newTeamRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(8000);