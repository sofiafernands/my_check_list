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
import './AppUI.css'

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
    <div className='AppUI d-flex flex-column align-items-center'>
      <TodoCounter />
      <div className='col-sm-9' style={{ maxHeight: '500px', maxWidth: '800px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TodoSearch />
        </div>

        <TodoList style={{ flexGrow: 1 }}>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}
          <CreateTodoButton setOpenModal={setOpenModal} />
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}

        </TodoList>


        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
    </div>
  );
}

export { AppUI };
