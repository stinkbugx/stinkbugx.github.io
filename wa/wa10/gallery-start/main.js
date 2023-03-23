const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const fileNames = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
const fileAlts = ["Closeup of a human eye", "Wavy rock formation", "Purple and white flowers", "Ancient egyption art", "A brown moth on a leaf"];

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
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
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