# hello-node

These exercises provide a learning pathway for understanding how to use Node.js for the development of interactive and connected devices.

## Table of Contents

* [What is Node.js?](#what-is-nodejs)
* [How to Run a Node.js Application](#how-to-run-a-nodejs-application)
* [Exercise-01: Hello Node](#exercise-01-hello-node)
* [Exercise-02: Working with Paths](#exercise-02-working-with-paths)
* [Exercise-03: Loading Files](#exercise-03-loading-files)
* [Exercise-04: Loading Files by Path](#exercise-04-loading-files-by-path)
* [Exercise-05: Basic Server with IP Address and Port](#exercise-05-basic-server-with-ip-address-and-port)
* [Exercise-06: Hello Tiny CLI](#exercise-06-hello-tiny-cli)
* [Exercise-07: Basic Server with Selectable IP Address and Port](#exercise-07-basic-server-with-selectable-ip-address-and-port)
* [References](#references)

## What is Node.js?

[Node.js](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Looking for some more detailed explanations about Node.js and how it can be used? Read through [Node.js Introduction](https://www.w3schools.com/nodejs/nodejs_intro.asp) and [Node.js for Beginners](https://code.tutsplus.com/tutorials/nodejs-for-beginners--net-26314). Learn about some use cases in "[Why The Hell Would I Use Node.js? A Case-by-Case Tutorial](https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js)."

## How to Run a Node.js Application

To run a node application type `node` followed by the filename you wish to run. In this case, `app.js`.

```bash
node app.js
```

## Exercise-00: Print to Console

Using the `console.log()` function, write a node app that prints out "Hello World" to the console.

```javascript
console.log("Hello World");
```

## Exercise-01: Hello Node

Make a basic server and start it using the localhost of the device.


## Exercise-02: Working with Paths

This exercise goes over how to route incoming requests and respond based on the path.

To request files from a server, a client must specify a path or "route" such as "/" or "/one". In the browser this looks like http://localhost:3000/ or http://localhost:3000/one.

To set this up first require the `http` and `url` modules. The `url` module is optional in this case and is used to parse the incoming path to get the `pathname`. Check out the Node docs on on [URL](https://nodejs.org/docs/latest/api/url.html) to learn more about how this module works.
```javascript
var http = require('http');
var url = require('url'); // optional
```

After defining the modules needed, we create the handleRequest function to be used to handle all requests and responses for the server just as in the previous exercise.

```javascript
var handleRequest = function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // Option 1: Get the pathname from the request's URL
  //var pathname = url.parse(request.url).pathname;
  console.log(url.parse(request.url)); // print out the parsed url to learn more about the object.
  
  // Option 2: Just use the request's URL
  var pathname = request.url;    
  
  //console.log(pathname);
  
  // Test if it's equal to 'one' or 'two' or 'three' and respond accordingly
  if(pathname == '/one') {
    response.end('One!\n');
  } else if( pathname == '/two') {
    response.end('Two!\n');
  } else if( pathname == '/three') {
    response.end('Three!\n');
  } else {
    response.end('Hello World\n');
  }
};
```

Create the server and start it.

```javascript
// Create a server with the handleRequest callback (function)
var server = http.createServer(handleRequest);

// Listen on port 3000
server.listen(3000, '127.0.0.1');

// Print out to console
console.log('Server running at http://127.0.0.1:3000');
```

Start server

```bash
node app.js
```

You should see the correct response when navigating to the different URL's.

* [http://localhost:3000](http://localhost:3000)
* [http://localhost:3000/one](http://localhost:3000/one)
* [http://localhost:3000/two](http://localhost:3000/two)
* [http://localhost:3000/three](http://localhost:3000/three)

## Exercise-03: Loading Files

This exercise goes over how to load files, such as index.html.


## Exercise-04: Loading Files by Path

This exercise goes over how to load files, such as index.html, by routing incoming requests based on the path.

This example illustrates the benefit of using a framework like Express. It simplifies the process of defining routes and loading the correct files.


## Exercise-05: Basic Server with IP Address and Port

This exercise goes over how to locate the local IP address associated with ethernet device en#, where # is a number ranging from 0 to the number of available network devices in the system, and how to then use the ip address to startup a server.

The best way to check what ethernet devices are active on a system is to open the terminal and type `ifconfig`. A listing of all available devices will appear along with their `inet`. Look for this line under a device and ignore the rest.

Typically en# shows up as en0 for the first available device which is usually the wifi adapter. Assuming Wifi is turned on, you should see an en# device available. If the system has a wired connection this will show up first. If both or more are connected using thunderbolt or USB dongle devices, more will show up with different en# values. Knowing what en# adapter is being used is important for deciding which IP address to start a server on.

The file starts out with all the `require()` functions and a couple variables to store the port and ip address.

```
var http = require('http');
var os = require('os');
var port = 3000;
var ip;
```

The there is a debug statement to display all ethernet devices. The code below will print out all available devices. Look for the en# device that matches the one you identified using `ifconfig` previously.
```
console.log(os.networkInterfaces());
```

The result will consists of an object that has key/value pairs with the values being arrays filled with objects. For example, you will see something similar to this object with an address, netmask, family, mac, and internal key/value pairs. All we need is the address value as the IP address. But how do we get it and use it?
```
{ address: '192.168.0.21',
  netmask: '255.255.255.0',
  family: 'IPv4',
  mac: '00:00:00:00:00:00',
  internal: false }
```

 In a simple way we will first check if the en# device exists, then get the ip address, and then use it to create the server.
 
 To get the correct ip address you need to look for the object within the en# array that has a family of "IPv4" and count the object up from 0 in this array to find the index. For example, if I have an array that looks like this `var myArray = [{}, {}, {}];`, I have 3 objects, so I count up in the array: myArray[0],myArray[1],myArray[2] using the index to access each object.
   
**Note the en# will likely vary based on your system. Usually its en0.**

```
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
```

Run the app and you should see a log statement in the terminal and be able to connect to the app at http://your-ip-address:3000.

```
node app.js
```

## Exercise-06: Hello Tiny CLI

This is a Tiny CLI that accepts input and responds to the console. It is based on [Example: Tiny CLI](https://nodejs.org/api/readline.html#readline_example_tiny_cli) in the Node.js documentation. The prompt asks for user input in the form of "hello", "hola", or "bonjour" and responds accordingly. To exit the CLI type "bye" or CTRL + C.


## Exercise-07: Basic Server with Selectable IP Address and Port

This checks for available devices and prompts the user which ethernet (eth) device to connect to.


## References

* [Node.js Documentation](https://nodejs.org/api/index.html)
* [Node.js for Beginners](https://code.tutsplus.com/tutorials/nodejs-for-beginners--net-26314)
* [Why The Hell Would I Use Node.js? A Case-by-Case Tutorial](https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js)
 * [What is Node.js used for in simple terms?](https://www.quora.com/What-is-node-js-used-for-in-simple-terms)
* [Understanding Node.js](https://www.codeschool.com/blog/2014/10/30/understanding-node-js/)
* [Get local IP address in node.js](https://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js)
* [How to Exit in Node.js](http://stackabuse.com/how-to-exit-in-node-js/)
* [Requiring modules in Node.js: Everything you need to know](https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8)
* [CSE 398: Node.js Tutorial](http://www.cse.lehigh.edu/~spear/cse398/tutorials/nodejs.html)
