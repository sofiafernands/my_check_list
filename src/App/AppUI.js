import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { useContext } from 'react';
import { TodoForm } from '../TodoForm';
import WomanImage from './woman.png';

function AppUI() {
  const {
    completeTodo,
    searchedTodos,
    deleteTodo,
    error,
    loading,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <div className='d-flex flex-column'>
      <div className='col-sm-9'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TodoSearch />
          <img src={WomanImage} alt="Imagen de mujer" style={{ width: '200px', height: '200px', marginLeft: '10px' }} />
        </div>
        
        <TodoCounter />
        
        <TodoList style={{ flexGrow: 1 }}>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
        <CreateTodoButton setOpenModal={setOpenModal} />
        
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
      <div />
    </div>
  );
}

export { AppUI };
