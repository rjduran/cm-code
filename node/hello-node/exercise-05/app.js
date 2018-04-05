var http = require('http');
var os = require('os');
var port = 3000;
var ip;

// Choose network device
console.log(os.networkInterfaces()); // print out available devices
// if device en0 exists then use the ip address to start server
if(os.networkInterfaces().en0) {
  ip = os.networkInterfaces().en0[0].address; // the en0 index will vary
} else {
  ip = null;
  console.log('No connection');
  process.exit();
}

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node!\n');
}).listen(port, ip);
console.log('Server running on en0 at ' + ip + ":" + port);


