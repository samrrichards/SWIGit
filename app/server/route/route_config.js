"use strict";

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const User = require('../data/models/User.js');
const Post = require('../data/models/Post.js');
const Utils = require('../data/api_handler/utils.js');


exports.path = {
  root: path.join(__dirname, '../../public'),
  index: path.join(__dirname, '../../public/index.html')
};

exports.serve = {
  index: function(req,res,next) {
    fs.readFile(exports.path.index, 'utf-8', function(err,data) {
      if(!err)
        res.status(200).send(data);
      else
        res.redirect('/');
    });
  }
};

exports.utils = {
	login: function(req,res) {

	},

	signup: function(req,res) {
		Utils.createUserFolder(req, res);		
	},

	publish: function(req,res) {
		Utils.publish(req, res);
	}
}
