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
const players1Total = [...game.players[0], 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'];
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
const printGoals = function(...players) {
  let goal = players.length;
  console.log(players, goal);
}
printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
printGoals(...game.scored);

//TODO Команда с более низкими коэффициентами выиграет с большей вероятностью.
//TODO Вывести в консоль, какая команда с большей вероятностью победит,
//TODO БЕЗ использования оператора if / else или тернарного оператора.
team1 > team2 && console.log(`${game.team1} win`);
team1 < team2 && console.log(`${game.team2} win`);