import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
        <button className={`Icon Icon-check ${props.completed && "icon-check--active"}`}
        onClick={props.onComplete}
        >V</button>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>{props.text}</p>
      <button className="Icon Icon-delete"><b>X</b></button>
    </li>
  );
}

export { TodoItem }
