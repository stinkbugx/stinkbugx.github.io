// If using canvas:
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// const width = canvas.width = window.innerWidth * 0.6;
// const height = canvas.height = window.innerHeight * 0.8;

// function loop() {
//     ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
//     ctx.fillRect(0, 0, width, height);
  
//     requestAnimationFrame(loop);
// }

// loop();
const story = document.querySelector('#test1');
const randomize = document.querySelector('.randomize');
randomize.addEventListener('click', result);

function result() {
    story.textContent = "hi";
    story.style.visibility = 'visible';
}

function check() {
    console.log('test');
}

function submit() {
    alert("your volume is now " + output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function minus() {
    if (outputInt > 0) {
    outputInt -=1;
    output.textContent = outputInt; }
    
}

function plus() {
    if (outputInt < 100) {
    outputInt +=1;
    output.textContent = outputInt;
    }
}

function random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}



const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/


var slider = document.getElementById("myRange");
slider.addEventListener('click', update);
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', slideSubmit);
var sliderOutput = document.querySelector(".slider-output");


// Update the current slider value (each time you drag the slider handle)
function update() {
  sliderOutput.textContent = slider.value;
}

function slideSubmit() {
    alert("your volume is now " + sliderOutput.textContent);
}