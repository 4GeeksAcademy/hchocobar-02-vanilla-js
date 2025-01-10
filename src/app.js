/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () { 
  let students = {
    register: 4,
    data: [
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
]};

console.log(students.data);

let htmlStudents = ''
students.data.map((iterator) => {
  console.log(iterator.name);
  htmlStudents += `
    <div class="card">
      <img 
        src="https://randomuser.me/api/portraits/women/${iterator.id}.jpg"
        class="card-img-top" alt=${iterator.name}
      >
      <div class="card-body">
        <h5 class="card-title">${iterator.name} ${iterator.lastname}</h5>
        <p class="card-text">${iterator.role}</p>
        <ul class="list-group">
          ${iterator.sports.map((sport) => 
            `<li class="list-group-item">${sport}</li>`
          ).join('')}
        </ul>
      </div>
    </div>
  `
  });

  document.querySelector('#students').innerHTML = htmlStudents;

};
