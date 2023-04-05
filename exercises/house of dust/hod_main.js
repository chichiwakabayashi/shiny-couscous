let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];
  
  let array_two = [
    "among other houses",
    "among small hills",
    "among high montains",
    "by a river",
    "by an abandoned lake"
  ];
  
  // let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];
  
  function renderPoem() {
    // select random element from array 01
    let elementFromArrayOne = array_one[Math.floor(Math.random()*array_one.length)];
  
    // select a random element from array 2
    let elementFromArrayTwo = array_two[Math.floor(Math.random()*array_two.length)];
  
    // use querySelector to grap the div with a class of poem
    let poem = document.querySelector('.poem')
  
    // create a new element ... paragraph tag
    let paragraph = document.createElement('p')
  
    // add the text attribute
    paragraph.textContent = `${elementFromArrayOne} ${elementFromArrayTwo}`
  
    // add class attribute
    paragraph.classList.add('line')
  
    // elementFromArrayOne + " " + elementFromArrayTwo
  
    // append that paragrap to the div with a class of poem
    poem.appendChild(paragraph)
  }
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem);
  