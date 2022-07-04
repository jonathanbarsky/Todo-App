import React from "react";
import './createTodoButton.css'

function CreateTodoButton (props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};

// onClick hace que reaccione a un click sobre el elemento en el que estoy