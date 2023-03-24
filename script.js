'use strict';
let theNumber = Math.floor(Math.random() * 20 + 1);
document.querySelectorAll('.again').forEach((item) => {
  item.addEventListener('click', function () {
    theNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Take a guess';
    document.body.style.backgroundColor = '#43344d';
    document.querySelector('.curtain').style.visibility = 'hidden';
    document.querySelector('.place-holder-score').style.visibility = 'hidden';
  });
});

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  const score = Number(document.querySelector('.score').textContent);
  const highscore = Number(document.querySelector('.highscore').textContent);
  if (score === 0) {
    document.querySelector('.place-holder').textContent = 'You Lost :/';
    document.querySelector('.end-menu').style.backgroundColor =
      'rgb(241, 75, 75)';
    document.querySelector('.curtain').style.visibility = 'visible';
  } else if (guessedNumber === theNumber) {
    document.querySelector('.place-holder').textContent = 'You won!';
    document.querySelector('.end-menu').style.backgroundColor =
      'rgb(10, 129, 10)';
    document.querySelector('.curtain').style.visibility = 'visible';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      document.querySelector('.place-holder').textContent = `New Highscore`;
      document.querySelector('.place-holder-score').style.visibility =
        'visible';
      document.querySelector(
        '.place-holder-score'
      ).textContent = `🥳   ${score}   🥳`;
    }
  } else if (guessedNumber < 1 || guessedNumber > 20) {
    document.querySelector('.message').textContent =
      '❌The number is out of range';
    document.querySelector('.score').textContent--;
  } else if (guessedNumber < theNumber) {
    document.querySelector('.message').textContent = '🔻Too low';
    document.querySelector('.score').textContent--;
  } else if (guessedNumber > theNumber) {
    document.querySelector('.message').textContent = '🔺Too high';
    document.querySelector('.score').textContent--;
  }
});
