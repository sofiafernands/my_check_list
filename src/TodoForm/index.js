import react, {useContext, useState} from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext"
import { event } from "jquery";

export function TodoForm () {
    const {
        setOpenModal,
        addNewTodo,
    } = useContext(TodoContext);

    const [newTodo, setNewTodo] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        addNewTodo(newTodo);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div className="FormContainer">
            
        <form onSubmit={onSubmit}>
            <label>Add new note</label>
            <textarea
            value={newTodo}
            onChange={onChange}
            placeholder="write a note">
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                onClick={onCancel}
                className="TodoForm-button--cancel">Cancel</button>
                <button 
                type="submit"
                className="TodoForm-button--add" >Add</button>  
            </div>
        </form>
        </div>
    )
}