import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchTodos } from '../slices/tasksSlice';
import { Task } from '../../models/tasks';

function List() {
  const dispatch = useAppDispatch();
  const todos: Task[] = useAppSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

 return (
  <div>
    {todos.map((todo: Task) => (
      <div key={todo.id}>
        <h5>{todo.name}</h5>
        <p>{todo.priority}</p>
        <p>{todo.completed}</p>
      </div>
    ))}
  </div>
);
}

export default List;
