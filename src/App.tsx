import React, { useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import { Todo } from './models/TodoModel';

function App() {  

  const [todos, setTodos] = useState<Todo[]>([{
    id: (new Date).toString(),
    title: "Goals",
    text: "These are things we want to achieve",
    color: "#115293",
    date: (new Date).toString()
  }]);

  return (
    <div className="App">
      <div>
        <CreateTodo todos={todos} setTodos={setTodos} />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
