const start = document.querySelector('#start');
const buttGrid = document.querySelector('.button-grid');
const instruct = document.querySelector('.instructions');
const testArray = document.querySelector('#test');
//const testWin = document.querySelector('#win');
let ticValues = [];
let turn = ""; //alternates between X and O
let turnCount = 0;

start.addEventListener('click', gameStart);
testArray.addEventListener('click', testVal);
//testWin.addEventListener('click', checkWin);
buttGrid.addEventListener('click', winCondition);


function gameStart() {
    instruct.textContent = "Click any space to play, X's go first";
    winState = false;
    turnCount = 0;
    move1 = "";
    move2 = "";
    move3 = "";
    move4 = "";
    turn = "X"; //X's go first
    for (i = 0; i < 9; i++){ //for all array values
        if (ticValues.length == 9){ //replaces values if array already full
            ticValues[i] = "";
        } else { //fills values if array is not full
            ticValues.push("");
        }
    
        let element = document.getElementById('butt' + (i+1)) //if board does not exist
        if (element == null) { //creates the board
            let newButton = document.createElement('button'); 
            buttGrid.appendChild(newButton);
            newButton.textContent = "";
            newButton.setAttribute('id', "butt" + (i + 1));
            newButton.setAttribute('class', "grid-item");
        } else { //clears the board
            let currentButtName = "#butt" + (i + 1); 
            let currentButt = document.querySelector(currentButtName);
            currentButt.textContent = "";
            currentButt.disabled = false;
        }
    }
    //I could probably do a for loop here but the variable names are giving me a headache
    const butt1 = document.querySelector('#butt1');
    const butt2 = document.querySelector('#butt2');
    const butt3 = document.querySelector('#butt3');
    const butt4 = document.querySelector('#butt4');
    const butt5 = document.querySelector('#butt5');
    const butt6 = document.querySelector('#butt6');
    const butt7 = document.querySelector('#butt7');
    const butt8 = document.querySelector('#butt8');
    const butt9 = document.querySelector('#butt9');
    butt1.addEventListener('click', change1);
    butt2.addEventListener('click', change2);
    butt3.addEventListener('click', change3);
    butt4.addEventListener('click', change4);
    butt5.addEventListener('click', change5);
    butt6.addEventListener('click', change6);
    butt7.addEventListener('click', change7);
    butt8.addEventListener('click', change8);
    butt9.addEventListener('click', change9);
}

let currentMove = "";

//yes individual change functions,, I was not willing to teach myself makng functions with variables for names
function change1() {
    // console.log("change1 ran");
    if (ticValues[0] == ""){
        butt1.textContent = "X"; 
        turn = "O"; 
        ticValues[0] = "X";
        // if (turn == "X"){ //X's turn
        //     butt1.textContent = "X"; 
        //     turn = "O"; 
        //     ticValues[0] = "X";
        // } else {
        //     butt1.textContent = "O";
        //     turn = "X";
        //     ticValues[0] = "O";
        // }
        turnCount++;
        switch (turnCount){
            case 1:
                move1 = "tl";
                break;
            case 2:
                move2 = "tl";
                break;
            case 3:
                move3 = "tl";
                break;
            case 4:
                move4 = "tl";
                break;
        }
        oTurn();
        
    } else {
        console.log("No reclicks >:(");
    }
    
}

function change2() {
    // console.log("change1 ran");
    if (ticValues[1] == ""){
        butt2.textContent = "X"; 
        turn = "O"; 
        ticValues[1] = "X";
        turnCount++;
        switch (turnCount){
            case 1:
                move1 = "ts";
                break;
            case 2:
                move2 = "ts";
                break;
            case 3:
                move3 = "ts";
                break;
            case 4:
                move4 = "ts";
                break;
        }
        oTurn();
    } else {
        console.log("No reclicks >:(");
    }
}

function change3() {
    // console.log("change1 ran");
    if (ticValues[2] == ""){
        butt3.textContent = "X"; 
        turn = "O"; 
        ticValues[2] = "X";
        turnCount++;
        switch (turnCount){
            case 1:
                move1 = "tr";
                break;
            case 2:
                move2 = "tr";
                break;
            case 3:
                move3 = "tr";
                break;
            case 4:
                move4 = "tr";
                break;
        }
        oTurn();
    } else {
        console.log("No reclicks >:(");
    }
}

