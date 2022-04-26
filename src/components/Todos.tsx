import * as React from 'react';
import { Todo } from '../models/TodoModel';
import Button from '@mui/material/Button';

interface ITodosProps {
    todo: Todo,
    handleDelete: (id: string) => void,
}

const Todos: React.FunctionComponent<ITodosProps> = ({todo, handleDelete}) => {
  return (
      <>        
        <div style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', padding: '0px 15px', width: '80%', height: '70px', border: '1px solid red', margin: '10px auto', borderRadius: '10px'}}>
            <div style={{display: 'flex', padding: '0px 15px', color: '#fff', alignItems: 'center', fontSize: '10px', borderRadius: '25px', height: '30px', backgroundColor: todo.color}}>It's {todo.date} O'clock</div>
            <div><p style={{fontSize: '10px', fontWeight: '500'}}>Goal</p>{todo.title}</div>
            <div><p style={{fontSize: '10px', fontWeight: '500'}}>Description</p>{todo.text}</div>
            <div>
              <Button variant="contained" color="error" onClick={() => handleDelete(todo.id)}>Delete</Button> 
            </div>
        </div>
      </>
  );
};

export default Todos;
