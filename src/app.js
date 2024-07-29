/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  const send = () => {
    console.log('enviando');
  }
  const rockStars = [
    {
      "name": "Jhon",
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "name": "Ringo",
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "name": "George",
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "name": "George",
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "name": "Jhon",
      "id": 5,
      "title": "laboriosam mollitia et enim quasi",
      "completed": false
    },
    {
      "name": "Paul",
      "id": 6,
      "title": "qui ullam ratione quibusdam",
      "completed": false
    },
    {
      "name": "Ringo",
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "name": "Paul",
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "name": "Jhon",
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "name": "George",
      "id": 10,
      "title": "illo est ratione doloremque quia",
      "completed": true
    },
  ];

  // Defino una variable para acumular cada iteracion del array
  let listHTML = ''
  // Renderizar todos elementos de la rockStars, cada uno en un li
  // Sintaxis: condición ? expr1xVerdadero : expr2xFalso
  rockStars.map((item) => {
    listHTML += `
      <li key=${item.id} class="list-group-item d-flex justify-content-between">
        <div>${item.name} - ${item.title}</div>
        <div>
          ${item.completed ? `
              <span class="mx-1"><i class="far fa-check-circle text-success"></i></span>
            ` : `
              <span class="mx-1"><i class="far fa-times-circle text-danger"></i></span>
            `}
          <span class="mx-1"><i class="fas fa-trash-alt text-danger"></i></span>
        </div>
      </li>
    `
  })

  // Rendizar la lista en el html
  // 1. Capturar el elemento html
  // 2. Cambiar el contenido (innnerHTML)
  const listStart = document.querySelector('#artist')
  listStart.innerHTML = listHTML;

  // console.log(rockStars);
};
