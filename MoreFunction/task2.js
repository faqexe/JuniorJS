'use strict';

//? В конце функции IIFE ниже прикрепите обработчик события,
//? который меняет цвет выбранного элемента h2 на зелёный при каждом клике
//? на элементе body. Не выбирайте элемент h2 снова!

// (function () {
//   const h2 = document.querySelector('h2');
//   h2.style.color = 'orange';
//  })();

(function () {
  const h2 = document.querySelector('h2');
  h2.style.color = 'orange';

  document.body.addEventListener('click', () => {
    h2.style.color = 'green';
  })
 })();