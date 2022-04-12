import React from "react";
// import patito from '../TodoCounter'  funcionaria ponerle cualquier nombre... y esto invita a errores
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem} from './TodoItem'
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  // !!todo quiere decir que es lo opuesto a falso
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });


  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    //  esta es otra forma de hacerlo
    // todos(todoIndex) = {    
    //   text: todos[todoIndex].text,  
    //   completed: true,
    // }

    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    // react interpreta las llaves vacias como un Fragment  <>
    // fragment es un componente y los componentes en react empiezan con mayuscula por convencion
    //.fragment se usa porque react necesita que este todo dentro de una sola etiqueta...se usa para evitar el uso de la etiqueta div, que afectaria el css de nuestra apliclacion
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {/* recivimos el texto de TodoItem */}
      <TodoList />
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
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
