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
function Item (name, src, clicked = 0,shown = 0){
  this.name = name;
  this.src = src;
  this.clicked = clicked;
  this.shown = shown;

  itemsArr.push(this);
}

//randomizer function
function randomizer(max){
  return Math.floor(Math.random()*max);
}

//save to local storage
function saveLocalStorage(){
  var savedItems = JSON.stringify(itemsArr);
  localStorage.setItem('allItems', savedItems);
}

//load up local storage
function loadLocalStorage(){
  if(localStorage.getItem('allItems')){
    var localStorageItems = JSON.parse(localStorage.getItem('allItems'));
    for (var i = 0; i < localStorageItems.length; i++){
      new Item (localStorageItems[i].name, localStorageItems[i].src,localStorageItems[i].clicked, localStorageItems[i].shown);
    }
  }
  else{
    new Item ('Bag','./assets/bag.jpg');
    new Item ('Banana','./assets/banana.jpg');
    new Item ('Bathroom','./assets/bathroom.jpg');
    new Item ('Boots','./assets/boots.jpg');
    new Item ('Breakfast','./assets/breakfast.jpg');
    new Item ('Bubblegum','./assets/bubblegum.jpg');
    new Item ('Chair','./assets/chair.jpg');
    new Item ('Cthulhu','./assets/cthulhu.jpg');
    new Item ('Dog-duck','./assets/dog-duck.jpg');
    new Item ('Dragon','./assets/dragon.jpg');
    new Item ('Pen','./assets/pen.jpg');
    new Item ('Pet-sweep','./assets/pet-sweep.jpg');
    new Item ('Scissors','./assets/scissors.jpg');
    new Item ('Shark','./assets/shark.jpg');
    new Item ('Sweep','./assets/sweep.png');
    new Item ('Tauntaun','./assets/tauntaun.jpg');
    new Item ('Unicorn','./assets/unicorn.jpg');
    new Item ('Usb','./assets/usb.gif');
    new Item ('Water can','./assets/water-can.jpg');
    new Item ('Wine glass','./assets/wine-glass.jpg');
  }
  imageGenerator();
}
//Keeps track of last 3 images seen
var noDuplicates = [];

//function used to generate the images seen on the screen
function imageGenerator(){
  var pic1 = randomizer(itemsArr.length);
  while((pic1 === noDuplicates[0]) || (pic1 === noDuplicates[1]) || (pic1 === noDuplicates[2])){
    pic1 = randomizer(itemsArr.length);
  }

  var pic2 = randomizer(itemsArr.length);
  while((pic2 === noDuplicates[0]) || (pic1 === pic2) || (pic2 === noDuplicates[1]) || (pic2 === noDuplicates[2])){
    pic2 = randomizer(itemsArr.length);
  }

  var pic3 = randomizer(itemsArr.length);
  while((pic3 === pic1) || (pic3 === pic2) || (pic3 === noDuplicates[0]) || (pic3 === noDuplicates[1]) ||(pic3 === noDuplicates[2])){
    pic3 = randomizer(itemsArr.length);
  }


  noDuplicates = [pic1,pic2,pic3];

  imageOneEl.src = itemsArr[pic1].src;
  imageOneEl.title = itemsArr[pic1].name;
  itemsArr[pic1].shown++;

  imageTwoEl.src = itemsArr[pic2].src;
  imageTwoEl.title = itemsArr[pic2].name;
  itemsArr[pic2].shown++;

  imageThreeEl.src = itemsArr[pic3].src;
  imageThreeEl.title = itemsArr[pic3].name;
  itemsArr[pic3].shown++;
}
function seedChartData(){
  var clickArray = [];
  var labelArray = [];
  var viewedArray = [];

  for (var i=0; i < itemsArr.length; i++){
    clickArray.push(itemsArr[i].clicked);
    labelArray.push(itemsArr[i].name);
    viewedArray.push(itemsArr[i].shown);
  }
  return [clickArray, labelArray, viewedArray];
}
function renderChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: seedChartData()[1],
      datasets: [{
        label: '# of Votes',
        data: seedChartData()[0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: seedChartData()[2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }]
    },

    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

//parent element for list of final report
var pEl = document.getElementById('finalReport');

//create a function with a for loop that goes through every item and prints out how many times a image was clicked on and how many times it was shown. It also needs to create an element give it content then attach it to the parent element.
function finalReport(){
  for(var i = 0; i < itemsArr.length; i++){
    var newEl = document.createElement('li');
    newEl.textContent = `${itemsArr[i].name}: ${itemsArr[i].clicked} votes`;
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
    saveLocalStorage();
    renderChart();
  }
  else{
    imageGenerator();
  }
}

divEl.addEventListener('click', handleClick);


loadLocalStorage();
