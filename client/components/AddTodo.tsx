import React, { FormEvent, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addTaskAndFetch } from '../slices/tasksSlice';

function AddTodo() {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState({
    name: '',
    priority: '',
    completed: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(addTaskAndFetch(todo));
    setTodo({
      name: '',
      priority: '',
      completed: '',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task name"
        value={todo.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="priority"
        placeholder="Task priority"
        value={todo.priority}
        onChange={handleChange}
      />
      <input
        type="text"
        name="completed"
        placeholder="Task completed"
        value={todo.completed}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodo;
