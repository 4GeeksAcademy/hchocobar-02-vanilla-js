/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function newCard() {
  let suite = ['♦', '♥', '♠', '♣']
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  // Generamos los aleatorios
  let indexSuite = Math.floor(Math.random() * suite.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  // Cambiar el innerHTML correspondiente
  document.querySelector('#top').innerHTML = suite[indexSuite];
  document.querySelector('#number').innerHTML = numbers[indexNumbers];
  document.querySelector('#end').innerHTML = suite[indexSuite];
  // Calcular si la clase de suit será roja o negra
  let suiteColor = suite[indexSuite] == '♦' || suite[indexSuite] == '♥' ? 'text-danger' : 'text-dark'
  // Cambiamos la clase de las suites
  document.querySelector('#top').className = suiteColor
  document.querySelector('#end').className = suiteColor
  // document.querySelector('#number').className = suiteColor
}


window.onload = function () { newCard() };
document.querySelector('#newCard').addEventListener('click', newCard)
setInterval(newCard, 5000)

