//import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const defaultTodos = [
  {text: "Llevar al perro al veterinario" , completed : true},
  {text: " Ir al supermercado ", completed : false},
  {text: " Secar la ropa ", completed : false}, 
  {text: " Tirar la basura " , completed : false},

]

function App() {
  return (
    <div>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => ( 
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}  />
        ))}
      </TodoList >
      <CreateTodoButton />
      < Footer />

    </div>

  );
}



export default App;
