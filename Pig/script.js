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

let totalScore, currentScore, activePlayer, isPlaying;

//* Начальные настройки игры
const initGame = function () {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.remove('player--active');
  player1Element.classList.remove('player--active');
  player0Element.classList.add('player--active');
  diceElement.classList.add('hidden');
};

initGame();

const switchActivePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//* Бросаем кубик
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
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
      switchActivePlayer();
    }
  }
});

//* Кнопка Оставить
btnHold.addEventListener('click', function () {
  if (isPlaying) {
    //TODO Добавить очки к общему счету текущего игрока
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    //TODO Если общий счет >= 100 - Игрок выиграл
    //TODO Если общий счет < 100 - Переключить на другого игрока
    if (totalScore[activePlayer] >= 100) {
      isPlaying = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchActivePlayer();
    }
  }
});

//* Новая игра
btnNew.addEventListener('click', initGame);
