import React from "react";
import "./TodoSearch.css";
import date from "./date.png";

function TodoSearch({ searchValue, setSearchValue }) {
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

      <img src={date} style={{ width: '90px', height: '90px' }} alt="Date" />
    </div>
  );
}

export { TodoSearch };
