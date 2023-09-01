import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';



// const defaultTodos = [
//   { text : 'Pasear al perro', completed : false},
//   { text : 'Comprar Alimentos', completed : true},
//   { text : 'Realizar tarea de programacion', completed : false},
//   { text : 'Estudiar React', completed : false}
// ]

// localStorage.setItem('TODOSVERSION1', JSON.stringify(defaultTodos))

//aqui tendremos unicamente los componentes que manejen los estados 

function App() {

  const {item : todos, saveItem : saveTodos, error, loading } = useLocalStorage('TODOSVERSION1', []);
  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

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

    <AppUI
    
    completeTodo = { completeTodo } 
    totalTodos = { totalTodos } 
    searchValue = { searchValue } 
    setSearchValue = { setSearchValue }
    searchedTodos = { searchedTodos }
    completedTodos = { completedTodos }
    deleteTodo = { deleteTodo } 
    loading={ loading }
    error={ error }
    />

  );
}

export default App;
