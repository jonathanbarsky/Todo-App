import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/index';
// import patito from '../TodoCounter'  funcionaria ponerle cualquier nombre... y esto invita a errores
import './index.css';

function withWathever(){
  return function ComponenteDeVerdad(props){
    return <h2>Buenasss</h2>
  }
}

function App(props) {
  return ( 
    <h1>{props.saludo}, {props.nombre}</h1>
  )
}

function withSaludo(saludo){
  return function WrappedComponentWithSaludo(WrappedComponent){
    return function ComponenteDeVerdad(props){
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </React.Fragment>
      );
    }
  }
}

const AppWithSaludo = withSaludo('Wenasssss')(App);


ReactDOM.render(
    <AppWithSaludo nombre="Juanita"/>,
  document.getElementById('root')
);
