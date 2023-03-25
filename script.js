'use strict';
//Creating the Number
let theNumber = Math.floor(Math.random() * 20 + 1);
//Creating the Number

// Hide Functions
const hideCurtain = function () {
  document.querySelector('.curtain').style.visibility = 'hidden';
};
const hideConfettis = function () {
  document.querySelectorAll('.confetti').forEach((confetti) => {
    confetti.style.visibility = 'hidden';
  });
};
const hideEndMenuScore = function () {
  document.querySelector('.place-holder-score').style.visibility = 'hidden';
  document.querySelector('.place-holder').style.visibility = 'hidden';
};
const hideEndMenu = function () {
  hideCurtain();
  hideConfettis();
  hideEndMenuScore();
};
// Hide Functions

//Show Functions
const showCurtain = function () {
  document.querySelector('.curtain').style.visibility = 'visible';
};
const showConfettis = function () {
  document.querySelectorAll('.confetti').forEach((confetti) => {
    confetti.style.visibility = 'visible';
  });
};
const showPlaceHolder = function () {
  document.querySelector('.place-holder').style.visibility = 'visible';
};
const showPlaceHolderScore = function () {
  document.querySelector('.place-holder-score').style.visibility = 'visible';
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
  document.querySelector('.place-holder').textContent = 'You Lost :/';
  document.querySelector('.end-menu').style.backgroundColor =
    'rgb(241, 75, 75)';
  showPlaceHolder();
  showCurtain();
};
//Losing Function

//Winning Function
const won = function (score) {
  document.querySelector('.place-holder').textContent = 'You won!';
  document.querySelector('.end-menu').style.backgroundColor = '#005B09';
  document.querySelector('.place-holder-score').textContent = `Score: ${score}`;
  showCurtain();
  showEndMenuScore();
};
//Winning Function

//Highscore Function
const newHighscore = function (score) {
  document.querySelector('.highscore').textContent = score;
  document.querySelector('.place-holder').textContent = `New Highscore`;
  showEndMenu();
};
//Highscore Function

// Reset Function
const reset = function () {
  hideEndMenu();
  theNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Take a guess';
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
    document.querySelector('.message').textContent =
      '❌The number is out of range';
    scoreMinusOne();
  } else if (guessedNumber < theNumber) {
    //When the guessed number is lower than the number
    document.querySelector('.message').textContent = '🔻Too low';
    scoreMinusOne();
  } else if (guessedNumber > theNumber) {
    //When the guessed number is higher than the number
    document.querySelector('.message').textContent = '🔺Too high';
    scoreMinusOne();
  }
});
