var express = require('express');
var body = require('body-parser');
var user = require('../userSchema');
var mongoose = require('mongoose');
var Joi = require('joi');
var mongodbServer = require('../setting').mongodbServer;
var router = express.Router();