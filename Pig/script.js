'use strict';

//* Выбор элементов
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

//* Начальные настройки игры
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//* Бросаем кубик
btnRoll.addEventListener('click', function () {
  //TODO Сгенерировать случайное число
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);

  //TODO Отобразить число на кубике
  diceElement.classList.remove('hidden');
  diceElement.src = `dice${diceNumber}.png`;

  //TODO Если число 1, переключить на другого игрока
  //TODO Если нет - добавить к счету игрока
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
  }
});
