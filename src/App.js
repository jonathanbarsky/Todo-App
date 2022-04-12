import React from "react";
// import patito from '../TodoCounter'  funcionaria ponerle cualquier nombre... y esto invita a errores
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem} from './TodoItem'
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]

function App() {
  return (
    // react interpreta las llaves vacias como un Fragment  <>
    // fragment es un componente y los componentes en react empiezan con mayuscula por convencion
    //.fragment se usa porque react necesita que este todo dentro de una sola etiqueta...se usa para evitar el uso de la etiqueta div, que afectaria el css de nuestra apliclacion
    <React.Fragment>
      {<TodoCounter />}
      <TodoSearch />

      {/* recivimos el texto de TodoItem */}
      <TodoList />
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
         ))}
      {/* key esto es para que react pueda identificar cual componente es cual dentro de una lista y asi nos evite renders innecesarios cunado un elemento no debe cambiar
      es un id unico para cada componente*/}


      <CreateTodoButton />
      {/* <button>+</button> */}
    </React.Fragment>
  );
}

export default App;
