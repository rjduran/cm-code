// HTTP module
var http = require('http');
var url = require('url');

// Filesystem module
var fs = require('fs');

// This function handles an incoming "request"
// and sends back out a "response"
function handleRequest(request, response) {
  
  // Get the path from the request's URL
  var pathname = url.parse(request.url).pathname;
  
  // Test if it's equal to 'hello' or 'world' or neither and respond accordingly by loading different html files
  if(pathname == '/hello') {
    // Use the file system module to read an hello.html file
    fs.readFile(__dirname + '/hello.html',
      // Call back for reading the file
      function(err, data) {
        // if there is an error
        if(err){
          response.writeHead(500);
          return response.end('Error loading hello.html');
        }
        // Otherwise, send the data (contents of the file)
        response.writeHead(200);
        response.end(data);
      }
    );
  } else if( pathname == '/world') {
    // Use the file system module to read an world.html file
    fs.readFile(__dirname + '/world.html',
      // Call back for reading the file
      function(err, data) {
        // if there is an error
        if(err){
          response.writeHead(500);
          return response.end('Error loading world.html');
        }
        // Otherwise, send the data (contents of the file)
        response.writeHead(200);
        response.end(data);
      }
    );
  } else {
    // Use the file system module to read an index.html file
    fs.readFile(__dirname + '/index.html',
      // Call back for reading the file
      function(err, data) {
        // if there is an error
        if(err){
          response.writeHead(500);
          return response.end('Error loading index.html');
        }
        // Otherwise, send the data (contents of the file)
        response.writeHead(200);
        response.end(data);
      }
    );
  }
};

// Create a server with the handleRequest callback (function)
var server = http.createServer(handleRequest);

// Listen on port 3000
server.listen(3000, '127.0.0.1');

// Print out to console
console.log('Server running at http://127.0.0.1:3000');