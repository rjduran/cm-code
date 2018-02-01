using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DetectCollisions : MonoBehaviour {

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
