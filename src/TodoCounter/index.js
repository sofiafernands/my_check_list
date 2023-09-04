import React from "react";
import './TodoCounter.css';


function TodoCounter({ total, completed }) {
    return (
      <h1 className="TodoCounter">
     You have completed <span style={{color:'green'}}> {completed}  </span > of <span style={{color:'red'}}> {total}  </span> Task
     </h1> 
    );
  }

  export {TodoCounter};