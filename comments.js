// Create web server
//
// Usage: node comments.js
//

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

var COMMENTS_FILE = 'comments.json';

// Serve static files
app.use('/', express.static(__dirname + '/'));

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Add headers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

// GET /api/comments
app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    res.json(JSON.parse(data));
  });
});

// POST /api/comments
app.post('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    var comments = JSON.parse(data);

    var newComment = {
      id: Date.now(),