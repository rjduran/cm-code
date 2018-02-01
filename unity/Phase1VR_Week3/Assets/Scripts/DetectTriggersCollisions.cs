using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DetectTriggersCollisions : MonoBehaviour {

    // Trigger Methods 
    private void OnTriggerEnter(Collider col)
    {
        //Debug.Log("trigger enter");
        //Debug.Log(col.gameObject.name + " : enter");
        Debug.Log(col.gameObject.name + " has entered " + name);
    }

    private void OnTriggerStay(Collider col)
    {
        //Debug.Log("trigger stay");   
        //Debug.Log(col.gameObject.name + " : stay");
        Debug.Log(col.gameObject.name + " is inside " + name);
    }

    private void OnTriggerExit(Collider col)
    {
        //Debug.Log("trigger exit");
        //Debug.Log(col.gameObject.name + " : exit");
        Debug.Log(col.gameObject.name + " has exited " + name);
    }


    // Collision Methods
    private void OnCollisionEnter(Collision col)
    {
        //Debug.Log("col enter");
        Debug.Log(col.gameObject.name + " has entered collision with " + name);
    }

    private void OnCollisionStay(Collision col)
    {
        //Debug.Log("col stay");
        Debug.Log(col.gameObject.name + " is colliding with " + name);
    }

    private void OnCollisionExit(Collision col)
    {
        //Debug.Log("col exit");
        Debug.Log(col.gameObject.name + " is done colliding with " + name);
    }
}
