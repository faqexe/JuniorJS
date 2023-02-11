"use strict";

let result;
const firstName = "Jack";
const lastName = "Brown";
const space = " ";
const age = 25;
const greeting = "Hey there!";

// Соединение строк

result = firstName + space + lastName;

result =
  greeting +
  space +
  "My name is" +
  space +
  firstName +
  " " +
  lastName +
  ". I'm " +
  age +
  " years old.";

// Экранирование

result = "I'm 34 years old";

result = 'I like "Star wars" movie';

// Свойства и методы

// Длина строки
result = "Hello! ".length;
result = firstName.length;

// concat()
result = firstName.concat(" ", lastName);
result = greeting.concat(space, "My name is ", firstName, space, lastName);

// Заглавные буквы в строке
result = result.toUpperCase();
// Маленькие буквы в строке
result = result.toLowerCase();

// Поиск по индексу

// Второй символ строки
result = firstName[1];

result = "Hello".indexOf("l"); // возвращает индекс символа, который встречается первым
result = "Hello lol".lastIndexOf("l"); // возращает индекс символа, который встречается первым с конца
result = firstName.indexOf("a"); // 1
result = "Hello lol".indexOf("lo"); // 3
result = firstName.indexOf("b"); // - 1 - нет такого символа

// charAt() - нахождение символа на позиции
result = firstName.charAt(1);

const longString = "Hi, I'm a long string";
// Находим последний символ в строке
result = longString.charAt(longString.length - 1); // g

// substring() - подстрока(от, до не включая)
result = greeting.substring(4, 9);  // there

// slice() - вырезает кусок
result = greeting.slice(4, 9);   // there
result = greeting.slice(-6);  // there!

// split() - разделяет строку в массив
result = longString.split(" ");  // ['Hi,', 'I'm', 'a', 'long', 'string']
const colors = "red, orange, green, blue";
result = colors.split(",");   // ['red', ' orange', ' green', ' blue']

//replace() - заменяет одну строку на другую в исходной строке
result = colors.replace("blue", "yellow");   // red, orange, green, yellow

// includes() - если строка содержит значение - true, если нет - false
result = colors.includes("indigo"); // false

console.log(result);
