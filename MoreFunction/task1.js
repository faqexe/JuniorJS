//* Давайте создадим простое приложение для опроса!
//* В опросе есть вопрос, набор вариантов, из которых пользователи могут
//* выбирать, и массив с количеством ответов по каждому варианту.
//* Эти данные хранятся в объекте survey, который вы можете увидеть ниже.

//? 1. Создайте метод с именем logNewAnswer для объекта survey.
//? Метод должен выполнять 2 функции:
//? - Отобразите окно prompt, чтобы пользователь мог ввести номер выбранного
//? параметра. Текст в приглашении должен выглядеть следующим образом:
// let test = prompt("Test");

// What programming language would you like to learn?
// 0: JavaScript
// 1: Python
// 2: Ruby
// 3: Java
// 4: C#
// (Enter option number)

const survey = {
  question: 'What programming language would you like to learn?',
  options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
  answers: new Array(5).fill(0),
  logNewAnswer() {
    const question = +prompt(
      `${this.question}\n${this.options.join('\n')}\n(Enter option number)`
    );
    if (
      typeof question === 'number' &&
      question >= 0 &&
      question < this.answers.length
    ) {
      this.answers[question]++;
    } else {
      alert('Incorrect meaning');
    }
    survey.printResults('string');
  },
  printResults(type) {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Survey results: ${this.answers.join(', ')}`);
    }
  },
};

//? - Обновите свойство answers на основе введенного числа.
//? Например, если выбран вариант 2, увеличьте значение во втором элементе
//? массива answers на 1. Убедитесь, что вы ввели именно число и что оно имеет смысл
//? (например, ответ 23 не имеет смысла, верно?)

//? 2. Вызывайте этот метод, когда пользователи нажимают кнопку Take Survey
//? Создайте эту кнопку в index.html файл, как мы ранее создавали кнопку Purchase Airplane.
const startSurveyBtn = document.querySelector('#survey');
startSurveyBtn.addEventListener('click', survey.logNewAnswer.bind(survey));

//? 3. Создайте метод printResults, который выводит результаты опроса в консоль.
//? Метод принимает в качестве входного параметра строку (параметр type)
//? которая может быть либо “string”, либо “array”.
//? Если тип “array”, просто отобразите массив answers без изменений,
//? используя console.log(). Это должна быть опция по умолчанию.
//? Если тип “string”, отобразите строку, подобную этой: “Survey results: 7, 5, 3, 2, 6.”

//? 4. Метод printResults должен запускаться для каждого вызова метода logNewAnswer

//? 5. Используйте метод printResults для отображения 2 массивов из Test Data.
//? Используйте как параметры "string", так и "array".
//? Не помещайте массивы в объект survey!
//? Итак, как должно выглядеть ключевое слово this в данной ситуации?
survey.printResults.call({ answers: [7, 1, 4] }, 'string');
survey.printResults.call({ answers: [3, 6, 9, 2, 5, 4, 4] }, 'array');

// Test Data:
// [7, 1, 4]
// [3, 6, 9, 2, 5, 4, 4]

// const survey = {
//  question: 'What programming language would you like to learn?',
//  options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
//  answers: new Array(5).fill(0), - создает новый массив с пятью нулями
// };
