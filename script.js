'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const DispalyNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'Not a number';
    displayMessage('Not a number');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉correct number';
    displayMessage('🎉correct number');

    // document.querySelector('.number').textContent = secretNumber;
    DispalyNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = ' 30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong

    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '↗ Number is too high' : '↘ Number is too low';
      displayMessage(
        guess > secretNumber ? '↗ Number is too high' : '↘ Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   'you lose the game 📛📛📛';
      displayMessage('you lose the game 📛📛📛');
    }

    // when guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent = '↘ Number is too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent =
    //       'you lose the game 📛📛📛';
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing ...';
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  // document.querySelector('.number').textContent = '?';
  DispalyNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = ' 15rem';
});
