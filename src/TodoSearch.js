import React from "react";
import "./TodoSearch.css"


function TodoSearch({
  searchValue, setSearchValue
}) {
 
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