/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  /* Generador de Excusas */
  // Inicializo la variable que mostraré en la excusa
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
  document.querySelector('#excuse').innerHTML = myExcuse;0


  /* Generador de Dominios */
  let pronoun = ['the', 'our'];
  let adjective = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  // for loop
  let listForLoop = ''
  for (let index = 0; index < pronoun.length; index++) {
    for (let indexAdjective = 0; indexAdjective < adjective.length; indexAdjective++) {
      for (let indexNoun = 0; indexNoun < noun.length; indexNoun++) {
        listForLoop += `
          <li class="list-group-item">
            ${pronoun[index]}${adjective[indexAdjective]}${noun[indexNoun]}
          </li>`
      }
    }
  }
  // for in -> devuelve el indice
  let listForIn = '';
  for (const keyPronoun in pronoun) {
    for (const keyAdjective in adjective) {
      for (const keyNoun in noun) {
        listForIn += `
          <li class="list-group-item">
            ${pronoun[keyPronoun]}${adjective[keyAdjective]}${noun[keyNoun]}.com
          </li>
        `
      }
    }
  }
  // for of -> devuelve el valor
  let listForOf = '';
  for (const elementPronoun of pronoun) {
    for (const elemetAdjective of adjective) {
      for (const elementNoun of noun) {
        listForOf += `
          <li class="list-group-item">
            ${elementPronoun}${elemetAdjective}${elementNoun}.es
          </li>
          `
      }
    }
  }

  // Mapeamos: método .map() de los arrays
  let listMap = '';
  pronoun.map((itemPronoun) => {
    let domain = '.net'
    adjective.map((itemAdj) => {
      noun.map((itemNoun) => {
        listMap += `
         <li class="list-group-item">
           ${itemPronoun}${itemAdj}${itemNoun}${domain}
         </li>
        `
      })
    })
  })

  // Capturamos los div
  document.querySelector('#for-loop').innerHTML = listForLoop;
  document.querySelector('#for-in').innerHTML = listForIn;
  document.querySelector('#for-of').innerHTML = listForOf;
  document.querySelector('#map').innerHTML = listMap
};
