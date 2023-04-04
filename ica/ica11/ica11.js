const quoteButton = document.querySelector("#js-new-quote"); 
// Use ".new-quote" not ".new-quote button" if using the class (rn we are using the id)
const answerButton = document.querySelector("#js-new-answer");
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

quoteButton.addEventListener('click', getQuote);
answerButton.addEventListener('click', getAnswer);

async function getQuote(){
    //console.log("clicked!");
    try { //the code will try to execute this
        const response = await fetch(endpoint); //variable "response" will wait until there is a fetch response and then store it
        //await only works in async functions
        if (!response.ok){ //! means not, if the response is NOT okay
            throw Error(response.statusText);
        }
        const json = await response.json(); //save the json from the response
        //console.log(json); //prints the json in the console
        displayQuote(json.question);
        resetAnswer(); //resets the answer whenever a new question loads
    } catch (err) { //if the code can't run it, it will catch the error (as the "err" variable) and do this
        console.log(err);
        alert('Trivia failure :((');
    }
}

function displayQuote(quote){
    //using just the straight json displays as [object Object] (displayQuote(json);)
    //instead we use json.question (displayQuote(json.question);)
    const quoteText = document.querySelector("#js-quote-text"); //selects the div with the set id
    quoteText.textContent = quote; //changes the text in the div to the quote
}

getQuote(); //running getQuote on its own so that the page starts with a quote/trivia
//this will run at the top of the code too, but that is bad practice


async function getAnswer(){ //modified getQuote function that displays the answer instead
    //console.log("clicked!");
    try { //the code will try to execute this
        const response = await fetch(endpoint); //variable "response" will wait until there is a fetch response and then store it
        //await only works in async functions
        if (!response.ok){ //! means not, if the response is NOT okay
            throw Error(response.statusText);
        }
        const json = await response.json(); //save the json from the response
        //console.log(json); //prints the json in the console
        displayAnswer(json.answer);
    } catch (err) { //if the code can't run it, it will catch the error (as the "err" variable) and do this
        console.log(err);
        alert('Answer failure :((');
    }
}

function displayAnswer(answer){ //modified displayQuote
    const answerText = document.querySelector("#js-answer-text"); //selects the div with the set id
    answerText.textContent = answer; //changes the text in the div to the quote
}

function resetAnswer(){ //clears the answer text 
    const answerText = document.querySelector("#js-answer-text"); //selects the div with the set id
    answerText.textContent = ""; //changes the text in the div to the quote
}
