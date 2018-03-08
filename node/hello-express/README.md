# hello-express

These examples demonstrate how to use the [Express](https://expressjs.com/) framework for building applications. Node.js is required to use Express.

## Exercise-01: Hello World

1. Create a project and install Express
    ````
    mkdir exercise-01
    cd exercise-01
    npm init
    npm install express --save
    ````
    Remember to set the application entry point to app.js instead of the default index.js.
2. Add application javascript to app.js
    ````
    const express = require('express')
    const app = express()

    app.get('/', (req, res) => res.send('Hello World!'))

    app.listen(3000, () => console.log('Example app listening on port 3000!'))
    ````
3. Run the node app
    ````
    node app.js
    ````

References

* [Express.js Install](https://expressjs.com/en/starter/installing.html)
* [Express.js Hello World](https://expressjs.com/en/starter/hello-world.html)

## Exercise-02: Express Basics

This exercise is building an Express application from scratch. It uses [express](https://expressjs.com/), [pug](https://www.npmjs.com/package/pug), and [nodemon](https://nodemon.io/).

1. Make project directory and change to it.
    ````
    mkdir exercise-02
    cd exercise-02
    ````    
2. Initialize the folder with npm. Make sure to name the entry point to app.js.
    ````   
    npm init    
    ````
3. Install express and save to package.json.
    ````
    npm install express --save
    ````
4. Install pug and save to package.json.
    ````
    npm install pug --save
    ````    
5. Install [nodemon](https://nodemon.io/) globally.
    ````
    npm install -g nodemon
    ````    
6. Modify package.json file to include the following scripts.
    ````
    "scripts": {
      "start": "node app.js",
      "watch": "nodemon app.js -e js,pug"
    },
    ````
    The start script runs the node app. The watch script uses nodemon to run the application and watches for changes in js and pug files.
7. Create app.js. This is the entry point for our application.
    ````
    touch app.js
    ````
8. Add the following js to app.js to setup the application server.
    ````
    // require all dependencies
    var express = require('express');
    var app = express();

    // setup the template engine -- pug
    app.set('views', './views');
    app.set('view engine', 'pug');

    // GET response for '/'
    app.get('/', function(req, res) {
      // render the 'index' template and pass in a few variables
      res.render('index', {
        title: 'Hey',
        message: 'Hello World!'
      });
    });

    // start the server
    app.listen(3000, function() {
      console.log('Listening on http://localhost:3000');
    });
    ````
9. Make a new folder called **views** and create a file called index.pug inside of it.
    ````
    mkdir views
    touch views/index.pug
    ````
10. Add the following code to index.pug.
    ````
    html
      head
        title= title
      body
        h1= message
    ````
    This is basically like writing the following html into a vanilla html file.
    ````
    <html>
      <head>
          <title>title</title>
      </head>
      <body>
          <h1>message</h1>
      </body>
    </html>
    ````
11. Run the server and goto [http://localhost:3000](http://localhost:3000). Inspect the index in the browser with the dev tools. What do you see?
    ````
    npm run watch
    ````
12. Now if you make changes to any of the files and reload the browser you will see those changes. One downside of this workflow is nodemon doesn't have automatic reloading in the browser like live-server and others. Try modifying the index.pug file and watch the terminal. What happens? What happens in the browser?
13. Whats next? Well, this workflow has alot of steps, it doesn't offer much functionality out of the box, and it would be a pain to have to reproduce this every time I make a new application. For solving this problem we can use the [Express Generator](https://expressjs.com/en/starter/generator.html).
    ````
    npm install express-generator -g
    ````
14. Create a new project using it.
    ````
    express --view=pug MyApp
    ````
15. Navigate into the directory and install dependencies.
    ````
    cd MyApp && npm install
    ````
16. Run the server and goto [http://localhost:3000](http://localhost:3000).
    ````
    npm start
    ````
Next, we will build a project using the generator and inspect the file structure. After that we will begin to add additional functionality.
  
References

* [nodemon](https://nodemon.io/)
* [pug](https://www.npmjs.com/package/pug)
* [Express.js Generator](https://expressjs.com/en/starter/generator.html)

## Exercise-03: Express Generator

This exercise is building an an Express application using the express-generator cli. I suggest working through the previous examples first to get a basic understanding of what the generator is creating.

1. Install the express-generator globally
    ````
    npm install express-generator -g
    ````
After doing this you should see the cli if you type `express -h`. Try it.

2. Make a new app using the generator
    ````
    express --view=pug exercise-03
    ````
This will display a list of files created in the exercise-03 folder. This is a fully functional application template that you can start customizing. Lets run it!
````
.
├── app.js
├── bin
│   └── www
├── package-lock.json
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
````
  Note: If your views folder above contains _jade_ files then you forgot to use the `--view=pug` flag. Not to worry, just rename the files to .pug or regenerate the project. A little background - Sometime in 2016 or so jade became [pug](https://www.npmjs.com/package/pug). You will likely see alot of code out in the wild using jade still. If and when you encounter it, just know its the same. For all new projects use pug by specifying it with the view flag.

  Pro tip: If you are curious how to view a list of files in the terminal as a tree structure, check out the Linux utility called [tree](https://www.cyberciti.biz/faq/linux-show-directory-structure-command-line/). You will need [homebrew](https://brew.sh) to install it on MacOS. To print out the project directory as shown above you would enter `tree -C -I node_modules`. This says, print out the tree with colors assigned to the folders and to ignore the node_modules folder. Another useful version would be `tree -L 2 -C -I node_modules`, where `-L 2` specifies the level of depth to display.

3. Navigate into the directory and install dependencies
    ````
    cd exercise-03 && npm install
    ````
4. Run the application
    ````
    DEBUG=exercise-03:* npm start
    ````
Note: You could also just start the app using `npm start`. Specifying the DEBUG variable as shown enables console logging/debugging.

5. Open the browser and navigate to [http://localhost:3000](http://localhost:3000/). You should see the application running. It will greet you with a nice "Welcome to Express" message.

6. If you would like to customize your scripts like you did in exercise-02, just add the following to your package.json.
    ````
    "scripts": {
      "start": "node ./bin/www",
      "watch": "nodemon ./bin/www -e js,pug"
    },
    ````
    Now you can launch the watch script by typing
    ````
    npm run watch
    ````
7. Add the index.pug file to include the following code. With your app running, watch the terminal. What happens when you save it? Reload the page and you should see the changes.
    ````
    extends layout

    block content
      div#content
        h1= title
        p Welcome to #{title}
        p Fruit
        ul.fruit
          li Apples
          li Bananas
          li Oranges
        p Color
        ul.color
          li Red
          li Green
          li Blue
    ````
As we saw in exercise-02, this is rendering out as html. You can see this same HTML in the browser using the dev tools.     
````
<div id="content">
  <h1>Express</h1>
  <p>Welcome to Express</p>
  <p>Fruit</p>
  <ul class="fruit">
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
  </ul>
  <p>Color</p>
  <ul class="color">
    <li>Red</li>
    <li>Green</li>
    <li>Blue</li>
  </ul>      
</div>
````             

8. Now add a few more lines to the index.pug file just under the last ul. What does this addition do in the browser?
````
....
    p Search
    ul.search
      li
        a(href='https://google.com') Google
      li
        a(href='https://bing.com/') Bing
      li
        a(href='https://duckduckgo.com/', target='_blank') DuckDuckGo
````
If you inspect the HTML in the browser you will see additional HTML added. Are you starting to see how pug works? I suggest watching a few tutorial videos on the pug syntax to understand how more elements translate to HTML. Here's a good [Getting Started with Pug](https://www.youtube.com/watch?v=leilVbK0xQc) Tutorial.
````
<p>Search</p>
<ul class="search">
  <li><a href="https://google.com">Google</a></li>
  <li><a href="https://bing.com/">Bing</a></li>
  <li><a href="https://duckduckgo.com/" target="_blank">DuckDuckGo</a></li>
</ul>
````
        
References

* [Express.js Generator](http://expressjs.com/en/starter/generator.html)
* [express-generator](https://www.npmjs.com/package/express-generator)
* [Mozilla Express / Node: Building a Library Application Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
    * [Express Tutorial Part 2: Creating a skeleton website](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
* [Getting Started With The Pug Template Engine](https://www.youtube.com/watch?v=leilVbK0xQc)
* [The Pug Life — A Quick Intro to PugJS](https://medium.com/@andrewtsao/the-pug-life-a-quick-intro-to-pugjs-40b0895bdd5b)
* [Pug.js Getting Started](https://pugjs.org/api/getting-started.html)

---

Whats next?

Stay tuned for more examples of using Express with other frameworks and libraries to build functional applications. This framework could be used in combination with client-side libraries such as P5.js, D3.js, Three.js, A-Frame, and many others.












