/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let condicion = false;
  let inputHTML = `
    <span class="input-group-text">Password</span>
      <input type=${condicion ? "password" : 'text'} class="form-control" aria-label="Amount (to the nearest dollar)">
      <span class="input-group-text">
        ${condicion ? 
          '<i class="far fa-eye text-primary"></i>' 
        : 
          '<i class="far fa-eye-slash text-success"></i>'
        }
    </span>
  `

  let loginHTML = `
    <form class="row g-3">
      <div class="col-auto ${condicion ? 'text-primary' : 'text-danger'}">
        <p>${!condicion ? 'Estoy logueado' : 'No estoy logueado'}</p>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">${condicion ? 'Login' : 'Logout'}</button>
      </div>
    </form>
  `

  let homeHTML = `
  ${ condicion ?
    `
    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
      <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>
    `
    :
    `
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `

  }
  `
  
  document.querySelector('#password').innerHTML = inputHTML;
  document.querySelector('#login').innerHTML = loginHTML;
  document.querySelector('#home').innerHTML = homeHTML;
};
