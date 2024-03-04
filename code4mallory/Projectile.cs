using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Projectile : MonoBehaviour
{
    [SerializeField] private float speed = 100; //projectile speed
    private Transform target; //the target of the projectile

    private int dmgValue = 1; //how much damage is caused by the projectile
    public void SetTarget(Transform t)
    {
        this.target = t;
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    void OnTriggerEnter2D(Collider2D collision) //when something enters the collider
    {

        if (collision.CompareTag("Enemy")) //if the collider is an enemy
        {
            collision.gameObject.GetComponent<EnemyLogic>().Hit(dmgValue); //runs the hit function on the enemy
            Destroy(gameObject); //makes the bullet disappear
        }
    }


    // Update is called once per frame
    void Update()
    {
        if (target == null) //if the target disappears
        {
            Destroy(gameObject); //deletes the projectile
        } else
        {
            transform.position = Vector3.MoveTowards(transform.position, target.position, speed * Time.deltaTime); //Changes the position to the current waypoint's position
            //speed corresponds to the move speed and time for frames
        }
    }
}
