'use strict';

let score = 20;
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

const clickGuessFunction = function () {
  const guess = Number(document.querySelector('.guess').value);

  //if no number provided

  if (!guess) {
    document.querySelector('.message').textContent = 'You must enter a number!';
  }

  //if the guess matches the number

  if (guess === number) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'You win!';
    document.querySelector('.number').textContent = number;
    const highscore = Number(document.querySelector('.highscore').textContent);
    const currentScore = Number(document.querySelector('.score').textContent);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < currentScore) {
      document.querySelector('.highscore').textContent = currentScore;
    }
  }
  //if too high
  else if (guess > number) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too high!';
  }
  //if too low
  else {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too low!';
  }
};

const clickAgainFunction = function () {
  document.querySelector('.score').textContent = 0;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log(number);
};

document.querySelector('.check').addEventListener('click', clickGuessFunction);
document.querySelector('.again').addEventListener('click', clickAgainFunction);
