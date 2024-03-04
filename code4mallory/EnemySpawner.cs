using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    [SerializeField] private PathManager path; //accesses the enemy path
    [SerializeField] private GameObject enemy1Prefab; //accesses enemy1 prefab
    [SerializeField] private GameObject enemy2Prefab; //accesses enemy2 prefab
    private float spawnTimer = 0f; //current timer count
    [SerializeField] private float spawnRate = 5f; //how often the enemy should spawn
    //[SerializeField] private float spawnAmnt = 5f; //how many will be spawned
    private int spawnRemain = 0; //how many have been spawned
    public List<int> enemyList = new List<int>(); //basically an array that we can change the size of, used to store all current enemies
    /*
    1- slow frog (speed: 0.75, health: 4)
    2- fast frog (speed: 1.25, health: 4)
    3- slow knife frog (speed: 0.5, health: 6)
    4- fast knife frog (speed: 1, health: 6)
    5- break
    */

    private void Start()
    {
        spawnRemain = enemyList.Count; //sets the remaining to the amount wanted
    }

    void Update()
    {

        /*if (spawnRemain > 0) //if there are still enemies left to spawn
        {
            if (spawnTimer <= 0) //when the timer reaches 0
            {
                GameObject newEnemy = Instantiate(enemyPrefab, transform); //spawns an enemy at the object's location, stored as a variable called newEnemy
                newEnemy.GetComponent<FollowPath>().AssignPath(path); //uses the assign path function from the follow path script
                spawnTimer = spawnRate; //resets the timer 
                spawnRemain--; //moves down the remaining amount of enemies
            }
            spawnTimer -= Time.deltaTime; //moves the timer down
        }*/


        if (spawnRemain > 0) //if there are still enemies left to spawn
        {
            if (spawnTimer <= 0) //when the timer reaches 0
            {
                switch (enemyList[enemyList.Count - spawnRemain])
                {
                    case 1: //frog slow
                        GameObject enemy1 = Instantiate(enemy1Prefab, transform); //spawns an enemy at the object's location, stored as a variable called newEnemy
                        enemy1.GetComponent<FollowPath>().AssignPath(path); //uses the assign path function from the follow path script
                        enemy1.GetComponent<FollowPath>().AssignSpeed(0.75f); //assigns a speed
                        enemy1.GetComponent<EnemyLogic>().AssignHealth(4); //assigns the health
                        break;
                    case 2: //frog fast
                        GameObject enemy2 = Instantiate(enemy1Prefab, transform); //spawns an enemy at the object's location, stored as a variable called newEnemy
                        enemy2.GetComponent<FollowPath>().AssignPath(path); //uses the assign path function from the follow path script
                        enemy2.GetComponent<FollowPath>().AssignSpeed(1f); //assigns a speed
                        enemy2.GetComponent<EnemyLogic>().AssignHealth(4); //assigns the health
                        break;
                    case 3: //knife frog slow
                        GameObject enemy3 = Instantiate(enemy2Prefab, transform); //spawns an enemy at the object's location, stored as a variable called newEnemy
                        enemy3.GetComponent<FollowPath>().AssignPath(path); //uses the assign path function from the follow path script
                        enemy3.GetComponent<FollowPath>().AssignSpeed(0.5f); //assigns a speed
                        enemy3.GetComponent<EnemyLogic>().AssignHealth(6); //assigns the health
                        break;
                    case 4: //knife frog fast
                        GameObject enemy4 = Instantiate(enemy2Prefab, transform); //spawns an enemy at the object's location, stored as a variable called newEnemy
                        enemy4.GetComponent<FollowPath>().AssignPath(path); //uses the assign path function from the follow path script
                        enemy4.GetComponent<FollowPath>().AssignSpeed(0.75f); //assigns a speed
                        enemy4.GetComponent<EnemyLogic>().AssignHealth(6); //assigns the health
                        break;
                    case 5: //break
                        
                        break;
                }
                spawnTimer = spawnRate; //resets the timer 
                spawnRemain--; //moves down the remaining amount of enemies
            }
            spawnTimer -= Time.deltaTime; //moves the timer down
        }
        
    }
}
