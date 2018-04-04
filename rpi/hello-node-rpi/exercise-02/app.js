var http = require('http');
var os = require('os');
var port = 3000;

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port);
var ip;

// Choose network device
if(os.networkInterfaces().eth0) {
  ip = os.networkInterfaces().eth0[0].address;
  console.log('Server running on eth0 at ' + ip + ":" + port);
} else if (os.networkInterfaces().wlan0) {
  ip = os.networkInterfaces().wlan0[0].address;
  console.log('Server running on wlan0 at ' + ip + ":" + port);
} else {
  ip = null;
  console.log('No connection');
}

// set the ip address to 127.0.0.1 to run as localhost
//... listen(3000, '127.0.0.1');