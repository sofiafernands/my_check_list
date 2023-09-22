import React from "react";
import './TodoForm.css'

export function TodoForm () {
    return (
        <div className="FormContainer">
            
        <form>
            <label>escribe tu nuevo todo</label>
            <textarea
            placeholder="cortar cebolla para el almuerzo">
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button--cancel">Cancelar</button>
                <button className="TodoForm-button--add" >Agregar</button>  
            </div>
        </form>
        </div>
    )
}