'use strict';

//TODO Напишите программу, которая принимает список имен переменных,
//TODO написанных в underscore_case и преобразовывает их в camelCase.
//TODO Входные данные будут поступать из html-элемента textarea,
//TODO вставленного в DOM (см. код ниже для вставки элементов),
//TODO а преобразование будет происходить при нажатии на кнопку.

//? Переменные для теста
// underscore_case
//   first_name - 2 пробела спереди
// next_Variable
//    Calculate_AGE - 3 пробела спереди
// arrived_flight

//* Должно вывести в консоль (5 отдельных console.log)
// underscoreCase
// firstName
// nextVariable
// calculateAge
// arrivedFlight

//? Подсказки:
//? Вспомните, какой символ определяет новую строку в текстовом поле
//? Решение должно работать только для переменной из двух слов, например, first_second.
//? Это непростая задача, поэтому начните смотреть решение, если вы застряли.
//? Затем сделайте паузу и продолжайте!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  for (const line of lines) {
    const [firstWord, secondWord] = line.toLowerCase().trim().split('_');
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;
    console.log(output);
  }
}); 
