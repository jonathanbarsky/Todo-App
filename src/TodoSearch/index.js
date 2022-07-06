import React from "react";
import './TodoSearch.css'

function TodoSearch ({ searchValue, setSearchValue, loading }) {
    // React.useState es la forma en que podemosagregar estado a nuestros componentes cuando los creamos como funciones
    // const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return [
        <input 
        className="TodoSearch" 
        placeholder="Cebolla" 
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
        />
    ];
}

export {TodoSearch};

// onChange hace que escuchemos cada cambio en un elemento en el que estoy