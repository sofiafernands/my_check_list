import React, { useContext } from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <div className="container d-flex  justify-content-center">
      <h1 className="TodoCounter">
        You have completed <span style={{ color: '#02B514' }}>{completedTodos}</span> of <span style={{ color: '#9C0908' }}>{totalTodos}</span> Task
      </h1>
    </div>
  );
}

export { TodoCounter };
