//import React from 'react';
import "./CreatreTodoButton.css"

function CreateTodoButton({ setOpenModal }) {
return (
        
    <button className="CreateTodoButton"
    onClick={() => {
        setOpenModal(state => !state)
    }}>
        ➕
    </button>
    )

}

export { CreateTodoButton };
