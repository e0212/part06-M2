// importo el modulo redux
const redux = require('redux');


// traigo el metodo createStore del modulo de redux
const createStore = redux.createStore;


// crea constantes con los types de las acciones
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO';


// define un estado inicial
const initialState = {
  todos: [] // [{text: aa, completed: false}, {} ] ver filter de abajo (e, i)
}


// reducer
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((text, i) => i !== action.payload) // un nuevo array filtrado []
      }
    default:
      return state;
  }
}

// crea el store
const store = createStore(rootReducer); // recibe el reducer

store.subscribe(() => { // subscribe es un metodo que se invoca cada vez que se dispacha una accion
  console.log('Subscription: ', store.getState());
});

// action creator
function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text  // "repasar redux"
  }
}

//action creator
function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index // el payload es info extra
  }
}

store.dispatch(addTodo('Comprar pan'))// le pasa la action creator addTodo

store.dispatch(addTodo('Correr'))

store.dispatch(removeTodo(1)) // elimina indice del array 1

console.log(store.getState());