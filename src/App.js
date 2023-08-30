import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

//creamos nuestro propio HOOK (useLocalStorage)
function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  }
  else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  //con esta funcion hacemos la persistencia de datos(localStorage) y seteamos los todos(setItem)
  const saveItem = (newItem) => {
    localStorage.setItem('TODOSVERSION1', JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOSVERSION1', []);
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
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)()}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList >
      <CreateTodoButton />
      < Footer />

    </>

  );
}

export default App;
