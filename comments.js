// create web server
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

// Path: index.html
<!DOCTYPE html>
<html>
<head>
  <title>Comments</title>
</head>
<body>
  <h1>Comments</h1>
  <ul id="comments"></ul>
  <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
  <script>
    $(document).ready(function() {
      $.getJSON('http://localhost:3000/comments', function(comments) {
        comments.forEach(function(comment) {
          $('#comments').append('<li>' + comment.name + ': ' + comment.message + '</li>');
        });
      });
    });
  </script>
</body>
</html>