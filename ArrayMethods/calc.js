// Калькулятор чаевых

//*Если сумма счета < 20, чаевые - 20%. Иначе - 15%
// Создать стрелочную функцию calculateTips(), которая принимает счет (bill)
// и возвращает соответствующие чаевые (tips)
// Создать массив счетов с данными - 11, 20, 47
// Создать набор чаевых для каждого счета
// Создать массив общих счетов (счет + чаевые - bill + tips)

const calculateTips = (bill) => (bill < 20) ? (bill * 0.2) : (bill * 0.15);

const bills = [11, 20, 47];
const tips = [calculateTips(bills[0]), calculateTips(bills[1]), calculateTips(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);  // [ 11, 20, 47 ] [ 2.2, 3, 7.05 ] [ 13.2, 23, 54.05 ]