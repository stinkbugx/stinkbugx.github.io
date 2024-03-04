using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events; //adds the events library

public class EnemyLogic : MonoBehaviour
{
    public static UnityAction<int> EnemyHitEvent; //creates an event

    [SerializeField] private int hp = 5; //hp of the enemy
    [SerializeField] private int enemyValue = 5;
    public void Hit(int dmgValue) //when the enemy gets hit, takes a damage value
    {
        /*GetComponent<AudioSource>().Play(0); //gets the audio source component and plays it after 0 seconds
        * ^ this is the wrong way to do it because the enemy gets destroyed after and it doesn't play
        * instead we want it to play from a different source */
        hp -= dmgValue; //decreases the health by the damage value
        //if (EnemyHitEvent != null) EnemyHitEvent(); //if the event exists then call it

        if (hp <= 0) //if the health reaches zero
        {
            if (EnemyHitEvent != null) EnemyHitEvent(enemyValue); //if the event exists then call it
            Destroy(gameObject); //destroys the game object
        }
    }

    public void AssignHealth(int i) //assigns a new hp to the prefab
    {
        this.hp = i;
    }

}
