var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var five = require("johnny-five");
var board = new five.Board();
var led, rgb;

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
  //led.blink(500);
    
  rgb = new five.Led.RGB([6, 5, 3]);
  
  
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
  
  socket.on('rgb led on', function(data) {
    console.log('message: rgb led on, ' + data.color);
    if(board.isReady) {
      rgb.color(data.color);
    }
  });
  
  socket.on('rgb led off', function(data) {
    console.log('message: rgb led off, ' + data.color);
    if(board.isReady) {
      rgb.color(data.color); // same as setting to #000000
    }
  });
  
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});