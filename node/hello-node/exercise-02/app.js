var http = require('http');
var url = require('url'); // optional

// This function handles an incoming "request"
// and sends back out a "response"
var handleRequest = function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // Get the path from the request's URL
  //var pathname = url.parse(request.url).pathname;
  var pathname = request.url;
  // console.log(request.url);
  console.log(url.parse(request.url));
  //console.log(pathname);
  
  // Test if it's equal to 'one' or 'two' or 'three' and respond accordingly
  if(pathname == '/one') {
    response.end('One!\n');
  } else if( pathname == '/two') {
    response.end('Two!\n');
  } else if( pathname == '/three') {
    response.end('Three!\n');
  } else {
    response.end('Hello World\n');
  }
};

// Create a server with the handleRequest callback (function)
var server = http.createServer(handleRequest);

// Listen on port 3000
server.listen(3000, '127.0.0.1');

// Print out to console
console.log('Server running at http://127.0.0.1:3000');