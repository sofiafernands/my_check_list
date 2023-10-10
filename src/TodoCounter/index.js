import React, { useContext } from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
  <>
    <div className="titleTodo">
    <h1>Your Organization</h1>
    </div>
    <div className="container d-flex  justify-content-center">
      <h2 className="TodoCounter">
        You have completed <span style={{ color: 'rgb(0 29 255)' }}>{completedTodos}</span> of <span style={{ color: 'rgb(208 248 6)' }}>{totalTodos}</span> Task
      </h2>
    </div>
    </>
  );
}

export { TodoCounter };
