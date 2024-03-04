using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class DisplayTotalMoney : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        GetComponent<TMP_Text>().SetText("$" + StaticMoneyStore.TotalMoney); //calls the stored money amount and displays it
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
