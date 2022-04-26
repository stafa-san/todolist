import * as React from 'react';
import { Todo } from '../models/TodoModel';
import Todos from './Todos';

interface ITodoListProps {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({todos, setTodos}) => {
    const handleDelete = (id: string) => {
        console.log("ID of note to be deleted", id);
        setTodos(todos.filter(todo => todo.id !== id));
    }
    
    const renderTodos = () => {
        return todos.map(todo => {
            return <Todos key={todo.id} todo={todo} handleDelete={handleDelete}/>
        })
    }
  return (
      <>
        <h3>Todo List</h3>
        {renderTodos()}
      </>
  );
};

export default TodoList;
