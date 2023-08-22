//import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const defaultTodos = [
  {text: "Llevar al perro al veterinario" , completed : true},
  {text: " Ir al supermercado ", completed : true},
  {text: " Secar la ropa ", completed : false}, 
  {text: " Tirar la basura " , completed : false},

]

function App() {
  const [todos, setTodos ] = useState (defaultTodos);
  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length; 
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
    return todo.text.includes(searchValue)
  }
  )



  console.log('Los usuarios estan buscand todos de ' + searchValue)
  
  return (
    <div>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue ={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => ( 
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}  />
        ))}
      </TodoList >
      <CreateTodoButton />
      < Footer />

    </div>

  );
}



export default App;
