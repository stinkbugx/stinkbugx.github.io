const catButton = document.querySelector(".new-cat"); 
// const dogButton = document.querySelector(".new-dog"); 
// const bearButton = document.querySelector(".new-bear"); 

const endpointCat = "https://random.dog/woof.json";
// const endpointDog = "https://place.dog";
// const endpointBear = "https://placebear.com";

const catImage = document.querySelector('.cat-img');

catButton.addEventListener('click', loadCat);
// dogButton.addEventListener('click', loadDog);
// bearButton.addEventListener('click', loadBear);

async function loadCat(){
    // console.log("clicked!");
    try { //the code will try to execute this
        const response = await fetch(endpointCat); //variable "response" will wait until there is a fetch response and then store it
        //await only works in async functions
        if (!response.ok){ //! means not, if the response is NOT okay
            throw Error(response.statusText);
        }
        const json = await response.json(); //save the json from the response
        // console.log(json); //prints the json in the console
        var urlString = json.url; //saves the json url
        var urlParts = urlString.split('.'); //splits the url
        while (urlParts[2] == "mp4" || urlParts[2] == "webm") { //checks if the last part of the url is .mp4 (not usable)
            //redoes the fetch and check part
            const response = await fetch(endpointCat); //variable "response" will wait until there is a fetch response and then store it
            //await only works in async functions
            if (!response.ok){ //! means not, if the response is NOT okay
                throw Error(response.statusText);
            }
            const json = await response.json(); //save the json from the response
            console.log(json); //prints the json in the console
            var urlString = json.url; //saves the json url
            var urlParts = urlString.split('.'); //splits the url
        }
        // console.log(urlParts[0]);
        // console.log(urlParts[1]);
        // console.log(urlParts[2]);
        displayCat(urlString); //need to get the url, not just json
    } catch (err) { //if the code can't run it, it will catch the error (as the "err" variable) and do this
        console.log(err);
        alert('Dog failure :(');
    }
}

function displayCat(cat){
    // console.log("ran display");
    // console.log(cat);
    catImage.setAttribute('src', cat);
}