function change4() {
    // console.log("change1 ran");
    if (ticValues[3] == ""){
        butt4.textContent = "X"; 
        turn = "O"; 
        ticValues[3] = "X";
        turnCount++;
        switch (turnCount){
            case 1:
                move1 = "ls";
                break;
            case 2:
                move2 = "ls";
                break;
            case 3:
                move3 = "ls";
                break;
            case 4:
                move4 = "ls";
                break;
        }
        oTurn();
    } else {
        console.log("No reclicks >:(");
    }
}

function change5() {
    // console.log("change1 ran");
    if (ticValues[4] == ""){
        butt5.textContent = "X"; 
        turn = "O"; 
        ticValues[4] = "X";
        turnCount++;
        switch (turnCount){
            case 1:
                move1 = "c";
                break;
            case 2:
                move2 = "c";
                break;
            case 3:
                move3 = "c";
                break;
            case 4:
                move4 = "c";
                break;
        }
        oTurn();
    } else {
        console.log("No reclicks >:(");
    }
}

function change6() {
    // console.log("change1 ran");
    if (ticValues[5] == ""){
        butt6.textContent = "X"; 
        turn = "O"; 
        ticValues[5] = "X";
        turnCount++;
        switch (turnCount){
            case 1:
                move1 = "rs";
                break;
            case 2:
                move2 = "rs";
                break;
            case 3:
                move3 = "rs";
                break;
            case 4:
                move4 = "rs";
                break;
        }
        oTurn();
    } else {
        console.log("No reclicks >:(");
    }
}

function change7() {
    // console.log("change1 ran");
    if (ticValues[6] == ""){
        butt7.textContent = "X"; 
        turn = "O"; 
        ticValues[6] = "X";
        turnCount++;
        switch (turnCount){
            case 1:
                move1 = "bl";
                break;
            case 2:
                move2 = "bl";
                break;
            case 3:
                move3 = "bl";
                break;
            case 4:
                move4 = "bl";
                break;
        }
        oTurn();
    } else {
        console.log("No reclicks >:(");
    }
}

function change8() {
    // console.log("change1 ran");
    if (ticValues[7] == ""){
        butt8.textContent = "X"; 
        turn = "O"; 
        ticValues[7] = "X";
        turnCount++;
        switch (turnCount){
            case 1:
                move1 = "bs";
                break;
            case 2:
                move2 = "bs";
                break;
            case 3:
                move3 = "bs";
                break;
            case 4:
                move4 = "bs";
                break;
        }
        oTurn();
    } else {
        console.log("No reclicks >:(");
    }
}

function change9() {
    // console.log("change1 ran");
    if (ticValues[8] == ""){
        butt9.textContent = "X"; 
        turn = "O"; 
        ticValues[8] = "X";
        turnCount++;
        switch (turnCount){
            case 1:
                move1 = "br";
                break;
            case 2:
                move2 = "br";
                break;
            case 3:
                move3 = "br";
                break;
            case 4:
                move4 = "br";
                break;
        }
        oTurn();
    } else {
        console.log("No reclicks >:(");
    }
}

function testVal() { //just for me to see what the computer believes the game to be
    if (ticValues.length == 0){ //if array is empty
        console.log("Empty array"); 
    } else {
        // for (i = 0; i < ticValues.length; i++){ //prints current array values
        //     console.log(ticValues[i]);
        // }
        for (j = 0; j < 3; j++){ //makes a board with the values
            let line = "";
            for (i = (j*3); i < ((j*3)+3); i++){
                if (ticValues[i] == "") {
                    line = line + "#";
                } else {
                    line = line + ticValues[i];
                }
            }
            console.log(line);
        }
    }
}

/* 
012
345
678*/

let winState = false;
//let winner = "";

