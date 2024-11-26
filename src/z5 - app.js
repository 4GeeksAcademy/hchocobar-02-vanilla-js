/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Sintaxis del operador ternario (condicional)
// condición ? expr1 : expr2

window.onload = function () {
  // Write your code here
  let viewPassword = true;
  let isLoged = true;

  let loginHTML = `
    <h2 class="text-primary">${isLoged ? 'Dashboard' : 'Login'}</h2>

    <div class=${isLoged ? 'd-none' : ''}>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Email</span>
        <input type="email" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      
      <div class="input-group mb-3">
        <input type=${viewPassword ? "text" : 'password'} class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">
          ${viewPassword ? 
            '<i class="fas fa-eye-slash text-danger"></i>'
            : 
            '<i class="fas fa-eye text-primary"></i>'
          }
        </span>
      </div>
    </div>

    <button type="button" class="btn btn-primary">
      ${isLoged ? 'Logout' : 'Login'}
    </button>

    <div class=${isLoged ? "row row-cols-1 row-cols-md-3 mb-3 text-center" : 'd-none'}>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>

    <h2 class=${isLoged ? "display-6 text-center mb-4" : 'd-none'}>Compare plans</h2>

    <div class=${isLoged ? "table-responsive" : 'd-none'}>
    
      <table class="table text-center">
        <thead>
          <tr>
            <th style="width: 34%;"></th>
            <th style="width: 22%;">Free</th>
            <th style="width: 22%;">Pro</th>
            <th style="width: 22%;">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-start">Public</th>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Private</th>
            <td></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row" class="text-start">Permissions</th>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Sharing</th>
            <td></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Unlimited members</th>
            <td></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Extra security</th>
            <td></td>
            <td></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
  
  // Capturo los elementos html
  document.querySelector('#login').innerHTML = loginHTML;


};

