# hello-budo

This example shows how to use budo for quick prototyping of web applications.

What is budo?

[budo](https://github.com/mattdesl/budo) is a development server for rapid prototyping. It makes use of node.js, browserify and live reloading.

Install budo as a global module to follow along with these examples:
    ````
    npm install budo -g
    ````

## Exercise 01: Run budo and open browser

1. Make a new folder called exercise-01 and initialize it with npm
    ````
    mkdir exercise-01
    cd exercise-01
    npm init -y
    ````
    
2. Add a index.js file to your directory
    ````
    touch index.js
    ````
3. Run budo. It will open in a new browser window at http://127.0.0.1:9966 if you are not connected to the internet. Otherwise it will use your current IP address by default. You can specify a different port by using `--port` flag.
    ````
    budo index.js --open
    ````
    or with the port flag for example
    ````
    budo index.js --open --port 3000
    ````
4. Add the following Javascript to your index.js file and reload the browser tab that opened.
    ````
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
    ````
    budo index.js --live
    ````
3. Add the following Javascript to your index.js file. Save it and watch the browser reload. Magic!!
    ````
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
    ````
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
    ````
    budo index.js:bundle.js --live
    ````
4. Lets add jQuery to our project to make it more magical!
    ````
    npm install jquery --save
    ````    
5. Add the following Javascript to your index.js file. Save it and watch the browser reload and create a ghostly bundle.js (the only way to see that its being loaded is to inspect it with the Chrome Dev Tools > Sources Tab). Try clicking on the "Click Me!" div and watch the console. What happens?
    ````
    $ = require('jQuery');

    $(function(){
      $('#target').click(function(){
        console.log('yay! div clicked');
      });
    });
    ...
    ````

Still with me? More soon...Stay Tuned.





