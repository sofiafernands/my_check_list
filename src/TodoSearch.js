import React, { useState } from "react";
import "./TodoSearch.css"


function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  
    return (
      <input 
      className="search"
      placeholder="Agregar / Buscar Tarea"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}>
        
      </input>
    );
  }

  export {TodoSearch};