function winCondition() {
    //may come back and use a for loop to change the ifs
    if (ticValues[0] == ticValues[4] && ticValues[0] == ticValues[8] && ticValues[0] != "") { //left to right diagonal win
        winState = true;
        console.log("lrdiag");
        if (ticValues[0] == "O"){
            //winner = "O";
            instruct.textContent = "O win";
        } else {
            //winner = "x";
            instruct.textContent = "X win";
        }
    } 
    if (ticValues[2] == ticValues[4] && ticValues[2] == ticValues[6] && ticValues[2] != "") { //right to left diagonal win
        winState = true;
        console.log("rldiag");
        if (ticValues[2] == "O"){
            instruct.textContent = "O win";
        } else {
            instruct.textContent = "X win";
        }
    } 
    if (ticValues[0] == ticValues[1] && ticValues[0] == ticValues[2] && ticValues[0] != "") { //top horizontal win
        winState = true;
        console.log("toph");
        if (ticValues[0] == "O"){
            instruct.textContent = "O win";
        } else {
            instruct.textContent = "X win";
        }
    } 
    if (ticValues[3] == ticValues[4] && ticValues[3] == ticValues[5] && ticValues[3] != "") { //middle horizontal win
        winState = true;
        console.log("midh");
        if (ticValues[3] == "O"){
            instruct.textContent = "O win";
        } else {
            instruct.textContent = "X win";
        }
    } 
    if (ticValues[6] == ticValues[7] && ticValues[6] == ticValues[8] && ticValues[6] != "") { //bottom horizontal win
        winState = true;
        console.log("botth");
        if (ticValues[6] == "O"){
            instruct.textContent = "O win";
        } else {
            instruct.textContent = "X win";
        }
    } 
    if (ticValues[0] == ticValues[3] && ticValues[0] == ticValues[6] && ticValues[0] != "") { //left vertical win
        winState = true;
        console.log("leftv");
        if (ticValues[0] == "O"){
            instruct.textContent = "O win";
        } else {
            instruct.textContent = "X win";
        }
    } 
    if (ticValues[1] == ticValues[4] && ticValues[1] == ticValues[7] && ticValues[1] != "") { //middle vertical win
        winState = true;
        console.log("midv");
        if (ticValues[1] == "O"){
            instruct.textContent = "O win";
        } else {
            instruct.textContent = "X win";
        }
    } 
    if (ticValues[2] == ticValues[5] && ticValues[2] == ticValues[8] && ticValues[2] != "") { //right vertical win
        winState = true;
        console.log("rightv");
        if (ticValues[2] == "O"){
            instruct.textContent = "O win";
        } else {
            instruct.textContent = "X win";
        }
    } 
    if (winState == true) {
        for (i = 0; i < 9; i++) {
            let buttonEnd = "butt" + (i+1);
            //buttonEnd.disabled = true;
            document.getElementById(buttonEnd).disabled = true;
        }
        //document.getElementsByClassName("button-grid").disabled = true;
    }
}

// function checkWin() {
//     winCondition();
//     if (winState = true) {
//         console.log("winner!");
//     } else {
//         console.log("no win!");
//     }
// }

/* 
012
345
678*/

let move1 = ""; //center, corner, or side
let move2 = ""; 
let move3 = "";
let move4 = "";

function oTurn() {
    console.log(turnCount);
    if (turnCount == 1) { //first turn
        if (move1 == "c") { // if center spot is taken
            ticValues[2] = "O"; //takes the tr corner
            butt3.textContent = "O";
            move1 = "center"
        } else if (move1 == "tl" || move1 == "tr" || move1 == "bl" || move1 == "br") { //if a corner is taken
            ticValues[4] = "O"; //takes the center
            butt5.textContent = "O";
            move1 = "corner"
        } else { //for any other spot
            ticValues[4] = "O"; //takes the center
            butt5.textContent = "O";
            move1 = "side"
        }
    } else if (turnCount == 2) {
        if (move1 == "center") { //if the first move was in the center
            if (ticValues[0] == "X") { //tl corner
                ticValues[8] = "O"; //blocks row
                butt9.textContent = "O";
                move2 = "corner"
            } else if (ticValues[8] == "X") { //br corner
                ticValues[0] = "O"; //blocks row
                butt1.textContent = "O";
                move2 = "corner"
            } else if (ticValues[6] == "X") { //bl corner
                ticValues[5] = "O"; //takes side
                butt6.textContent = "O";
                move2 = "corner"
            } else if (ticValues[1] == "X") { //t side
                ticValues[7] = "O"; //blocks row
                butt8.textContent = "O";
                move2 = "side"
            } else if (ticValues[3] == "X") { //l side
                ticValues[5] = "O"; //blocks row
                butt6.textContent = "O";
                move2 = "side"
            } else if (ticValues[5] == "X") { //r side
                ticValues[3] = "O"; //blocks row
                butt4.textContent = "O";
                move2 = "side"
            } else if (ticValues[7] == "X") { //b side
                ticValues[1] = "O"; //blocks row
                butt2.textContent = "O";
                move2 = "side"
            }
        } else if (move1 == "corner") { //if the first move was in a corner (O took center)
            if (ticValues[])
        } else { //if the first move was on a side (O took center)
            d
        }
    } else if (turnCount == 3) {
    }
}