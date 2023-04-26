const setup = document.querySelector('#setup');
const start = document.querySelector('#start');
const buttGrid = document.querySelector('.button-grid')

setup.addEventListener('click', makeButtons);
start.addEventListener('click', animate);

function makeButtons() {
    for (i=0; i<100; i++){
        let newButton = document.createElement('button');
        buttGrid.appendChild(newButton);
        newButton.textContent = i + 1;
        newButton.setAttribute('id', "butt" + (i + 1));
        newButton.setAttribute('class', "grid-item");
    }
}

function animate() {
    for (i=0; i<100; i++){
        for (j=0; j<100; j++){
            // setTimeout(function(){
            //     console.log("Executed after 1 second");
            // }, 1000);
            let currentButt = document.querySelector('#butt' + (j + 1));
            if (currentButt.getAttribute('id') == "butt" + (i + 1)){
                currentButt.textContent = "o";
            } else {
                currentButt.textContent = "x";
            }
        }
    }   
}