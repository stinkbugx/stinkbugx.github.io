const setup = document.querySelector('#setup');
// const start = document.querySelector('#start');
const gridGrid = document.querySelector('.gridGrid');

setup.addEventListener('click', makeButtons);
// start.addEventListener('click', animate);

function makeButtons() {
    for (i=0; i<9; i++){
        let newGrid = document.createElement('div');
        gridGrid.appendChild(newGrid);
        // newGrid.setAttribute('id', "grid" + (i+1));
        newGrid.setAttribute('class', "buttonGrid");
        for(j=0; j<9; j++){
            let newButton = document.createElement('button');
            newGrid.appendChild(newButton);
            //newButton.textContent = i + "" + j ;
            // newButton.textContent = "";
            // newButton.setAttribute('id', "butt" + i + "" + j);
            newButton.setAttribute('class', "grid-item");
            if (j == i){
                newButton.textContent = "X";
            } else {
                newButton.textContent = ".";
            }
            for (a=0; a<9; a++){
                let newGrid = document.createElement('div');
                gridGrid.appendChild(newGrid);
                // newGrid.setAttribute('id', "grid" + (a+1));
                newGrid.setAttribute('class', "buttonGrid");
                for(b=0; b<9; b++){
                    let newButton = document.createElement('button');
                    newGrid.appendChild(newButton);
                    // newButton.setAttribute('id', "butt" + a + "" + b);
                    newButton.setAttribute('class', "grid-item");
                    if (b == j){
                        newButton.textContent = "X";
                    } else if (a == b) {
                        newButton.textContent = "O";
                    } else {
                        newButton.textContent = ".";
                    }
                }
            }
        }
    }
    
}

