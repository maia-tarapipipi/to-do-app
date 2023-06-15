import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchTodos } from '../slices/tasksSlice';
// import { Task } from '../../models/tasks';

function List() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.tasks);
  console.log("List todos:", todos)
  
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

 return (
  <div>
    <h1>Test List Heading</h1>
    {todos.map((todo) => (
      <div key={todo.id}>
        <h5>Name: {todo.name}</h5>
        <p>Priority: {todo.priority}</p>
        <p>Completed: {todo.completed}</p>
      </div>
    ))}
  </div>
);
}

export default List;
