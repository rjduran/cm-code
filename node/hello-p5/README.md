# hello-p5

These exercises provide a learning pathway for understanding how to use [p5.js](https://p5js.org) with Node.js, Express, and Websockets for the development of interactive and connected devices.

## Table of Contents

* [What is p5.js?](#what-is-p5js)
* [How to Run an Application](#how-to-run-an-application)
* [Exercise-01: Hello p5](#exercise-01-hello-p5)
* [Exercise-02: p5 Websockets](#exercise-02-p5-websockets)

## What is p5.js?

[p5.js](https://p5js.org/) is a JavaScript library that starts with the original goal of [Processing](https://processing.org/), to make coding accessible for artists, designers, educators, and beginners, and reinterprets this for today's web.

## How to Run an Application

```bash
npm install
node app.js
```
Or use `nodemon` to auto-reload the application when things change. Install `nodemon` globally if you don't have it with `npm i -g nodemon`.

```bash
nodemon app.js
```

## Exercise-01: Hello p5

This exercise walks through creating a basic node server that runs a p5 sketch.


## Exercise-02: p5 Websockets

Make a basic server and include websockets. Using websockets we can send data back and forth between the server and client. In this case, we create a system for passing data from one instance of a p5 sketch to another.

Open two browser windows and goto [localhost:3000](http://localhost:3000/).



