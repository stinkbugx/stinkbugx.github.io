const start = document.querySelector('#start');
const buttGrid = document.querySelector('.button-grid');
const instruct = document.querySelector('.instructions');
// const testArray = document.querySelector('#test');
//const testWin = document.querySelector('#win');
let ticValues = [];
let turn = ""; //alternates between X and O

start.addEventListener('click', gameStart);
// testArray.addEventListener('click', testVal);
//testWin.addEventListener('click', checkWin);
buttGrid.addEventListener('click', winCondition);


function gameStart() {
    instruct.textContent = "Click any space to play, X's go first";
    winState = false;
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

//yes individual change functions,, I was not willing to teach myself makng functions with variables for names
function change1() {
    // console.log("change1 ran");
    if (ticValues[0] == ""){
        if (turn == "X"){ //X's turn
            butt1.textContent = "X"; 
            turn = "O"; 
            ticValues[0] = "X";
        } else {
            butt1.textContent = "O";
            turn = "X";
            ticValues[0] = "O";
        }
    } else {
        console.log("No reclicks >:(");
    }
    
}

function change2() {
    // console.log("change1 ran");
    if (ticValues[1] == ""){
        if (turn == "X"){ //X's turn
            butt2.textContent = "X"; 
            turn = "O"; 
            ticValues[1] = "X";
        } else {
            butt2.textContent = "O";
            turn = "X";
            ticValues[1] = "O";
        }
    } else {
        console.log("No reclicks >:(");
    }
}

function change3() {
    // console.log("change1 ran");
    if (ticValues[2] == ""){
        if (turn == "X"){ //X's turn
            butt3.textContent = "X"; 
            turn = "O"; 
            ticValues[2] = "X";
        } else {
            butt3.textContent = "O";
            turn = "X";
            ticValues[2] = "O";
        }
    } else {
        console.log("No reclicks >:(");
    }
}

function change4() {
    // console.log("change1 ran");
    if (ticValues[3] == ""){
        if (turn == "X"){ //X's turn
            butt4.textContent = "X"; 
            turn = "O"; 
            ticValues[3] = "X";
        } else {
            butt4.textContent = "O";
            turn = "X";
            ticValues[3] = "O";
        }
    } else {
        console.log("No reclicks >:(");
    }
}

function change5() {
    // console.log("change1 ran");
    if (ticValues[4] == ""){
        if (turn == "X"){ //X's turn
            butt5.textContent = "X"; 
            turn = "O"; 
            ticValues[4] = "X";
        } else {
            butt5.textContent = "O";
            turn = "X";
            ticValues[4] = "O";
        }
    } else {
        console.log("No reclicks >:(");
    }
}

function change6() {
    // console.log("change1 ran");
    if (ticValues[5] == ""){
        if (turn == "X"){ //X's turn
            butt6.textContent = "X"; 
            turn = "O"; 
            ticValues[5] = "X";
        } else {
            butt6.textContent = "O";
            turn = "X";
            ticValues[5] = "O";
        }
    } else {
        console.log("No reclicks >:(");
    }
}

function change7() {
    // console.log("change1 ran");
    if (ticValues[6] == ""){
        if (turn == "X"){ //X's turn
            butt7.textContent = "X"; 
            turn = "O"; 
            ticValues[6] = "X";
        } else {
            butt7.textContent = "O";
            turn = "X";
            ticValues[6] = "O";
        }
    } else {
        console.log("No reclicks >:(");
    }
}

function change8() {
    // console.log("change1 ran");
    if (ticValues[7] == ""){
        if (turn == "X"){ //X's turn
            butt8.textContent = "X"; 
            turn = "O"; 
            ticValues[7] = "X";
        } else {
            butt8.textContent = "O";
            turn = "X";
            ticValues[7] = "O";
        }
    } else {
        console.log("No reclicks >:(");
    }
}

function change9() {
    // console.log("change1 ran");
    if (ticValues[8] == ""){
        if (turn == "X"){ //X's turn
            butt9.textContent = "X"; 
            turn = "O"; 
            ticValues[8] = "X";
        } else {
            butt9.textContent = "O";
            turn = "X";
            ticValues[8] = "O";
        }
    } else {
        console.log("No reclicks >:(");
    }
}

// function testVal() { //just for me to see what the computer believes the game to be
//     if (ticValues.length == 0){ //if array is empty
//         console.log("Empty array"); 
//     } else {
//         // for (i = 0; i < ticValues.length; i++){ //prints current array values
//         //     console.log(ticValues[i]);
//         // }
//         for (j = 0; j < 3; j++){ //makes a board with the values
//             let line = "";
//             for (i = (j*3); i < ((j*3)+3); i++){
//                 if (ticValues[i] == "") {
//                     line = line + "#";
//                 } else {
//                     line = line + ticValues[i];
//                 }
//             }
//             console.log(line);
//         }
//     }
// }

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