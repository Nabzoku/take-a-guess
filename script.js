'use strict';
//Creating the Number
const randomNumber = function () {
  return Math.floor(Math.random() * 20 + 1);
};
let theNumber = randomNumber();
//Creating the Number

//DOM functions
const visibilitydom = function (elementClass, visibility) {
  document.querySelector(elementClass).style.visibility = visibility;
};
const textdom = function (elementClass, text) {
  document.querySelector(elementClass).textContent = text;
};
//DOM functions

// Hide Functions
const hideCurtain = function () {
  visibilitydom('.curtain', 'hidden');
};
const hideConfettis = function () {
  visibilitydom('.left-confetti', 'hidden');
  visibilitydom('.right-confetti', 'hidden');
};
const hideEndMenuScore = function () {
  visibilitydom('.place-holder-score', 'hidden');
  visibilitydom('.place-holder', 'hidden');
};
const hideEndMenu = function () {
  hideCurtain();
  hideConfettis();
  hideEndMenuScore();
};
// Hide Functions

//Show Functions
const showCurtain = function () {
  visibilitydom('.curtain', 'visible');
};
const showConfettis = function () {
  visibilitydom('.left-confetti', 'visible');
  visibilitydom('.right-confetti', 'visible');
};
const showPlaceHolder = function () {
  visibilitydom('.place-holder', 'visible');
};
const showPlaceHolderScore = function () {
  visibilitydom('.place-holder-score', 'visible');
};
const showEndMenuScore = function () {
  showPlaceHolder();
  showPlaceHolderScore();
};
const showEndMenu = function () {
  showCurtain();
  showConfettis();
  showEndMenuScore();
};
//Show Functions

//Losing Function
const lost = function () {
  textdom('.place-holder', 'You Lost!');
  document.querySelector('.end-menu').style.backgroundColor =
    'rgb(241, 75, 75)';
  showPlaceHolder();
  showCurtain();
};
//Losing Function

//Winning Function
const won = function (score) {
  textdom('.place-holder', 'You Won!');
  textdom('.place-holder-score', `Score: ${score}`);
  document.querySelector('.end-menu').style.backgroundColor = '#005B09';
  showCurtain();
  showEndMenuScore();
};
//Winning Function

//Highscore Function
const newHighscore = function (score) {
  textdom('.highscore', score);
  textdom('.place-holder', 'New Highscore');
  showEndMenu();
};
//Highscore Function

// Reset Function
const reset = function () {
  hideEndMenu();
  theNumber = randomNumber();
  textdom('.score', 20);
  textdom('.message', 'Take a guess');
  document.body.style.backgroundColor = '#43344d';
};
// Reset Function

// Score Dropping Function
const scoreMinusOne = function () {
  document.querySelector('.score').textContent--;
};
// Score Dropping Function

//Reset Buttons
document.querySelectorAll('.again').forEach((button) => {
  button.addEventListener('click', function () {
    reset();
  });
});
//Reset Buttons

//Checking the Number
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  const score = Number(document.querySelector('.score').textContent);
  const highscore = Number(document.querySelector('.highscore').textContent);

  if (score === 0) {
    //When score is 0 (Basically when you lose)
    lost();
  } else if (guessedNumber === theNumber) {
    //When guessing the number right
    won(score);
    if (score > highscore) {
      //When you score is higher than highscore
      newHighscore(score);
    }
  } else if (guessedNumber < 1 || guessedNumber > 20) {
    //When the guessed number is out of range
    textdom('.message', '❌The number is out of range');
  } else if (guessedNumber !== theNumber) {
    //When the guessed number is lower or higher than the number
    textdom('.message', guessedNumber < theNumber ? '🔻Too low' : '🔺Too high');
    scoreMinusOne();
  }
});
