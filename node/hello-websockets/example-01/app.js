var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

///////////////////////////////////////////////////////////////////////////////
// socket.io
///////////////////////////////////////////////////////////////////////////////
io.on('connection', function(socket) {
  console.log('a user connected');
    
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  
  // receive message from client
  socket.on('from client', function(data) {
    console.log('message: ' + data.message);    
  });
  
});

// send message to client
function sendData() {
  var myData = Math.floor(Math.random() * 10);
  console.log(myData);
  io.emit('from server', { message: myData }); // send to client
}
setInterval(sendData, 2000);


http.listen(3000, function() {
  console.log('listening on *:3000');
});