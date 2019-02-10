var express = require('express');
var body = require('body-parser');
var randFunction = require("randomstring");
var Joi = require('joi');
var user = require('../TeamSchema');
var database = require('../Services.js/database');
var auth = require('../Services.js/auth.js');
var router = express.Router();
router.use(body.json());
router.post("/", (req, res) => {



});