import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";



const TodoContext = React.createContext();

function TodoProvider ({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        error,
        loading
    } = useLocalStorage('TODOSVERSION1', []);
    const [searchValue, setSearchValue] = useState(''); 
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const [openModal, setOpenModal] = useState(false); 


    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });

    const completeTodo = (text) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
            (todo) => todo.text === text
        );
        newItem[todoIndex].completed = true;
        saveTodos(newItem);
    };

    //usamos el metodo splice para borrar con su index
    const deleteTodo = (text) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
            (todo) => todo.text === text)
        newItem.splice(todoIndex, 1);
        saveTodos(newItem)
    };
    return (
    <TodoContext.Provider 
    value={{completeTodo, 
    totalTodos, 
    searchValue, 
    setSearchValue, 
    searchedTodos, 
    completedTodos,
    deleteTodo, 
    error,
    loading,
    openModal, 
    setOpenModal
    }}>
        {children}
    </TodoContext.Provider>
)
}




export { TodoContext, TodoProvider };