var http = require('http');
var os = require('os');
const readline = require('readline');
var port = 3000;
var ifaces = os.networkInterfaces();
var ips = new Array();;
var debug = false;

if(debug) console.log(ifaces); // returns an object with all ethernet interfaces in it
if(debug) console.log(Object.keys(ifaces)); // returns [ 'lo0', 'en0', 'awdl0', 'utun0', 'en4' ]

Object.keys(ifaces).forEach(function(ifname) {
  var alias = 0;
  
  if(debug) console.log(ifaces[ifname]); // returns each array for each interface
  // iterate through each array to find interfaces
  ifaces[ifname].forEach(function(iface){
    if('IPv4' !== iface.family || iface.internal !== false) {
      //skip over internal (ie. 127.0.0.1) and non-IPv4 addresses (ie. IPv6)
      return;
    }
    
    // save ifname and ip address to an array
    ips.push([ifname, iface.address]);
    if(debug){
      if(alias > 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
      } else {
        // this single interface has only one ipv4 address
        console.log(ifname, iface.address);
      }
    }
    ++alias;
  });
});

// list out item
if(debug) console.log(ips);

// message
console.log("Choose an ethernet device to start your server on (Enter: 0-" + (ips.length-1) + "): ");
for (var i = 0; i < ips.length; i++) {
    console.log(i + ". " + ips[i][0] + " " + ips[i][1]);
}

// prompt
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();

rl.on('line', (line) => {
  var index = line.trim();
  // make sure there is a valid index then get ip address
  if(index <= ips.length-1) {
    //console.log(ips[index]);
    ip = ips[index][1];
    //console.log(ip);
  } else {
    console.log('That does not compute. Please make a valid selection.');
    rl.prompt();
  }
  
  // create server and display page
  http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node!\n');
  }).listen(port, ip);
  console.log('Server running at ' + ip + ":" + port);
  
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});