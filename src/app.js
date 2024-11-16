/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Write your code here
  // Defino los arrays
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  // inicializo las variambles que acumularan para el innerHTML
  let textMap = ''
  let textForLoop = ''
  let textForIn = '<h3 class="text-info">For in</h3>'
  let textForOf = ''

  /* Metodo map */
  pronoun.map((itemI) => {
    adj.map((itemJ) => {
      noun.map((itemL) => {
        textMap += `<li class="list-group-item">${itemI}${itemJ}${itemL}</li>`
      })
    })
  })

  /* For loop común */
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let l = 0; l < noun.length; l++) {
        textForLoop += `
          <li class="list-group-item">
            ${pronoun[i]}${adj[j]}${noun[l]}
          </li>`
      }
    }
  }

  /* For in */
  textForIn += '<ul>'
  for (const keyI in pronoun) {
    for (const keyJ in adj) {
      for (const keyL in noun) {
        textForIn += `
          <li class="list-group-item">
            ${pronoun[keyI]}${adj[keyJ]}${noun[keyL]}
          </li>`
      }
    }
  }
  textForIn += '</ul>'

  /* For of */
  for (const elementI of pronoun) {
    for (const elementJ of adj) {
      for (const elementL of noun) {
        textForOf += `
          <li class="list-group-item">
            ${elementI}${elementJ}${elementL}
          </li>`
      }
    }
  }

  

  // Capturo los elementos html
  document.querySelector('#map').innerHTML = textMap;
  document.querySelector('#for-loop').innerHTML = textForLoop;
  const tag = document.querySelector('#for-in')
  tag.innerHTML = textForIn;
  document.querySelector('#for-of').innerHTML = textForOf;


};

