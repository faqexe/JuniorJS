// console.log('Push ups repetition 1');
// console.log('Push ups repetition 2');
// console.log('Push ups repetition 3');
// console.log('Push ups repetition 4');
// console.log('Push ups repetition 5');
// console.log('Push ups repetition 6');
// console.log('Push ups repetition 7');
// console.log('Push ups repetition 8');
// console.log('Push ups repetition 9');
// console.log('Push ups repetition 10');

// for(let rep = 1; rep <= 10; rep += 2) {
//    console.log(`Push ups repetition ${rep}`);
//    console.log('Hello!')
// }

// console.log('Out of loop'); // выполнится, после for

// ## Цикл и массивы
// const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer', ['Irina', 'Michael'], false];

// const types = [];

// for(let i = 0; i < user123.length; i++) {
//    console.log(user123[i], typeof user123[i]);

   // types[i] = typeof user123[i]; // заполнение нового массива типами элементов другого
   // types.push(typeof user123[i]);  // применение метода push
//    types.unshift(typeof user123[i]); // элементы вставляются в обратном порядке
// }

// console.log(types);

// ## Вычисляем возраст при помощи цикла
// const birthYears = [1974, 1994, 2000, 2003];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//    ages.push(2021 - birthYears[i]);
// }

// console.log(ages);



// continue & break

const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer', ['Irina', 'Michael'], false];

console.log('CONTINUE EXAMPLE');

for(let i = 0; i < user123.length; i++) {
   if (typeof user123[i] !== 'string') continue; // пропускает все, что не является строкой

   console.log(user123[i], typeof user123[i]);
}

console.log('BREAK EXAMPLE');

for(let i = 0; i < user123.length; i++) {
   if (typeof user123[i] === 'number') break; // завершается как только встречается число

   console.log(user123[i], typeof user123[i]);
}


// backwards iteration & loop in loop

console.log('BACKWARDS ITERATION');

const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer', ['Irina', 'Michael']];

for (let i = user123.length - 1; i >= 0; i--) {
   console.log(i, user123[i]);
}

console.log('LOOP IN LOOP');

for (let exercise = 1; exercise <= 3; exercise++) {
   console.log(`Exercise ${exercise}`);

   for (let rep = 1; rep <= 5; rep++) {
      console.log(`Ex ${exercise} Rep ${rep}`);
   }
   console.log('Out of inner loop');
}
