using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class MoneyHandler : MonoBehaviour
{
    [SerializeField] private TMP_Text shadow; //shadow text object
    [SerializeField] private TMP_Text mainText; //main text object
    public int totalMoney = 10; //starting money amount
    // Start is called before the first frame update
    void Start()
    {
        mainText.SetText("$" + totalMoney); //sets the main text display
        shadow.SetText("$" + totalMoney); //sets the shadow text display
        EnemyLogic.EnemyHitEvent += this.IncreaseMoney; //runs increase money function if the enemy1 hit event occurs
        
    }

    void IncreaseMoney(int amt)
    {
        totalMoney += amt; //increases the money by 5
        mainText.SetText("$" + totalMoney); //updates the money and shadow money text
        shadow.SetText("$" + totalMoney);
        StaticMoneyStore.SetMoney(totalMoney); //uses the static money store to store the current money amount
    }

    public void SpendMoney(int amt)
    {
        totalMoney -= amt; //decreases the money by amount
        mainText.SetText("$" + totalMoney); //updates the money and shadow money text
        shadow.SetText("$" + totalMoney);
        StaticMoneyStore.SetMoney(totalMoney); //uses the static money store to store the current money amount
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
