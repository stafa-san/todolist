import Button from '@mui/material/Button';
import * as React from 'react';
import { Todo } from '../models/TodoModel';

interface ICreateTodoProps {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const CreateTodo: React.FunctionComponent<ICreateTodoProps> = ({todos, setTodos}) => {
      const [error, setError] = React.useState<string>("");
      const titleRef = React.useRef<HTMLInputElement | null>(null);
      const textRef = React.useRef<HTMLInputElement | null>(null);
      const colorRef = React.useRef<HTMLInputElement | null>(null);

      const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError ("All fields are mandatory");  
        }
        setError("");
        setTodos([...todos, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLInputElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date().getHours() % 12).toString()
        }]);

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLInputElement).value = "";
    }


  return (
      <>
        <h1>Create Todo Item</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder='Enter your goal' ref={ titleRef } />
          <input type="text" placeholder='Enter your goal' ref={ textRef } />
          <input type="color" placeholder='Enter your goal' ref={ colorRef } />
          <Button type="submit" variant="contained" color="primary">Create</Button>
        </form>
      </>
  );
};

export default CreateTodo;
