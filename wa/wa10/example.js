const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const fileNames = ["miku1.png", "miku2.jpg", "miku3.jpg", "miku4.jpg"];


//New code \/

for (let i = 0; i < fileNames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileNames[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => changeDisplay(fileNames[i]));
}

function changeDisplay(srcName, altName){
    if (srcName != displayedImage.getAttribute('src')){
        displayedImage.setAttribute('src', srcName);
    }
}

