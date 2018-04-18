# hello-unity

These exercises provide a learning pathway for understanding how to use [Node.js](https://nodejs.org/en/), Websockets ([Socket.io](https://socket.io/)), and [Unity](https://unity3d.com/) for the development of connected virtual reality worlds.

## Table of Contents

* [What is Unity?](#what-is-unity)
* [What is Socket.io?](#what-is-socketio)
* [Exercise-01: Hello Unity + Socket.io](#exercise-01-hello-unity--socketio)
* [References](#references)

## What is Unity?

[Unity](https://unity3d.com/) is a cross-platform game engine developed by Unity Technologies, which is primarily used to develop both three-dimensional and two-dimensional video games and simulations for computers, consoles, and mobile devices. ([Wikipedia](https://en.wikipedia.org/wiki/Unity_(game_engine)))

## What is Socket.io?

Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API. Like Node.js, it is event-driven.

Socket.IO primarily uses the WebSocket protocol with polling as a fallback option, while providing the same interface. Although it can be used as simply a wrapper for WebSocket, it provides many more features, including broadcasting to multiple sockets, storing data associated with each client, and asynchronous I/O. ([Wikipedia](https://en.wikipedia.org/wiki/Socket.IO))

## Exercise-01: Hello Unity + Socket.io

Make a server that uses websockets (socket.io) to pass data to/from a browser client and Unity client.

We will setup the Unity project first then setup the Node server second.

### Unity Setup

1. Make a new Unity project
2. Create Scenes and Scripts folders in the Assets folder.
3. Install [Socket.io for Unity](https://assetstore.unity.com/packages/tools/network/socket-io-for-unity-21721) from the Asset Store. This will add a folder called "SocketIO" to the Assets folder.
4. Save the current Scene in the Scenes folder
5. Drop the SocketIO prefab into the scene hierarchy (SocketIO/Prefabs) and click on it to edit the fields in the Socket IO Component (Script). Make sure the port for the Url is set to "3000" or whatever port is defined for the Node server. Leave the other parameters at their default values.  
6. Make a new Empty Game Object and rename it "NetworkManager". We're going to add a script to this to manage the SocketIO connection.
7. Make a new script called "NetworkManager.cs" and save it to the Scripts folder.
8. Add the NetworkManager script as a component to the NetworkManager GameObject. Assign the SocketIO prefab to the "Socket" variable of the Network Manager (Script) in the Inspector.
9. At this point the Unity (client) is setup and will need scripting logic to begin passing data to/from the server. Open up the NetworkManager.cs script and add the following code.

    This code sets up the connection between Unity and the server using the `SocketIOComponent`. In the Start() function the listener is defined for "messages" and handled by the callback function `msgData`. This prints out to the Unity console the incoming message data. The Update() function contains a listener for keypresses. Specifically, when the key 's' is pressed, it will create a JSON object and send it to the listener on the server via `socket.Emit()`.

    In order to send data from Unity, it needs to be structured as a JSONObject. The Serializable object is used to defined the kind of object to be converted to a JSONObject. To learn more about how to do this read through [JSONSerialization ](https://docs.unity3d.com/Manual/JSONSerialization.html) in the Unity manual.

    ```csharp
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;
    using System; // To use Serializable
    using SocketIO;

    [Serializable]
    public class MyClass
    {    
        public string hello;
    }

    public class NetworkManager : MonoBehaviour {

        // define a new socket
        public SocketIOComponent socket;

        // make an instance of the MyClass
        MyClass myObject = new MyClass();


        // Use this for initialization
        void Start () {    
          // setup handler for messages from server using callback function
          socket.On("message", msgData);		
        }

        // callback function for "message" handler
        void msgData(SocketIOEvent e) {

          // print to unity console the incoming message
          Debug.Log(e.data.ToString());
        }

        // Update is called once per frame
        void Update () {
            
          // Create JSONObject to and send data to server when the 's' key is pressed
          if (Input.GetKeyDown(KeyCode.S)) {

            myObject.hello = "world from unity";

            string s = JsonUtility.ToJson(myObject);
            JSONObject json = new JSONObject(s);
            socket.Emit("unity", json);
          }		
        }
    }
    ```

### Server Setup

1. Make a folder called "server" and run `npm init` to setup the project folder / generate the package.json file.
2. Create an app.js file in the server folder.
3. Install dependencies:
    ```bash
    npm install express --save
    npm install socket.io --save
    npm install jquery --save
    ```
4. Create an app.js file and add the following code.
    
    This code creates the server and sets up the socket.io connections for both a Unity client and a browser based client.
    
    ```javascript
    var express = require('express');
    var app = express();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

    app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery

    app.get('/', function(req, res){
      res.sendFile(__dirname + '/index.html');
    });

    ///////////////////////////////////////////////////////////////////////////////
    // socket.io
    ///////////////////////////////////////////////////////////////////////////////
    io.on('connection', function(socket){
      console.log('a client connected: ' + socket.id);
      
      // from server to client(s)
      socket.emit('message', {hello: 'world'});
      
      // from unity client to server
      socket.on('unity', function(data){
        console.log(data);
        
        // send data to all clients (except the client sending data)
        socket.broadcast.emit('message', data);
      });
      
      // from browser client to server
      socket.on('browser', function(data){
        console.log(data);
        
        // send data to all clients (except the client sending data)
        socket.broadcast.emit('message', data);
      });
        
      socket.on('disconnect', function() {
        console.log('a client disconnected: ' + socket.id);
      });
    });

    http.listen(3000, function(){
      console.log('listening on *:3000');
    });
    ```
5. Create an index.html file and add the following code.

    This code defines the browser client which accepts key presses and a single "message" socket connection. This listener takes incoming messages and adds them to the messages list as list items.

    ```html
    <!doctype html>
    <html>
      <head>
        <title>Socket.IO Client</title>
      </head>
      <body>
        <h1>Messages</h1>
        <ul id="messages"></ul>
        
        <script src="/js/jquery.min.js"></script>
        <script src="/socket.io/socket.io.js"></script>
        
        <script>
          var socket = io();
          
          socket.on('message', function(data){
            $('#messages').append($('<li>').text(data.hello));
          });
          
          // handle keypress to send message to server
          $(document).keydown(function(event){
            // send the key pressed
            socket.emit('browser', {hello: event.key});
          });
                
        </script>
      </body>
    </html>
    ```
6. Run the server using `node app.js` or `nodemon app.js` and open a browser window at [http://localhost:3000](http://localhost:3000).

At this point you should have the server running via terminal, one or more browser window (clients) open, and a Unity client running (via Play button). The data should be passing through the server both ways when pressing any keys for the browser client and by pressing the 's' key from the Unity client. You should see console log message in the server from all clients as well.

## References

* [Socket.io](https://socket.io/)
* Unity
* [Socket.io for Unity](https://assetstore.unity.com/packages/tools/network/socket-io-for-unity-21721) via Unity Asset Store
* [Unity Manual: JSONSerialization ](https://docs.unity3d.com/Manual/JSONSerialization.html)
* [Unity ScriptReference: JsonUtility](https://docs.unity3d.com/ScriptReference/JsonUtility.html)