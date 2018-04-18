var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

///////////////////////////////////////////////////////////////////////////////
// socket.io
///////////////////////////////////////////////////////////////////////////////
io.on('connection', function(socket){
  console.log('a client connected: ' + socket.id);
  
  // from server to client(s)
  socket.emit('message', {hello: 'world'});
  
  // from unity client to server
  socket.on('unity', function(data){
    console.log(data);
    
    // send data to all clients (except the client sending data)
    socket.broadcast.emit('message', data);
  });
  
  // from browser client to server
  socket.on('browser', function(data){
    console.log(data);
    
    // send data to all clients (except the client sending data)
    socket.broadcast.emit('message', data);
  });
    
  socket.on('disconnect', function() {
    console.log('a client disconnected: ' + socket.id);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});