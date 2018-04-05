// HTTP module
var http = require('http');

// Filesystem module
var fs = require('fs');

// This function handles an incoming "request"
// and sends back out a "response"
function handleRequest(request, response) {
  
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
    
};

// Create a server with the handleRequest callback (function)
var server = http.createServer(handleRequest);

// Listen on port 3000
server.listen(3000, '127.0.0.1');

// Print out to console
console.log('Server running at http://127.0.0.1:3000');