/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  let palos = ['♦', '♥', '♠',  '♣']
	let numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  
	let indexPalos = Math.floor(Math.random() * palos.length)
	let indexNumeros = Math.floor(Math.random() * numeros.length)
	
	// expresión
	//                                   condición    ?   'por verdadero'  :   'por falso' 
	// let clasePalos = palos[indexPalos] == '♦' || palos[indexPalos] == '♥' ? ' text-danger' : ' text-dark'

	// secuencia de instrucciones
	let clasePalos = ''
	if (palos[indexPalos] == '♦' || palos[indexPalos] == '♥') {
		clasePalos = ' text-danger'
	} else {
		clasePalos = ' text-dark'
	}

	// Capturamos el elemento	
	document.querySelector('#up').innerHTML = palos[indexPalos];
	document.querySelector('#numbers').innerHTML = numeros[indexNumeros];
	document.querySelector('#down').innerHTML = palos[indexPalos];

	document.querySelector('#up').className += clasePalos;
	document.querySelector('#numbers').className += clasePalos;
	document.querySelector('#down').className += clasePalos;
};
