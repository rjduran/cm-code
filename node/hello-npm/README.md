# hello-npm

This example shows the basics of using npm (node package manager) to setup a project and in a common workflow.

What is npm?

[npm](https://www.npmjs.com/) is a package manager installed with [node.js](nodejs.org). Read the (outstanding) [documentation](https://docs.npmjs.com/) to get familiar with how it works.

If you are more of a video tutorial person, [watch this short crash course video](https://www.youtube.com/watch?v=76A2Ppenxh8) to learn more about node, npm, nvm, and other workflows. Here's a [shorter one](https://www.youtube.com/watch?v=6fj0cpmMiVg) if you are short on time or a [longer one](https://www.youtube.com/watch?v=jHDhaSSKmB0) if you have more time and want to go deeper.

I recommend building the exercises from scratch. If you need to run them you can use:

````
cd example-##
npm install
live-server
````

## Exercise 01: Initialize a project with a package.json file

1. Make a new directory for your project and change into the directory
    ````
    mkdir exercise-01
    cd exercise-01
    ````
2. Run npm init utility to configure the package.json file and add it to your folder.
    ````
    npm init
    ````
    Click through the prompts and change anything you want. Don't worry if you mess up or forget to enter something, you can open the file and edit after you make it or delete it and start over.
    
## Exercise 02: Install a npm package

1. Repeat everything in Exercise 01.
    ````
    mkdir exercise-02
    cd exercise-02
    npm init -y
    ````
2. Install the jQuery library with npm and add it to your package.json file
    ````    
    npm install jquery --save
    ````
    Inspect the project directory, what's different?

## Exercise 03: Build a simple webpage and use jQuery

1. Repeat everything in Exercise 02.
    ````
    mkdir exercise-03
    cd exercise-03
    npm init -y
    npm install jquery --save
    ````
2. Make a new index.html file and add a basic html page structure including head and body tags.
    ````
    <!DOCTYPE html>
    <html>
      <head>    
        <!-- insert scripts here -->
      </head>
      <body>
        <div id="target">Click Me!</div>
      </body>
    </html>
    ````
3. Make a new script.js file and add it along with the jQuery library to the index.html file in head. Order matters. Add jQuery first.
    ````
    <script src="./node_modules/jquery/dist/jquery.min.js"></script>
    <script src="./script.js"></script>
    ````
    Your file should look like this:
    ````
    <!DOCTYPE html>
    <html>
      <head>        
        <script src="./node_modules/jquery/dist/jquery.min.js"></script>
        <script src="./script.js"></script>
      </head>
      <body>
        <div id="target">Click Me!</div>
      </body>
    </html>
    ````
4. Define logic in your script.js to do something when you click on the "Click Me!" div. If you are new to jQuery you can learn more [here](https://jquery.com/).
    ````
    $(function(){
      $('#target').click(function(){
        console.log('yay! div clicked');
      });
    });
    ````         
5. Start a live-server instance for your current project and test it out. Using the Chrome Dev Tools, monitor the console to see what happens when you click on the "Click Me!" div in your page. You should see "yay! div clicked" print out to the console.

## Exercise 04: Install browserify (an npm package) globally and use it in a simple webpage

1. Repeat everything in Exercise 03 but use exercise-04 for the name.
2. Install browserify globally
    ````
    npm install -g browserify
    ````
    What is [browserify](http://browserify.org/)? Its a module bundler allowing your to bundle all your js files into one single file called bundle.js. This reduces loading time when loading an application because only 1 file is loaded vs separate js files for each library or module required.
    Pro tip: To see what node packages are installed globally you can use `npm list -g --depth=0`. To make this easy to remember, I setup an alias in my .bash_profile file with the line `alias npmg='npm list -g --depth=0'`. This allows me to only type `npmg` to call this line.
2. Edit the script.js file to include a require statement for jQuery. Place it at the top of the file. Remember jQuery? This is the npm module you installed via `npm install` in your package.json file.
    ````
    $ = require('jQuery');
    ...
    ````
    This basically says "pull in all the jQuery code into this script file".
3. Run the following command to build the bundle.js file. It will appear in the same directory as your script.js file. Inspect the bundle.js file. What does it contain?
    ````
    browserify script.js -o bundle.js
    ````     
4. Edit the index.html file to include the newly created bundle.js file.
    ````
    <script src="./bundle.js"></script>
    ````
    Your index.html file should now look like this:
    ````
    <!DOCTYPE html>
    <html>
      <head>
        <script src="./bundle.js"></script>
      </head>
      <body>
        <div id="target">Click Me!</div>
      </body>
    </html>
    ````
5. Start a live-server instance for your current project and test it out. Using the Chrome Dev Tools, monitor the console to see what happens when you click on the "Click Me!" div in your page. You should see "yay! div clicked" print out to the console.
 
## Example-05: Adding Bootstrap to a project

1. Repeat everything in Exercise 04 but use exercise-05 for the name.
2. Install [bootstrap](https://www.npmjs.com/package/bootstrap) and [popper.js](https://www.npmjs.com/package/popper.js)(bootstrap dependency) with npm.
    ````
    npm install popper.js --save
    npm install bootstrap --save
    ````
3. Modify the script.js file to require them.
    ````
    $ = require('jQuery');
    require('bootstrap')
    ````
4. Run browserify to generate the bundle.js file.
    ````
    browserify script.js -o bundle.js
    ````
5. Looking at the Bootstrap [Starter Template](http://getbootstrap.com/docs/4.0/examples/starter-template/) example in the [Bootstrap Examples](http://getbootstrap.com/docs/4.0/examples/). Add some of the elements to your index.html file such that you have a nav bar and a button to replace the div with Click Me!. This includes adding the css files to your project directory and links into the head tag of index.html.
    ````
    ...
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="starter-template.css" >
    ...
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
6. Start a live-server instance for your current project and test it out. Using the Chrome Dev Tools, monitor the console to see what happens when you click on the "Click Me!" button in your page. You should see "yay! div clicked" print out to the console.

## References

* [node.js](nodejs.org)
* [npm](https://www.npmjs.com/)
* [live-server](https://www.npmjs.com/package/live-server/)
* [bootstrap](https://getbootstrap.com/)















  


