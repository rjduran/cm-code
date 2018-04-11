# hello-aframe

These exercises provide a learning pathway for understanding how to use [A-Frame](https://aframe.io) with Node.js, Express, and Websockets for the development of interactive and connected devices.

## Table of Contents

* [What is A-Frame?](#what-is-a-frame)
* [How to Run an Application](#how-to-run-an-application)
* [Exercise-01: Hello A-Frame](#exercise-01-hello-a-frame)
* [Exercise-02: A-Frame Websockets](#exercise-02-a-frame-websockets)

## What is A-Frame?

[A-Frame](https://aframe.io/) is a web framework for building virtual reality experiences.

## How to Run an Application

```bash
npm install
node app.js
```
Or use `nodemon` to auto-reload the application when things change. Install `nodemon` globally if you don't have it with `npm i -g nodemon`.

```bash
nodemon app.js
```

## Exercise-01: Hello A-Frame

Make a basic server and start it using the localhost of the device. This exercise does not use Express.

## Exercise-02: A-Frame Websockets

Make a basic server and include websockets. Using websockets we can send data back and forth between the server and client. In this case, we are sending data from the server to the client to automate object rotation for a given time period.



