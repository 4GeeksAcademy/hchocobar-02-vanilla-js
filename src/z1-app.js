/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  // Write your code here
  const COHORTE = 'Spain 77'
  let number = 9
  let nada
  
  let person1 = {
    name: 'Joe',
    lastname: 'Flores',
    age: 35,
    sports: ['soccer', 'tennis']
  }  
  
  let person2 = {
    name: 'Jane',
    lastname: 'Solines',
    age: 30,
    sports: ['running', 'paddle', 'swimming']
  }
  
  let person3 = {
    name: 'Jimmy',
    lastname: 'Ovalle',
    age: 12,
    sports: ['rugby', 'voleyball', 'beisball', 'basquetball']
  }
  
  let family = [person1, person2, person3]

  // Recorrer el array con método .map()
  // console.log(family.map((item, index) => item.name + ' ' + item.lastname))
 
  // Definir una variabel donde voy a acumular las <li>
  let myList = ''
  family.map((item, index) => {
    myList += '<li class="list-group-item">' + item.name + ' ' + item.lastname + ' </li>'
    console.log(myList);
  })

  // Renderizar
  let myTag = document.querySelector('#list-persons')
  myTag.innerHTML = myList

};
