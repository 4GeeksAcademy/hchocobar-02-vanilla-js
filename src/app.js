/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Wwrite your code here
  let person1 = {
    name: "Cristian",
    lastname: "Chacón",
    age: 21,
    isActive: true,
    sports: ['futbol', 'tenis', 'basket'],
    address: {
      city: 'Barcelona',
      country: 'Spain',
      street: 'Bestiar'
    }
  };
  let person2 = {
    name: "Natalia",
    lastname: "Manzano",
    age: 33,
    isActive: true,
    sports: ['skate', 'rugby', 'baile'],
    address: {
      city: 'Alcorcón',
      country: 'Spain',
      street: 'Ghandi'
    }
  };
  let person3 = {
    name: "Martin",
    lastname: "Martos",
    age: 23,
    isActive: true,
    sports: ['futbol', 'basket', 'paddle'],
    address: {
      city: 'Jain',
      country: 'Spain',
      street: 'Ejido'
    }
  };
  
  const students = [person1, person2, person3]

  /* Capturar el elemento HTML */
  const tag = document.querySelector('#list-students')
  console.log(tag.innerHTML)

  /* Crear una variable para asignar el html generado desd JS */
  let liHTML = ''
  students.map((iterator, index) => {
    console.log(iterator.name);
    liHTML += `
      <li class="list-group-item d-flex justify-content-between">
        ${iterator.name} ${iterator.lastname} tiene ${iterator.age} años
        <span class="text-danger"><i class="fas fa-edit"></i></span>
      </li>`
    console.log(liHTML)

  })

  
  tag.innerHTML = liHTML;
};

// liHTML += '<li class="list-group-item">' + iterator.name + ' ' + iterator.lastname + ' tiene ' + iterator.age + ' años</li>'
// liHTML += `<li class="list-group-item">${iterator.name} ${iterator.lastname} tiene ${iterator.age} años</li>`