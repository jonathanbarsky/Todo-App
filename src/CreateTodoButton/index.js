import React from "react";
import './createTodoButton.css'

function CreateTodoButton (props) {

    const onClickButton = (msg) => {
        alert(msg)
    }

    return (
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Aqui se deberian abrir el modal')}
        >
            +
        </button>
    );
}

export {CreateTodoButton};

// onClick hace que reaccione a un click sobre el elemento en el que estoy