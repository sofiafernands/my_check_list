import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError  } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import  TodoTask  from './TodoTask.png'
import './TodoTask.css'
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';



// completeTodo, totalTodos, searchValue, setSearchValue, searchedTodos, completedTodos, deleteTodo, error, loading 

function AppUI ( ) {
  const {
    completeTodo, 
    searchedTodos, 
    deleteTodo, 
    error,
    loading
  } = useContext (TodoContext)

    return(
    <>
    <div className='row d-flex'>    

       <div className='col-sm-6'>
         <img src={ TodoTask } className='ImgTodoTask' />
       </div>

      <div className='col-sm-6'>
        <TodoCounter  />
        <TodoSearch />
        <TodoList>
          {loading &&  <TodosLoading />}
          {error && <TodosError />}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos /> }
  
          {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
        </TodoList >
      <CreateTodoButton />
      </div>
      <div/>
      </div>

    </>
    )
}

export { AppUI };