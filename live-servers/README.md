# live-servers

This folder contains examples of how to create live servers and localhost development environments.

To use the examples here just clone the top level cm-code repo and open this directory up in Atom.

## atom-live-server

To use this workflow you need to have Atom installed and be familiar with installing packages.

Benefits:

* Launch from Atom
* Automatic reloading
* Simple and easy to use server for rapid prototyping
* Ability to use in combination with ngrok to tunnel (via secondary terminal window)

1. Install the [atom-live-server](https://atom.io/packages/atom-live-server) package using apm or in Atom: Atom Preferences > Settings > Install > Search for "atom-live-server" and Install.
````
apm install atom-live-server
````
2. Move project directory to the top of the Project tree (left side bar area). Packages > atom-live-server to launch the server within Atom. It will open up your browser to the address 127.0.0.1:3000.
3. Modify the index.html file and watch it reload in the browser in realtime.

## npm-live-server

To use this workflow you need to have Node.js installed and be comfortable working with npm packages.

Benefits:

* Automatic reloading
* Simple and easy to use server for rapid prototyping
* Ability to use in combination with ngrok to tunnel (via secondary terminal window)

1. Install the [live-server](https://www.npmjs.com/package/live-server) npm module globally. With this you will be able to run `live-server` from the command line shown in the next step.
````
npm install -g live-server
````
2. Navigate to your project directory in the terminal. This is where you will need to launch the live-server from.
````
cd cm-code/live-servers/npm-live-server-test
````

3. Enter the following in the terminal to launch the live server for the current directory. It will open up your browser to the address 127.0.0.1:8080. Try `live-server --help` to see options for the command. You can specify a different port by using the `--port=PORT` option. For example, if you want your app to run on port 3030 you would enter, `live-server --port=3030`.
````
live-server
````
4. Modify the index.html file and watch it reload in the browser in realtime.

## browser-sync-test

To use this workflow you need to have Node.js installed and be comfortable working with npm packages.

Benefits:

* Automatic reloading
* Ability to open the same localhost on any device on a local network
* Admin GUI for [Browsersync](https://browsersync.io/)
* Ability to use in combination with ngrok to tunnel (via secondary terminal window)

1. Install the [browser-sync](https://www.npmjs.com/package/browser-sync) npm module globally.
````
npm install -g browser-sync
````
2. Make a new project directory called `test` and navigate to your project directory.
````
mkdir test
cd test
````
3. Make a new index.html file and give it structure. Add css and js files the same way and test out selectors and javascript as well.
````
touch index.html
````
index.html:
````
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Site</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
    <h1>Testing browser-sync</h1>
    <div>
      <p>Hello</p>
      <p>World</p>
    </div>
  </body>
</html>
````
4. Start browser-sync and tell it to watch for changes in all files in the directory.
````
browser-sync start --server -f "*"
````
Tip: Add `--no-notify` to the end to turn off the "Connected to BrowserSync" banner.
````
browser-sync start --server -f "*" --no-notify
````

You will notice a Local URL and External URL. Anyone on your local network can type the External URL in and get to your localhost. Whenever you save the project files on your side browser-sync will reload the changes across all the devices.

## References

* [atom-live-server](https://atom.io/packages/atom-live-server)
* [live-server](https://www.npmjs.com/package/live-server)
* [Browsersync](https://browsersync.io/)
* [browsercync docs](https://browsersync.io/docs/command-line)



