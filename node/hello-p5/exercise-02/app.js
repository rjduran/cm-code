var http = require('http'); // http module
var fs = require('fs'); // file system module
var path = require('path');

var handleRequest = function(req, res) {
  
  // what did we request?
  var pathname = req.url;
  
  if (pathname == '/') {
    pathname = '/index.html';
  }
  
  // whats our file extension?
  var ext = path.extname(pathname);
  //console.log(ext);
  
  // map the extension to a file type
  var typeExt = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
  }
  
  // What is it?  Default to plain text
  var contentType = typeExt[ext] || 'text/plain';

  // User file system module to read index.html file
  fs.readFile(__dirname + pathname, function(err, data) {
    // If there is an error, write outerror message
    if(err) {
      res.writeHead(500);
      return res.end('Error loading ' + pathname);
    }
    // Else, send the data (the contents of the file)
    res.writeHead(200,{'Content-Type': contentType});
    res.end(data);
  });
};

var server = http.createServer(handleRequest);
server.listen(3000, '127.0.0.1');


//websockets
var io = require('socket.io').listen(server);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',

  function (socket) {

  console.log("We have a new client: " + socket.id);

    // receives 'mouse' messages
    // broadcasts 'mouse' messages
    socket.on('mouse', function(data) {
      // Data comes in as whatever was sent, including objects
      console.log("Received: 'mouse' " + data.x + " " + data.y);
      // Send it to all other clients
      socket.broadcast.emit('mouse', data);
      }
    );

    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }

);

console.log('Server running at http://127.0.0.1:3000');
