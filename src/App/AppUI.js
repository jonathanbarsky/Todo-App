import React from 'react';
// import patito from '../TodoCounter'  funcionaria ponerle cualquier nombre... y esto invita a errores
import {TodoContext} from '../TodoContext';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {TodoForm} from '../TodoForm';
import {CreateTodoButton} from '../CreateTodoButton';
import { Modal } from '../Modal';
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';
import { TodoHeader } from '../TodoHeader';

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal, 
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
  } = React.useContext(TodoContext)

    return(
        // react interpreta las llaves vacias como un Fragment  <>
    // fragment es un componente y los componentes en react empiezan con mayuscula por convencion
    //.fragment se usa porque react necesita que este todo dentro de una sola etiqueta...se usa para evitar el uso de la etiqueta div, que afectaria el css de nuestra aplicacion
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      {/* // recivimos el texto de TodoItem  */}
          <TodoList>
          {error && <TodosError error={error} />}
          {loading && new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
          {(!loading && !searchedTodos.length) && <EmptyTodos />}

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
        es un id unico para cada componente */}
        </TodoList> 

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
      {/* <button>+</button> */}
    </React.Fragment>

    );
}

export { AppUI };

//export nombrado...es mas seguro porque obliga a poner el nombre correcto