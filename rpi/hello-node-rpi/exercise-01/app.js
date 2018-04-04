var http = require('http');
var os = require('os');
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000);
var ip = os.networkInterfaces().wlan0[0].address;
console.log('Server running on ' + ip + ":3000");

// set the ip address to 127.0.0.1 to run as localhost
//... listen(3000, '127.0.0.1');