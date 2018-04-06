var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var five = require("johnny-five");
var board = new five.Board();
var led, button, rgb, sensor;

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/bootstrap-colorpicker/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap-colorpicker/dist/css')); // redirect CSS bootstrap

app.use('/img', express.static(__dirname + '/node_modules/bootstrap-colorpicker/dist/img')); // redirect CSS bootstrap

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


///////////////////////////////////////////////////////////////////////////////
// johnny-five
///////////////////////////////////////////////////////////////////////////////

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function() {
  console.log("Board Ready!");

  led = new five.Led(13);
  led.off();
  
  button = new five.Button(2);
    
  button.on("press", function() {
    console.log( "Button pressed" );
    io.emit('blue button press', {}); // send to client
  });
  
  button.on("release", function() {
    console.log( "Button released" );
    io.emit('blue button release', {}); // send to client
  });
  
  this.on("exit", function() {
    led.off();
  });
});


///////////////////////////////////////////////////////////////////////////////
// socket.io
///////////////////////////////////////////////////////////////////////////////
io.on('connection', function(socket) {
  console.log('a user connected');
  
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});