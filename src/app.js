/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const newCard = () => {
  let suits = ['♦', '♥', '♠',  '♣']
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  // Generamos indices aleaatoris
  let indexSuits = Math.floor(Math.random() * suits.length)
  let indexNumbers = Math.floor(Math.random() * numbers.length)
  // Mostramos Numbers y Suits
  document.querySelector('#up').innerHTML = suits[indexSuits];
  document.querySelector('#numbers').innerHTML = numbers[indexNumbers];
  document.querySelector('#down').innerHTML = suits[indexSuits];
  // Secuencia de instrucciones
  let currentClass = suits[indexSuits] == '♦' || suits[indexSuits] == '♥' ? ' text-danger' : 'text-dark';
  document.querySelector('#up').className = currentClass;
  document.querySelector('#numbers').className = currentClass;
  document.querySelector('#down').className = currentClass;
}

window.onload = function() { newCard(); };
document.querySelector('#new-card').addEventListener('click', () => {newCard();});
setInterval(() => newCard(), 5000);
