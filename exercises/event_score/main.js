console.log("This code is loading the JavaScript file");

let materials = ["wood", "brick", "broken dishes", "dust", "leaves", "grass"];

let places = [
  "cold, windy climate",
  "desert",
  "deserted airport",
  "deserted church",
  "deserted factory",
  "hot climate",
  "metropolis"
];

let people = [
  "collectors of all types",
  "fishermen and families",
  "french and german speaking people",
  "old friends",
  "horses and birds",
  "little boys",
  "lovers"
];

let thing = [
  "natural light",
  "all available lighting",
  "candles",
  "electricity"
];


//select a random element from each array
//write a function generatePoem() render this randomized text to the page
//have this function run on window load

function selectRandomElement(array){
let randomizer = array[Math.floor(Math.random()*array.length)]
return randomizer;
}
function generatePoem(n){
    // select a random element from each array list
    let randomMaterial = selectRandomElement(materials);
    let randomPlace = selectRandomElement(places);
    let randomPeople = selectRandomElement(people);
    let randomThing = selectRandomElement(thing);

    for(let i = 0; i < n; i++){
        setTimeout(generatePoem, i*1000)
    }
// grab container on the web page
const container = document.querySelector('.container');
// create a new paragraph element
const paragraph = document.createElement('p');
//construct sentence
paragraph.textContent = `A house of ${randomMaterial} in a ${randomPlace} using ${randomThing} inhabited by ${randomPeople}`;
//append the paragraph to page
container.appendChild(paragraph);
}

//call or invoke the function
window.addEventListener('load', function(event){
    generatePoem(8)
})