using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StaticMoneyStore : MonoBehaviour
{
    public static int TotalMoney = 20; // the starting value of money
    public static void SetMoney(int amount) //function to store the total amount of money
    {
        TotalMoney = amount;
    }
    
}