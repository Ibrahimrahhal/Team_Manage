var mongoose = require('mongoose');
var mongodbServer = require('../Setting').mongodbServer;
var user = require('../userSchema');
var teamSchema = new mongoose.Schema(team.team);
var userModel = mongoose.model('team', teamSchema);
mongoose.connect(mongodbServer);