//my stuff
const volumeOutput = document.querySelector('.output');
const butt1 = document.querySelector('#butt1');
let buttAll = document.querySelector('.button');
let buttonCount = 1;
let currentText = "#butt" + buttonCount;
let currentButt = document.querySelector(currentText);
const buttonGroup = document.querySelector('.buttons');
let submitButt = document.querySelector('#submit');
let restartButt = document.querySelector('#restart');
const congrats = document.querySelector('.congrats');

currentButt.addEventListener('click', () => makeButton(buttonCount, currentButt));

submitButt.addEventListener('mouseover', swap);
restartButt.addEventListener('mouseover', swap);
submitButt.addEventListener('click', submit);
restartButt.addEventListener('click', restart);

function makeButton(count, current) {
    let element = document.getElementById('butt' + (count+1))
    if (element == null) {
        volumeOutput.textContent = count - 1;
        let newButton = document.createElement('button');
        buttonGroup.appendChild(newButton);
        newButton.textContent = count;
        count +=1;
        newButton.setAttribute('id', "butt" + count);
        newButton.setAttribute('class', "button");
        let text = "#butt" + count;
        current = document.querySelector(text);
        current.addEventListener('click', () => makeButton(count, current));
        buttonCount = count;
    }
}

function swap(){
    if (submitButt.textContent == "Restart"){
        submitButt.textContent = "Submit";
        restartButt.textContent = "Restart";
    } else {
        submitButt.textContent = "Restart";
        restartButt.textContent = "Submit";
    }
}

function submit() {
    // if (submitButt.textContent == "Restart"){
    //     alert("restart test");
    // } else {
    //     alert("submit test");
    // }
}

function restart() {
    if (restartButt.textContent == "Restart"){
        let element = document.getElementById('butt1');
        console.log("restart ran");
        for (i=2; i<=buttonCount; i++){
            console.log("for loop: " + i);
            element = document.getElementById('butt' + i);
            if (element !== null) {
                console.log("if entered");
                element.remove();
            }
        }
        buttonCount = 1;
        volumeOutput.textContent = 0;
    } else {      
        alert("Sorry Anthony");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}