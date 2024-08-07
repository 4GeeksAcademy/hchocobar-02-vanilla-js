/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  // Excuse Generator
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke', 'look'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  // Generar los índices aleatorios para cada array
  let indexWho = Math.floor(Math.random() * who.length)
  let indexAction = Math.floor(Math.random() * action.length)
  let indexWhat = Math.floor(Math.random() * what.length)
  let indexWhen = Math.floor(Math.random() * when.length)
  
  // Con concatenación
  let textConcatenado = who[indexWho] + ' ' + action[indexAction] + ' ' + what[indexWhat] + ' ' + when[indexWhen]

  // Con template literal
  let textTemplateLiteral = `
    <div class="alert alert-success" role="alert">
      My excuse is: ${who[indexWho]} ${action[indexAction]} ${what[indexWhat]} ${when[indexWhen]}
    </div>
  `
  // Capturamos el div e insertamos el HTML
  document.querySelector('#excuse').innerHTML = textTemplateLiteral;

  /* Domain Name Generator */
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  // For loop
  let textForLoop = ''
  for (let index = 0; index < pronoun.length; index++) {
    for (let i = 0; i < adj.length; i++) {
      for (let j = 0; j < noun.length; j++) {
        textForLoop += `<li class="list-group-item">${pronoun[index]}${adj[i]}${noun[j]}.com</li>`
      }
    }
  }

  // For in (con el índice del elemento)
  let textForIn = ''
  for (const i in pronoun) {
    for (const j in adj) {
      for (const q in noun) {
        textForIn += `<li class="list-group-item">${pronoun[i]}${adj[j]}${noun[q]}.net</li>`
      }
    }
  }
      

  // For of (con el valor del elemento)
  let textForOf = ''
  for (const elementPronoun of pronoun) {
    for (const elementAdj of adj) {
      for (const elementNoun of noun) {
        textForOf += `
          <li class="list-group-item">
            ${elementPronoun}${elementAdj}${elementNoun}.es
          </li>`
      }
    }
  }

  // Método .map()
  let textForMap = ''
  pronoun.map((elementPronoun) => {
    adj.map((elementAdj) => {
      noun.map((elementNoun) => {
        textForMap += `
          <li class="list-group-item">
            ${elementPronoun}${elementAdj}${elementNoun}.io
          </li>
        ` 
      })
    })
  })


  // Capturo
  document.querySelector('#for-loop').innerHTML = textForLoop;
  document.querySelector('#for-in').innerHTML = textForIn;
  document.querySelector('#for-of').innerHTML = textForOf;
  document.querySelector('#for-map').innerHTML = textForMap;


};
