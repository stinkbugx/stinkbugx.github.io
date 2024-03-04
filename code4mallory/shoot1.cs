using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shoot1 : MonoBehaviour
{
    [SerializeField] private List<FollowPath> boobs = new List<FollowPath>(); //basically an array that we can change the size of, used to store all current enemies
    private FollowPath leadEnemy = null; //furthest enemy

    [SerializeField] private GameObject projectile; //the projectile prefab

    private float shootTimer = 0f; //current counter status
    [SerializeField] private float shootRate = 5f; //time between projectiles

    Animator animator; //variable to communicate with the sprite animators

    void Start()
    {
        animator = GetComponent<Animator>(); //accesses the animator
    }

    void OnTriggerEnter2D(Collider2D collision) //when something enters the collider
    {
        if (collision.CompareTag("Enemy")) //if the collider is an enemy
        {
            boobs.Add(collision.GetComponent<FollowPath>()); //adds the enemy to the list
        }
    }

    void OnTriggerExit2D(Collider2D collision) //when something enter's the collider
    {
        if (collision.CompareTag("Enemy")) //if the collider is an enemy
        {
            boobs.Remove(collision.GetComponent<FollowPath>()); //adds the enemy to the list
        }
    }

    // Update is called once per frame
    void Update()
    {
        if(boobs.Count > 0) 
        { 
            leadEnemy = boobs[0]; //sets the lead enemy to the first in the list


            if (shootTimer <= 0) //when the shoot timer reaches 0
            {
                animator.SetTrigger("Shoot"); //sets the animation parameter to start the shooting animation
                GameObject bullet = Instantiate(projectile, transform); //makes a projectile at the tower's location
                bullet.GetComponent<Projectile>().SetTarget(leadEnemy.transform); //runs the set target function for the projectile
                shootTimer = shootRate; //resets the timer
            }

            /* I didn't use this in my project but this can be used to change the direction that the tower shoots
            Vector3 direction = leadEnemy.transform.position - transform.position; //quick maths to figure out the direction the tower is facing
            direction.Normalize(); //normalizes?? the math
            */


            shootTimer -= Time.deltaTime; //decreases the timer
        }
    }
}
