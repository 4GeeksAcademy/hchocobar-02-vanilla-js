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
  
  students.map((element, index) => console.log(
    'Apellido: ', element.lastname,
    'edad: ', element.age)
  )

  console.log(students);
  // console.log(students[0].name, students[1].name, students[2].name)
};
