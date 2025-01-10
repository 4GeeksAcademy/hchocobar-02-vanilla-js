/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function cardGenerate() {
  let suits = ['♦', '♥', '♠',  '♣'];
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  // Generación de los indices aleatorios
  let indexSuits = Math.floor(Math.random() * suits.length)
  let indexNumbers = Math.floor(Math.random() * numbers.length)
  // Renderizamos los suits y numbers aleatorios
  document.querySelector('#top').innerHTML = suits[indexSuits];
  document.querySelector('#button').innerHTML = suits[indexSuits];
  document.querySelector('#number').innerHTML = numbers[indexNumbers];
  // Renderizar condicionalmente el color del palo
  /* 
  if (suits[indexSuits] == '♦' || suits[indexSuits] == '♥') {
    document.querySelector('#top').className = ' text-danger'
    document.querySelector('#button').className = 'text-danger'
  } */
  /* Opción con operador ternario */
  let isRed = (suits[indexSuits] == '♦' || suits[indexSuits] == '♥')
  document.querySelector('#top').className = isRed ? 'text-danger' : 'text-dark'
  document.querySelector('#button').className = isRed ? 'text-danger' : 'text-dark'
}

window.onload = function () { 
  cardGenerate() 
  document.querySelector('#btnNewCard').addEventListener('click', cardGenerate);
};

setInterval(cardGenerate, 1000)
