// Create web server
var express = require('express');
var app = express();

// create comments array
var comments = [
  {name: 'John', message: 'Hello!'},
  {name: 'Jane', message: 'Hi!'}
];

// create route to get comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// start server
app.listen(3000, function() {
  console.log('Server started');
});
