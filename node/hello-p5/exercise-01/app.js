var http = require('http'); // http module
var fs = require('fs'); // file system module
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
