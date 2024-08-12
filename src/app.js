/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let students = [
  {
    name: 'Jane',
    id: 75,
    age: 35,
    lastname: 'Doe',
    role: 'Technical Writer',
    sports: ['soccer', 'running', 'tennis', 'swimming']
  },
  {
    name: 'Antonia',
    id: 76,
    age: 27,
    lastname: 'Alvarez',
    role: 'Industrial Engineer',
    sports: ['tennis', 'voleyball', 'paddle']
  },
  {
    name: 'Victoria',
    id: 87,
    age: 10,
    lastname: 'Arias',
    role: 'Administrative Assistant',
    sports: ['climbing', 'skating', 'surfing']
  },
  {
    name: 'Betty',
    id: 88,
    age: 8,
    lastname: 'Arevalo',
    role: 'Data Science Teacher',
    sports: ['hockey', 'volleyball', 'athletics', 'soccer']
  },
  {
    name: 'Irene',
    id: 79,
    age: 8,
    lastname: 'García',
    role: 'Web Developer',
    sports: ['skiing', 'diving', 'golf']
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
            <p class="card-text">${item.role}</p>
            <ul class="list-group">
              <li class="list-group-item active">Sports</li>
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

