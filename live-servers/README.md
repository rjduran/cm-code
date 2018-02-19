# live-servers

This folder contains examples of how to create live servers and localhost development environments.

To use the examples here just clone the top level cm-code repo and open this directory up in Atom.

## atom-live-server

To use this workflow you need to have Atom installed and be familiar with installing packages.

1. Install the [atom-live-server](https://atom.io/packages/atom-live-server) package using apm or in Atom: Atom Preferences > Settings > Install > Search for "atom-live-server" and Install.
````
apm install atom-live-server
````
2. Move project directory to the top of the Project tree (left side bar area). Packages > atom-live-server to launch the server within Atom. It will open up your browser to the address 127.0.0.1:3000.
3. Modify the index.html file and watch it reload in the browser in realtime.

## npm-live-server

To use this workflow you need to have Node.js installed and be comfortable working with npm packages.

1. Install the live-server npm module globally. With this you will be able to run `live-server` from the command line shown in the next step.
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



