'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    displayGuessMessage('Введите число!');
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно!');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber
          ? 'Мое число меньше!'
          : 'Мое число больше!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayGuessMessage('Вы проиграли!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.question').textContent = '???';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').style.width = '25rem';
});
