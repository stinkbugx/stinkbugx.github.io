const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const storyText = "Bob is a very :insertX: person, they have breathtaking :insertY: and everyone loves their :insertZ:!";
const insertX = ["cool", "funny", "beautiful", "charming", "smart", "creative"];
const insertY = ["eyes", "hair", "clothes"];
const insertZ = ["personality", "sense of humour", "conversations"];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let itemX = randomValueFromArray(insertX);
    let itemY = randomValueFromArray(insertY);
    let itemZ = randomValueFromArray(insertZ);
    newStory = newStory.replace(":insertX:", itemX);
    newStory = newStory.replace(":insertY:", itemY);
    newStory = newStory.replace(":insertZ:", itemZ);
    newStory = newStory.replace(":insertX:", itemX);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if(document.getElementById("girl").checked) {
        newStory = newStory.replace("they have", "she has");
        newStory = newStory.replace("their", "her");
    }
    if(document.getElementById("boy").checked) {
        newStory = newStory.replace("they have", "he has");
        newStory = newStory.replace("their", "his");
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}