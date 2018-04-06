var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var five = require("johnny-five");
var board = new five.Board();
var led, buttonR, buttonG, buttonB;

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
  
  buttonR = new five.Button(7);
  buttonG = new five.Button(4);
  buttonB = new five.Button(2);
    
  buttonR.on("press", function() {
    console.log( "Red Button pressed" );
    io.emit('red button press', {}); // send to client
  });
  
  buttonR.on("release", function() {
    console.log( "Red Button released" );
    io.emit('red button release', {}); // send to client
  });
    
  buttonG.on("press", function() {
    console.log( "Green Button pressed" );
    io.emit('green button press', {}); // send to client
  });
  
  buttonG.on("release", function() {
    console.log( "Green Button released" );
    io.emit('green button release', {}); // send to client
  });
    
  buttonB.on("press", function() {
    console.log( "Blue Button pressed" );
    io.emit('blue button press', {}); // send to client
  });
  
  buttonB.on("release", function() {
    console.log( "Blue Button released" );
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