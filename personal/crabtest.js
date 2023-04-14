const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const fileNames = ["coconutcrab1.jpg", "coconutcrab2.jpg", "coconutcrab3.jpg", "coconutcrab4.jpg"];
const fileAlts = ["the crap1", "the crap2", "the crap3", "the crap4"];

for (let i = 0; i < fileNames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileNames[i]);
    newImage.setAttribute('alt', fileAlts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => changeDisplay(fileNames[i], fileAlts[i]));
}

function changeDisplay(srcName, altName){
    if (srcName != displayedImage.getAttribute('src')){
        displayedImage.setAttribute('src', srcName);
        displayedImage.setAttribute('alt', altName);
    }
}

btn.addEventListener('click', onOff);

function onOff(){
    if (btn.getAttribute('class') == 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = "Wake up";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Bedtime";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}

// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// newImage.setAttribute('alt', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

/* Java script should:
Declare a const array listing the filenames of each image, such as 'pic1.jpg'.
Declare a const object listing the alternative text for each image.
Loop through the array of filenames, and for each one, insert an <img> element inside the thumb-bar <div> 
that embeds that image in the page along with its alternative text.
Add a click event listener to each <img> inside the thumb-bar <div> so that, when they are clicked, the 
corresponding image and alternative text are displayed in the displayed-img <img> element.
Add a click event listener to the <button> so that when it is clicked, a darken effect is applied to the 
full-size image. When it is clicked again, the darken effect is removed again.*/