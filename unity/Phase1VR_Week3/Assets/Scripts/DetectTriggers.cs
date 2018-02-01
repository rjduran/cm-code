using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DetectTriggers : MonoBehaviour {

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
}
