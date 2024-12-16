/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  /* Generador de Excusas */
  // inicializo la variable que mostraré en la excusa
  let myExcuse = '';
  // Arrays con las partes de las escusas
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  // Generamos indices aleatorios
  let indexWho = Math.floor(Math.random() * who.length)
  let indexAction = Math.floor(Math.random() * action.length)
  let indexWhat = Math.floor(Math.random() * what.length)
  let indexWhen = Math.floor(Math.random() * when.length)
  // Genero el texto de la excusa
  myExcuse = `${who[indexWho]} ${action[indexAction]} ${what[indexWhat]} ${when[indexWhen]}`
  // Capturar el div excuse
  document.querySelector('#excuse').innerHTML = myExcuse;



  /* Generador de Dominios */
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  // for loop
  let listForLoop = ''
  for (let index = 0; index < pronoun.length; index++) {
    for (let indexAdj = 0; indexAdj < adj.length; indexAdj++) {
      for (let indexNoun = 0; indexNoun < noun.length; indexNoun++) {
        listForLoop += `
          <li class="list-group-item">
            ${pronoun[index]}${adj[indexAdj]}${noun[indexNoun]}
          </li>`
      }
    }
  }

  // for in -> devuelve el indice
  let listForIn = '';
  for (const keyPronoun in pronoun) {
    for (const keyAdj in adj) {
      for (const keyNoun in noun) {
        listForIn += `
          <li class="list-group-item">
            ${pronoun[keyPronoun]}${adj[keyAdj]}${noun[keyNoun]}.com
          </li>
        `
      }
    }
  }


  // for of -> devuelve el valor
  let listForOf = '';
  for (const elementPronoun of pronoun) {
    for (const elementAdj of adj) {
      for (const elementNoun of noun) {
        listForOf += `
          <li class="list-group-item">
            ${elementPronoun}${elementAdj}${elementNoun}.es
          </li>
          `
      }
    }
  }


  // mapeamos: método .map() de los arrays
  let listMap = '';
  pronoun.map((itemPronoun) => {
    let domain = '.net'
    adj.map((itemAdj) => {
      noun.map((itemNoun) => {
        listMap += `
         <li class="list-group-item">
           ${itemPronoun}${itemAdj}${itemNoun}${domain}
         </li>
        `
      })
    })
  })

  // capturamos los div
  document.querySelector('#for-loop').innerHTML = listForLoop;
  document.querySelector('#for-in').innerHTML = listForIn;
  document.querySelector('#for-of').innerHTML = listForOf;
  document.querySelector('#map').innerHTML = listMap
};
