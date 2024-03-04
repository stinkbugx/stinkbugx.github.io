using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CursorManager : MonoBehaviour
{
    public GameObject cursorSprite; //variable to store the cursor's sprite
    //public GameObject cursorClick; //sprite for when the cursor is clicked

    public GameObject tower1Prefab;
    public GameObject tower2Prefab;

    [SerializeField] private LayerMask _placement; //layer mask for placing towers
    [SerializeField] private MoneyHandler money;
    private int catSpawn = 1; //which cat is made when clicked, defaults to cat one
    /* cat1 = 1
     * cat2 = 2
     */

    // Start is called before the first frame update
    void Start()
    {
        Cursor.visible = false;
    }

    public SpriteRenderer spriteRenderer;
    public Sprite sprite1;
    public Sprite sprite2;

    // Update is called once per frame
    void Update()
    {
        Vector3 worldPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition); //stores the mouse position as the variable worldPosition
        //cursorSprite.transform.position = new Vector3(worldPosition.x, worldPosition.y, 0); //sets the cursor sprite's position to the same x and y as worldPosition, but with a z of 0
        //Debug.Log("" + worldPosition.x) //logs the worldPosition x value, needs a string to function

        cursorSprite.transform.position = new Vector3(Mathf.Round(worldPosition.x - 0.5f) + 0.5f, Mathf.Round(worldPosition.y - 0.5f) + 0.5f, 0); //transform but with math statements to make it stick to the grid

        if (Input.GetMouseButtonDown(0) == true) //if mouse is clicked
        {
            ClickSprite(); //changes to the clicking sprite
            RaycastHit2D hit = Physics2D.Raycast(worldPosition, Vector2.zero, _placement); //ray casts down to try and hit something
            bool canPlace1 = (hit.collider == null && money.totalMoney >= 10); //bool variable for if you have enough money and can place the tower
            bool canPlace2 = (hit.collider == null && money.totalMoney >= 15); //bool variable for if you have enough money and can place te tower

            if (canPlace1) //if something is hit by the raycast
            {
                Instantiate(tower1Prefab, cursorSprite.transform.position, transform.rotation); //makes a tower
                money.SpendMoney(10); //calls spend money function for the money object
            } 

            //Instantiate(towerPrefab, cursorSprite.transform.position, transform.rotation); //creates a prefab at the cursor's current position, does not follow the cursor
            Invoke("UnclickSprite", 0.25f); //runs unclick sprite after 1 second
        }
    }

    void ClickSprite() //sprite when clicked
    {
        spriteRenderer.sprite = sprite2;
    }

    void UnclickSprite() //sprite when not clicked
    {
        spriteRenderer.sprite = sprite1;
    }

    public void switchCat1()
    {
        
    }


}


