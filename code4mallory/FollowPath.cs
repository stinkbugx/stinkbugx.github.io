using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FollowPath : MonoBehaviour
{
    [SerializeField] private PathManager path; //accesses the path manager script
    [SerializeField] private float moveSpeed = 0.5f; //enemy movement speed

    private Transform currentWaypoint; //accesses the current way point
    [SerializeField] private float nextPointDistance = 0.1f; //distance to the next point

    public void AssignPath(PathManager p) //assigns the path manager to the prefab when instantiated
    {
        this.path = p;
    }

    public void AssignSpeed(float f) //assigns a new speed to the prefab
    {
        this.moveSpeed = f;
    }

    // Start is called before the first frame update
    void Start()
    {
        currentWaypoint = path.GetNextWaypoint(currentWaypoint); //uses a public function from he path manager to find the next waypoint
        transform.position = currentWaypoint.position; //moves to the position of the next waypoint
        currentWaypoint = path.GetNextWaypoint(currentWaypoint); //finds a new waypoint again
    }

    void OnTriggerEnter2D(Collider2D collision) //when something enters the collider
    {
        if (collision.CompareTag("EndPath")) //if the collider is end path
        {
            Destroy(gameObject); //destroys the frog
        }
    }

    // Update is called once per frame
    void Update()
    {
        transform.position = Vector3.MoveTowards(transform.position, currentWaypoint.position, moveSpeed*Time.deltaTime); //Changes the position to the current waypoint's position
        //speed corresponds to the move speed and time for frames

        if (Vector3.Distance(transform.position, currentWaypoint.position) < nextPointDistance)
        {
            currentWaypoint = path.GetNextWaypoint(currentWaypoint); //finds the next waypoint
        }
    }

}
