/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  /* Renderizado Condicional */
  // Sintaxis: condición ? expr1 : expr2
  let viewPassword = false;
  let isLogged = false;

  let menu = `
    <button class="btn btn-outline-${ isLogged ? "secondary" : "success"}">
      ${isLogged ? 'Logout' : 'Login'}
    </button>
  `

  let dashboard = `
    <div class="alert alert-success mt-4 d-flex justify-content-around">
        Bienvenido a nuestra aplicación
    </div>
  `

  let formLogin = `
        <form class="col col-sm-8 col-md-6 col-lg-4 m-auto">
        <h2>Login</h2>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Email</span>
          <input type="email" class="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        
        <div class="input-group mb-3">
          <input type=${viewPassword ? "text" : 'password'} class="form-control" placeholder="Your password" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2">
            ${viewPassword ?
              '<i class="fas fa-eye-slash text-danger"></i>'
              :
              '<i class="fas fa-eye text-primary"></i>'
            }
          </span>
        </div>
      </form>
    `

  // Capturamos los div
  document.querySelector('#btn-login').innerHTML = menu;
  document.querySelector('#dashboard').innerHTML = isLogged ? dashboard : '';
  document.querySelector('#login').innerHTML = isLogged ? '' : formLogin;
};
