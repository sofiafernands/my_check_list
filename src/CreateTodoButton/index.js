//import React from 'react';
import "./CreatreTodoButton.css"

function CreateTodoButton({ setOpenModal }) {
return (
    <>    
    <div className="buttonAdd">
    <button className="CreateTodoButton"
    onClick={() => {
        setOpenModal(state => !state)
    }}>
        +
    </button>
    </div>
    </>)

}

export { CreateTodoButton };
