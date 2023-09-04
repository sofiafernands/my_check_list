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






function AppUI ( { completeTodo, totalTodos, searchValue, setSearchValue, searchedTodos, completedTodos, deleteTodo, error, loading } ) {
    return(
    <>
    <div className='row d-flex'>    

       <div className='col-sm-6'>
         <img src={ TodoTask } className='ImgTodoTask' />
       </div>

      <div className='col-sm-6'>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
      />

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
        ))};
        </TodoList >
        <CreateTodoButton />
      </div>
      <div/>
      </div>



    </>
    )
}

export { AppUI };