const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, impar,asincrona } = require('./actions');


// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador); // deprecado

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:

  var c = store.getState().contador; // estado inicial en 0 = - var c = cero

  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
 valor.innerText = c // contenido del span a medida que clickeamos desde 0 en adelante 
}

// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(()=> renderContador());

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
var btnIncrement= document.getElementById("incremento");
btnIncrement.onclick = function(e){
  return store.dispatch(incremento());
}

var btnDecrement= document.getElementById("decremento");
btnDecrement.onclick = function(e){
  return store.dispatch(decremento());
}

var btnImpar = document.getElementById("incrementoImpar");
btnImpar.onclick = function(e){
  return store.dispatch(impar())
}

var btnAsync = document.getElementById("incrementoAsync");
btnAsync.onclick = function(e){
  setTimeout(() => {store.dispatch(asincrona())}, 1000)
}