using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FollowObject : MonoBehaviour {

    public GameObject player;
    //private GameObject g;
    public float yOffset = 3f;
    public float xOffset = 0;
    public float zOffset = 0;

    // Update is called once per frame
    void Start()
    {
        //g = GameObject.Find("Sphere A");
        //Debug.Log(g.name);
    }

    void Update () {

        transform.position = player.transform.position + new Vector3(xOffset,yOffset,zOffset);
		
	}
}
