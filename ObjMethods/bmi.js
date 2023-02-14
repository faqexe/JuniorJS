"use strict";

//* BMI = weight / height ** 2 = weight / (height * height) (weight in kg and height in meters)

//* Есть два друга Jack и Mike
// Создать для каждого объект с данными - имя, фамилия, вес и рост (first name, last name, weight and height)

//Создать метод расчета BMI для каждого объекта (один и тот же метод для обоих объектов)
// Сохранить значение BMI в свойстве, а так же верните его из метода

// Вывести в консоль того, у кого значение BMI выше с указанием полного имени и значением BMI
// Example: "Jack White BMI (25.7) is higher than Mike Black (22.4)!"

//* Данные: Jack - вес 79 кг, рост 1.70 м, MIke - вес 91 кг, рост 1.93 м

const person1 = {
  firstName: "Jack",
  lastName: "White",
  weight: 79,
  height: 1.7,
  calcBmi: function() {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  }
};

const person2 = {
  firstName: "Mike",
  lastName: "Black",
  weight: 91,
  height: 1.93,
  calcBmi: function() {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  }
};


person1.calcBmi() > person2.calcBmi() ? 
console.log(`BMI у ${person1.firstName} ${person1.lastName} (${person1.calcBmi().toFixed(1)}) выше, чем у ${person2.firstName} ${person2.lastName} (${person2.calcBmi().toFixed(1)})`) :
console.log(`BMI у ${person2.firstName} ${person2.lastName} (${person2.calcBmi().toFixed(1)}) выше, чем у ${person1.firstName} ${person1.lastName} (${person1.calcBmi().toFixed(1)})`);

