using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PathManager : MonoBehaviour
{
    private void OnDrawGizmos() //unity made function, triggered when gizmos are drawn
    {
        foreach (Transform t in transform) //for each child object of the current object (children accessed as t)
        {
            Gizmos.color = Color.white; //sets the gizmo ui to white
            Gizmos.DrawWireSphere(t.position, 0.5f); //draws a wire sphere around the gizmo
        }

        Gizmos.color = Color.red; //changes the color to red
        for (int i=0; i < transform.childCount - 1; i++) //for each child - 1, child order corresponds to the hierachy order
        {
            Gizmos.DrawLine(transform.GetChild(i).position, transform.GetChild(i + 1).position); //draws a line between children
        }
    }

    public Transform GetNextWaypoint(Transform currentWaypoint) //public function that takes the current waypoint and returns the next
    {
        if (currentWaypoint == null) //if there is no current waypoint
        {
            return transform.GetChild(0); //returns the first child
        }

        if (currentWaypoint.GetSiblingIndex() < transform.childCount - 1) //tests for a next sibling by making sure the sibling's index is less than the total amount of children
        {
            return transform.GetChild(currentWaypoint.GetSiblingIndex() + 1); //returns the index of the next waypoint
        }

        return currentWaypoint; //catch all function to return current way point if there isn't a valid next way point
    }

    
}
