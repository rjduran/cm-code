// This function handles an incoming "request"
// and sends back out a "response"
var handleRequest = function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
};

// HTTP module. Doc: https://nodejs.org/api/http.html
var http = require('http');

// Create a server with the handleRequest callback (function)
var server = http.createServer(handleRequest);

// Listen on port 3000
server.listen(3000, '127.0.0.1');

// Print out to console
console.log('Server running at http://127.0.0.1:3000');

// The same code can be written in a more concise way as follows.
// var http = require('http');
// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World');
// }).listen(8124, '127.0.0.1');
//
// console.log('Server running at http://127.0.0.1:8124');
