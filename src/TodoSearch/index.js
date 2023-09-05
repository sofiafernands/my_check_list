import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch () {
  const  {searchValue, setSearchValue}  = useContext(TodoContext)

  return (
    <div className="container">
      <input
        className="search"
        placeholder="Add / search"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
