/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let students = [
  {
    name: 'Jane',
    id: 10,
    age: 35,
    lastname: 'Doe',
    sports: ['futbol', 'running', 'atletismo']
  },
  {
    name: 'Antonia',
    id: 11,
    age: 27,
    lastname: 'Alvarez',
    sports: ['tennis', 'baloncesto', 'voleyball', 'natación']
  },
  {
    name: 'Carolina',
    id: 12,
    age: 10,
    lastname: 'Arias',
    sports: ['rugby', 'besisball']
  },
  {
    name: 'Betty',
    id: 13,
    age: 8,
    lastname: 'Arevalo',
    sports: ['hockey', 'voleyball']
  }
  ];
  

  let cardHTML = ``

  students.map((item) => {
    cardHTML += `
      <div key=${item.id} class="col">
        <div class="card ${item.id % 2 == 0 ? 'alert-warning' : 'alert-primary'}">
          <img src="https://randomuser.me/api/portraits/women/${item.id}.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name} ${item.lastname}</h5>
            <ul class="list-group">
              ${item.sports.map((sport, index) => 
                `<li key=${index} class="list-group-item">${sport}</li>`
              ).join('')}
            </ul>
            <a href="#" class="btn mt-2  ${item.id % 2 == 0 ? 'btn-warning' : 'btn-primary'}">Go somewhere</a>
          </div>
        </div>
      </div>
    `
  })



  document.querySelector('#students').innerHTML = cardHTML

};

