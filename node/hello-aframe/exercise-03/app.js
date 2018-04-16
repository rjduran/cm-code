var http = require('http');
var fs = require('fs');
var path = require('path');

var handleRequest = function(req, res) {
  
  // what did we request?
  var pathname = req.url;
  
  if (pathname == '/') {
    pathname = '/index.html';
  }
  
  // whats our file extension?
  var ext = path.extname(pathname);
  
  // map the extension to a file type
  var typeExt = {
    '.html': 'text/html'
  }
  
  // What type of file is it? Default to plain text.
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

console.log('Server running at http://127.0.0.1:3000');
  
// setup websockets
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("Client connected: " + socket.id);
  
  // send data upon connection
  socket.emit('rotate', { x: 0, y: 0, z: 0 });
  
  // send data to client every 5 seconds
  var myTimer = setInterval(function(){
    // rotate randomly on all axes
    socket.emit('rotate', { x: getRandomInt(0, 360), y: getRandomInt(0, 360), z: getRandomInt(0, 360) });
  }, 5000);
  
  // stop sending rotation messages after 20 seconds and set rotation to "0 0 0"
  setTimeout(function() {
    socket.emit('rotate', { x: 0, y: 0, z: 0 });
    clearInterval(myTimer);
  }, 30000);
  
  // Send random color for animating cylinder
  socket.emit('animate-cylinder', {color: getRandomColor()});
  
  // Send random scale size for animating sphere
  var scl = getRandomFloatNon(1, 2);
  socket.emit('animate-sphere', {x: scl, y: scl, z: scl});
  
  socket.on('disconnect', function() {
    console.log("Client at " + socket.id + " has disconnected");
  });
  
  // Generate random integer between min and max (inclusive)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generate random float between min and max (inclusive)
  function getRandomFloat(min, max) {
    return Math.random() * (max - min + 1) + min;
  }
  
  // Generate random float between min and max (non-inclusive)
  function getRandomFloatNon(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Generate random HEX color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

});