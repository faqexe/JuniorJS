const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

//* Task 1

//TODO Создать отдельные массивы с игроками для каждой команды (переменные players1 и players2)
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
console.log(players1);
console.log(players2);
// const [players1, players2] = game.players;

//TODO Первый игрок в каждом из этих массивов - вратарь, а остальные - полевые игроки.
//TODO Для команды REAL MADRID (team1) создайте одну переменную (goalkeeper) с именем вратаря
//TODO и один массив (fieldPlayers) со всеми остальными 10 полевыми игроками.
const [goalkeeper, ...fieldPlayers] = game.players[0];
console.log(goalkeeper);
console.log(fieldPlayers);
// const [goalkeeper, ...fieldPlayers] = players1;

//TODO Создайте массив allPlayers, содержащий всех игроков обеих команд (22 игрока).
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);
// const allPlayers = [...players1, ...players2];

//TODO REAL MADRID (team1) использовал 5 запасных игроков во время игры.
//TODO Создайте новый массив (players1Total), содержащий всех оригинальных игроков team1,
//TODO а также добавить тех, кто пришел на замену 'Marcelo', 'Isco', 'Asensio', 'Diaz' и 'Odriozola'.
const players1Total = [
  ...game.players[0],
  'Marcelo',
  'Isco',
  'Asensio',
  'Diaz',
  'Odriozola',
];
console.log(players1Total);
// const players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'];

//TODO На основе объекта game.odds создайте по одной переменной для
//TODO каждого коэффициента (под названием team1, draw и team2).
const { team1, draw, team2 } = game.odds;
console.log(team1, draw, team2);

//TODO Написать функцию printGoals, которая принимает произвольное количество
//TODO имен игроков (НЕ массив) и выводит каждое из них в консоль вместе
//TODO с общим количеством забитых голов (количество имен игроков, переданных в функцию).
//? Тестовые данные: Сначала используйте игроков 'Mingueza', 'Messi', 'Modrich' и 'Nacho'.
//? Затем снова вызовите функцию с игроками, используя game.scored.
const printGoals = function (...players) {
  let goal = players.length;
  console.log(players, goal);
};
printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
printGoals(...game.scored);

//TODO Команда с более низкими коэффициентами выиграет с большей вероятностью.
//TODO Вывести в консоль, какая команда с большей вероятностью победит,
//TODO БЕЗ использования оператора if / else или тернарного оператора.
team1 > team2 && console.log(`${game.team1} win`);
team1 < team2 && console.log(`${game.team2} win`);

//* Task 2
console.log(`///Task 2///`);
//TODO Перебрать массив game.scored, вывести имя каждого игрока вместе с номером гола
//TODO (например, “Goal 1 - Kroos”)
let countGoal = 0;
for (let player of game.scored) {
  countGoal += 1;
  console.log(`Goal ${countGoal} - ${player}`);
}

// for (const [index, name] of game.scored.entries()) {
//   // console.log(entry);
//   console.log(`Goal ${index + 1} - ${name}`);
// }

//TODO Используйте цикл для вычисления среднего коэффициента и выведите его в консоль
const odds = Object.values(game.odds);
const averageValue = odds.reduce((a, b) => a + b, 0) / odds.length;
console.log(averageValue);

// let oddSum = 0;
// let odds = Object.values(game.odds);
// for (const odd of odds) {
//   oddSum += odd;
// }
// // console.log(oddSum);
// // console.log(odds);

// const averageOdd = oddSum / odds.length;
// console.log(averageOdd);

//TODO Вывести в консоль 3 коэффициента в формате:
//? Rate for REAL MADRID victory: 1.48
//? Rate for draw: 2.53
//? Rate for BARCELONA victory: 4.25
//TODO Получить название команд из игрового объекта, не вводить вручную
console.log(`Rate for ${game.team1} victory: ${odds[0]}`);
console.log(`Rate for ${Object.keys(game.odds)[1]} victory: ${odds[0]}`);
console.log(`Rate for ${game.team2} victory: ${odds[2]}`);

// for (const [teamName, odd] of Object.entries(game.odds)) {
//   console.log(teamName, odd);
//   const mutableText =
// teamName === 'draw' ? 'draw' : `${game[teamName]} victory`;
//   console.log(`Rate for ${mutableText}: ${odd}`);
// }

//TODO Создать объект под названием goalScorers, который содержит имена игроков,
//TODO забивших гол, в качестве свойств и количество голов в качестве значения.
//TODO В этой игре он будет выглядеть следующим образом:
// {
//   Kroos: 1,
//   Benzema: 1,
//   Mingueza: 1
// }

let goalScorers = {};
for (let player of game.scored) {
  goalScorers[player] ? goalScorers[player]++ : (goalScorers[player] = 1);
}
console.log(goalScorers);

//* Task 3
console.log(`///Task 3///`);

//? В Map ключи - это минуты, значения - события
const events = new Map([
  [19, 'Goal'],
  [21, 'Substitution'],
  [43, 'Goal'],
  [56, 'Substitution'],
  [69, 'Yellow card'],
  [73, 'Substitution'],
  [75, 'Yellow card'],
  [79, 'Substitution'],
  [81, 'Red card'],
  [93, 'Goal'],
]);

//TODO Создать массив gameEvents с различными игровыми событиями,
//TODO которые могут произойти (без дубликатов)
const gameEvents = [...new Set(events.values())];
console.log(gameEvents);

//TODO После окончания игры выяснилось, что желтая карточка на 75-ой минуте
//TODO была несправедливой. Поэтому удалите это событие из журнала игровых событий
events.delete(75);
console.log(events);

//TODO Рассчитайте и запишите в консоль следующее:
//TODO "В среднем событие происходило каждые 11 минут"
//TODO (имейте в виду, что в игре 90 минут, которые нужно поделить на количество событий)
console.log(`В среднем событие происходило каждые ${90 / events.size} минут`);

//TODO Пройтись по Map events и вывести каждый элемент в консоль
//TODO с пометкой в первой или второй половине игры произошло событие (после 45 минут):
//TODO [FIRST HALF] 19:  Goal
for (const [key, value] of events) {
  let half;
  if (key <= 45) {
    half = 'FIRST';
    console.log(`[${half} HALF] ${key}: ${value}`);
  } else if (key > 45 && key <= 90){
    half = 'SECOND';
    console.log(`[${half} HALF] ${key}: ${value}`);
  } else {
    half = 'EXTRA';
    console.log(`[${half} TIME] ${key}: ${value}`);
  }
}