var express = require('express');
var registerRouter = require('./routers.js/NewUserRouter');
var loginRouter = require('./routers.js/LoginRouter');
var app = express();
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(8000);