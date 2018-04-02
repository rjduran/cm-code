# hello-budo

This example shows how to use budo for quick prototyping of web applications.

## Table of Contents

* [What is budo?](#what-is-budo)
* [Exercise 01: Run budo and open browser](#exercise-01-run-budo-and-open-browser)
* [Exercise 02: Run budo and live reload](#exercise-02-run-budo-and-live-reload)
* [Exercise 03: Run budo and generate then live reload bundle.js](#exercise-03-run-budo-and-generate-then-live-reload-bundlejs)
* [Exercise 04: Add Bootstrap to a budo Project](#exercise-04-add-bootstrap-to-a-budo-project)

## What is budo?

[budo](https://github.com/mattdesl/budo) is a development server for rapid prototyping. It makes use of node.js, browserify and live reloading.

Install budo as a global module to follow along with these examples:
    ````
    npm install budo -g
    ````

## Exercise 01: Run budo and open browser

1. Make a new folder called exercise-01 and initialize it with npm
    ````bash
    mkdir exercise-01
    cd exercise-01
    npm init -y
    ````
    
2. Add a index.js file to your directory
    ````bash
    touch index.js
    ````
3. Run budo. It will open in a new browser window at http://127.0.0.1:9966 if you are not connected to the internet. Otherwise it will use your current IP address by default. You can specify a different port by using `--port` flag.
    ````bash
    budo index.js --open
    ````
    or with the port flag for example
    ````bash
    budo index.js --open --port 3000
    ````
4. Add the following Javascript to your index.js file and reload the browser tab that opened.
    ````javascript
    console.log("well this works!");

    hello();

    function hello() {
      console.log("hello!!");
    }
    ````
    Open the Chrome Dev Tools and inspect the console. You should see the log statements printed out.

## Exercise 02: Run budo and live reload

1. Repeat everything in Exercise 01.
2. Run budo but this time with the `--live` flag option.
    ````bash
    budo index.js --live
    ````
3. Add the following Javascript to your index.js file. Save it and watch the browser reload. Magic!!
    ````javascript
    ...
    world();

    function world() {
      console.log("world!!");
    }
    ...
    ````

## Exercise 03: Run budo and generate then live reload bundle.js

1. Repeat everything in Exercise 02.
2. Make a new index.html file and add the following. Notice the bundle.js file. But we dont have a bundle.js file? No, don't make one.
    ````html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <script src="./bundle.js"></script>
      </head>
      <body>
        <div id="target">Click Me!</div>
      </body>
    </html>
    ````    
3. Run budo but this time with the following options. This will run budo and generate the bundle.js file but never save it in the directory. This is basically joining all the js files together (as we saw before in the hello-npm examples).
    ````bash
    budo index.js:bundle.js --live
    ````
4. Lets add jQuery to our project to make it more magical!
    ````bash
    npm install jquery --save
    ````    
5. Add the following Javascript to your index.js file. Save it and watch the browser reload and create a ghostly bundle.js (the only way to see that its being loaded is to inspect it with the Chrome Dev Tools > Sources Tab). Try clicking on the "Click Me!" div and watch the console. What happens?
    ````javascript
    $ = require('jQuery');

    $(function(){
      $('#target').click(function(){
        console.log('yay! div clicked');
      });
    });
    ...
    ````

## Exercise 04: Add Bootstrap to a budo Project

1. Repeat everything in Exercise 03.
2. Run budo while you are making changes to your files to see everything auto reload. This is the power in using a simple live-server type environment for rapid prototyping. At times you may need to stop and restart the server in the terminal.
    ````bash
    budo index.js:bundle.js --live --open
    ````
3. Make a new css file named starter-template.css and add the following.
    ````css
    .starter-template {
      padding: 3rem 1.5rem;
      text-align: center;
    }

    .lead {
      color: red;
      background-color: black;
    }

    #target {
      color: red;
      background-color: blue;
    }
    ````    
4. Add bootstrap and its dependencies to your package.json file via npm.
    ````bash
    npm install popper.js bootstrap --save
    ````
5. Add bootstrap css files to your index.html file. After this any bootstrap html you add should have the familiar bootstrap aesthetic seen in example-05 from hello-npm.
    ````html
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="starter-template.css" >
    ````
6. Add the following html to the body your index.html file.
    ````html
    ...
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Magic Button App</a>
    </nav>

    <div class="container-fluid">
      <!-- Content here -->
      <!-- <div id="target">Click Me!</div> -->
      <div class="starter-template">
        <h1>Magic Button</h1>
        <p class="lead">You know you want to click it...</p>
        <button id="target" type="button" class="btn btn-primary">Click Me!</button>
      </div>
    </div>
    ...
    ````
7. Add the following Javascript to your index.js file. Save it and watch the browser reload and create a ghostly bundle.js (the only way to see that its being loaded is to inspect it with the Chrome Dev Tools > Sources Tab). Try clicking on the "Click Me!" button and watch the console and the browser. What happens? See if you can figure out whats going on in the jQuery function.
    ````javascript
    $ = require('jQuery');
    require('bootstrap')

    console.log("well this works!");

    hello();
    hello();
    hello();
    world();
    foo();

    function hello() {
      console.log("hello!!");
    }

    function world() {
      console.log("world!!");
    }

    function foo() {
      console.log("foo!");
    }

    $(function(){
      var clicked = false;
      
      $('#target').click(function(){
        console.log('yay! div clicked');
        // Ex: Change background color of .lead
        //$('.lead').css('background-color', '#ccc');
        
        // Ex: Toggle background and text colors
        var bgcolor = clicked ? 'black' : 'blue';
        var color = clicked ? 'red' : 'white';
        $('.lead').css('background-color', bgcolor);
        $('.lead').css('color', color);
        
        // Ex: Toggle background and text colors of button
        var bgcolor = clicked ? 'blue' : 'red';
        var color = clicked ? 'white' : 'yellow';
        $('#target').css('background-color', bgcolor);
        $('#target').css('color', color);
        
        clicked = !clicked;
        
      });
      
      $('.starter-template').append('<p>This paragraph is appended to the starter-template class just after the button using jQuery. Change this line to see it change in the <strong>HTML</strong>.</p>');
            
    });
    ````
At this point your development environment is setup such that you can change any code in your index.html file, index.js file, or starter-template.css file and see it reload automatically in the browser. This kind of workflow is very powerfull for prototyping and in the end sharing projects with others via github.  
    
Still with me? More soon...Stay Tuned.












