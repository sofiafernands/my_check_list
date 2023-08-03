import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

    <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoList >

    {/* <CreateTodoButton /> */}


      
    </div>
  );
}


function TodoItem () {
  return (
<li>
  <span>V</span>
  <p>Llorando con la llorona</p>
  <span>X</span>
</li>
  );
}

export default App;
