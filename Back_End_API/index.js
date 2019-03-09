var express = require('express');
var cookieParser = require('cookie-parser')
var registerRouter = require('./routers.js/NewUserRouter');
var loginRouter = require('./routers.js/LoginRouter');
var newTeamRouter = require('./routers.js/NewTeamRouter');
var joinTeamRouter = require('./routers.js/JoinTeamRouter');
var commentRouter = require('./routers.js/CommentRouter');
var getNewCookieRouter = require('./routers.js/GetNewCookieRouter');
var fetchTeamDataRouter = require('./routers.js/FetchTeamDataRouter');
var authMiddle = require('./Services.js/auth').authMiddle;
require('express-async-errors');
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cookieParser());
app.use(authMiddle);
app.use('/jointeam', joinTeamRouter);
app.use('/registerteam', newTeamRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/getcookie', getNewCookieRouter);
app.use('/getteam', fetchTeamDataRouter);
app.use('/comment', commentRouter);

app.listen(8000);