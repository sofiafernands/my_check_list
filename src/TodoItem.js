import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <div className="TodoItem-icons">
        <span className="Icon Icon-check Icon-check--active">V</span>
      </div>
      <p className="TodoItem-p TodoItem-p--complete">{props.text}</p>
      <button className="Icon Icon-delete">X</button>
    </li>
  );
}

export { TodoItem }
