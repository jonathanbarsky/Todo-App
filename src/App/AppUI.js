import React from 'react';
// import patito from '../TodoCounter'  funcionaria ponerle cualquier nombre... y esto invita a errores

import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem'
import {CreateTodoButton} from '../CreateTodoButton';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
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

export { AppUI };

//export nombrado...es mas seguro porque obliga a poner el nombre correcto