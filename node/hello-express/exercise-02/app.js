// require all dependencies
var express = require('express');
var app = express();

// setup the template engine -- pug
app.set('views', './views');
app.set('view engine', 'pug');

// GET response for '/'
app.get('/', function(req, res) {
  // render the 'index' template and pass in a few variables
  res.render('index', {
    title: 'Hello World!',
    message: 'Hello World!'
  });
});

// start the server
app.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});