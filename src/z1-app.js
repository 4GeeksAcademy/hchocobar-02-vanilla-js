/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  // Write your code here
  console.log('Spain-93')

  // numeros
  let number = 10

  // string
  let text = "Hola mundo"
  let word = 'hola'
  let paragraph = `Hola Mundo 
  estoy muy contetno de JS`

  // booleanos
  let isActive = true

  // arrays conjunto ordenado de elementos
  let myArray = [1, 2, 3, 10, 15, 45, 24]

  // objeto conjunto de pares clave/valor
  let person1 = {
    name: 'Fernando', 
    lastname: "Sarotorius", 
    age: 30, 
    city: 'Madrid',
    sports: ['waterpolo', 'hipica', 'rugby']
  }
  let person2 = {
    name: 'Jorge', 
    lastname: "Vila", 
    age: 35, 
    city: 'Cadiz',
    sports: ['paddle', 'futbol']
  }
  let person3 = {
    name: 'Pedro José', 
    lastname: "Leiva", 
    age: 22, 
    city: 'Valencia',
    sports: ['basket', 'petanca', 'esgrima', 'escalada', 'running']
  }

  const students = [person1, person2, person3]

  let liStudent = ''
  students.map((item) => {
    // console.log(item.lastname, item.name);
    liStudent += '<li class="list-group-item">' + item.lastname + ' ' + item.name +  '</li>'
    console.log(liStudent);
  });

  // Capturar el elemento cuyo ID es "list"
  const element = document.querySelector('#list');
  element.innerHTML = liStudent




  // console.log(element);

  // console.log(myObject.city)
  // console.log(paragraph)

};
