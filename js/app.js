'use strict';

var itemsArr = [];

//create a link of DOM elements
var imageOneEl = document.getElementById('image1');
var imageTwoEl = document.getElementById('image2');
var imageThreeEl = document.getElementById('image3');
var divEl = document.getElementById('items-container');

//Only allow 5 rounds of clciking
var clickTracker = 25;

//constructor function
function Item (name, scr){
  this.name = name;
  this.scr = scr;
  this.clicked = 0;
  this.shown = 0;

  itemsArr.push(this);
}

//randomizer function
function randomizer(max){
  return Math.floor(Math.random()*max);
}

//function that picks three numbers and randomly generate

function imageGenerator(){
  var pic1 = randomizer(itemsArr.length);
  // console.log(pic1);
  var pic2 = randomizer(itemsArr.length);
  // console.log(pic2);

  while(pic2 === pic1){
    pic2 = randomizer(itemsArr.length);
    // console.log(pic2);
  }

  var pic3 = randomizer(itemsArr.length);
  // console.log(pic3);

  while(pic3 === (pic1 || pic2)){
    pic3 = randomizer(itemsArr.length);
    // console.log(pic2);
  }

  imageOneEl.src = itemsArr[pic1].scr;
  imageOneEl.title = itemsArr[pic1].name;
  itemsArr[pic1].shown++;

  imageTwoEl.src = itemsArr[pic2].scr;
  imageTwoEl.title = itemsArr[pic2].name;
  itemsArr[pic2].shown++;

  imageThreeEl.src = itemsArr[pic3].scr;
  imageThreeEl.title = itemsArr[pic3].name;
  itemsArr[pic3].shown++;
}

new Item ('bag','./assets/bag.jpg');
new Item ('banana','./assets/banana.jpg');
new Item ('bathroom','./assets/bathroom.jpg');
new Item ('boots','./assets/boots.jpg');
new Item ('breakfast','./assets/breakfast.jpg');
new Item ('bubblegum','./assets/bubblegum.jpg');
new Item ('chair','./assets/chair.jpg');
new Item ('cthulhu','./assets/cthulhu.jpg');
new Item ('dog-duck','./assets/dog-duck.jpg');
new Item ('dragon','./assets/dragon.jpg');
new Item ('pen','./assets/pen.jpg');
new Item ('pet-sweep','./assets/pet-sweep.jpg');
new Item ('scissors','./assets/scissors.jpg');
new Item ('shark','./assets/shark.jpg');
new Item ('sweep','./assets/sweep.png');
new Item ('tauntaun','./assets/tauntaun.jpg');
new Item ('unicorn','./assets/unicorn.jpg');
new Item ('usb','./assets/usb.gif');
new Item ('water can','./assets/water-can.jpg');
new Item ('wine glass','./assets/wine-glass.jpg');

//parent element for list of final report
var pEl = document.getElementById('finalReport');

//create a function with a for loop that goes through every item and prints out how many times a image was clicked on and how many times it was shown. It also needs to create an element give it content then attach it to the parent element.
function finalReport(){
  for(var i = 0; i < itemsArr.length; i++){
    var newEl = document.createElement('li');
    newEl.textContent = `${itemsArr[i].name} had ${itemsArr[i].clicked} votes and was shown ${itemsArr[i].shown} times.`;
    pEl.appendChild(newEl);
  }
}

// stop clicking function
function stopClicking() {
  divEl.removeEventListener('click', handleClick);
  divEl.textContent = '';
  // console.log('done');
}

//create event handler
function handleClick(event){
  var clickedItem = event.target.title;
  for(var i=0; i <itemsArr.length; i++){
    if (clickedItem === itemsArr[i].name){
      itemsArr[i].clicked++;
    }
  }
  clickTracker--;
  if(clickTracker === 0){
    stopClicking();
    finalReport();
  }
  else{
    imageGenerator();
  }
}

divEl.addEventListener('click', handleClick);


imageGenerator();
