using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyHitListener : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        EnemyLogic.EnemyHitEvent += this.PlaySound; 
    }

    void PlaySound(int amt)
    {
        Debug.Log("sound played"); //testing the function
        GetComponent<AudioSource>().Play(0); //plays the sound
    }

    void OnDisable()
    {
        EnemyLogic.EnemyHitEvent -= this.PlaySound;
    }

}
