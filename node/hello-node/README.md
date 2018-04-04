# hello-node

These exercises provide a learning pathway for understanding the application of Node.js for the development of interactive and connected devices.

## Table of Contents

* [What is Node.js?](#what-is-nodejs)
* [How to Run a Node.js Application](#how-to-run-a-nodejs-application)
* [Exercise-01: Hello Node](#exercise-01-hello-node)
* [Exercise-02: Basic Server with IP Address and Port](#exercise-02-basic-server-with-ip-address-and-port)
* [Exercise-03: Hello Tiny CLI](#exercise-03-hello-tiny-cli)
* [Exercise-04: Basic Server with Selectable IP Address and Port](#exercise-04-basic-server-with-selectable-ip-address-and-port)
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

## Exercise-02: Basic Server with IP Address and Port

This uses the local IP address associated with ethernet device en#, where # is a number ranging from 0 to the number of available network devices in the system.

The best way to check what ethernet devices are active on a system is to open the terminal and type `ifconfig`. A listing of all available devices will appear along with their `inet`. Look for this line under a device and ignore the rest.

Typically en# shows up as en0 for the first available device which is usually the wifi adapter. If the system has a wired connection this will show up first. If both or more are connected using thunderbolt or USB dongle devices, more will show up.

## Exercise-03: Hello Tiny CLI

This is a Tiny CLI that accepts input and responds to the console. It is based on [Example: Tiny CLI](https://nodejs.org/api/readline.html#readline_example_tiny_cli) in the Node.js documentation. The prompt asks for user input in the form of "hello", "hola", or "bonjour" and responds accordingly. To exit the CLI type "bye" or CTRL + C.

## Exercise-04: Basic Server with Selectable IP Address and Port

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
