import React from "react";
import { useTodos } from "./useTodos";
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
import { ChangeAlert } from "../ChangeAlert";


function App() {
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
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return(
    // react interpreta las llaves vacias como un Fragment  <>
  // fragment es un componente y los componentes en react empiezan con mayuscula por convencion
  //.fragment se usa porque react necesita que este todo dentro de una sola etiqueta...se usa para evitar el uso de la etiqueta div, que afectaria el css de nuestra aplicacion
  <React.Fragment>
    <TodoHeader loading={loading}>
      <TodoCounter 
        totalTodos={totalTodos} 
        completedTodos={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
    </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError = {() => <TodosError />}
        onLoading = {() => new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
        onEmptyTodos = {() => <EmptyTodos />}
        onEmptySearchResults = {(searchText) => <p>No hay resultados para {searchText}</p>}
        // render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //     />
        // )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        )}
      </TodoList>
      {/* key esto es para que react pueda identificar cual componente es cual dentro de una lista y asi nos evite renders innecesarios cunado un elemento no debe cambiar
      es un id unico para cada componente */}

      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

    <CreateTodoButton 
      setOpenModal={setOpenModal}
    />
    <ChangeAlert 
      sincronize={sincronizeTodos}
    />
    {/* <button>+</button> */}
  </React.Fragment>

  );
}

export default App;
