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

        // print to unity console the incomming message
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
