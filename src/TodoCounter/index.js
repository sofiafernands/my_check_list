import React, {useContext} from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";


function TodoCounter () {
 const  {completedTodos, totalTodos}  = useContext(TodoContext)
    return (
      <h1 className="TodoCounter">
     You have completed <span style={{color:'green'}}> {completedTodos}  </span > of <span style={{color:'red'}}> {totalTodos}  </span> Task
     </h1> 
    );
  }

  export {TodoCounter};