import { ChangeEvent, FormEvent, useState } from 'react';
import { useAddTodo, useTodos, useDeleteTodo } from '../apis/api';

const initialState = {
  name: '',
  priority: '',
  completed: false,
};

function AddTodo() {
  const [todo, setTodo] = useState(initialState);
  const addTodoMutation = useAddTodo();
  const { refetch } = useTodos();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addTodoMutation.mutateAsync(todo);
      setTodo(initialState);
      refetch();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <form id="form" noValidate onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Task"
            value={todo.name}
            onChange={handleChange}
            style={{ marginBottom: '0.5rem', padding: '0.5rem' }}
          />
        </div>
        <div>
          <input
            type="text"
            name="priority"
            placeholder="Priority (High/Medium/Low)"
            value={todo.priority}
            onChange={handleChange}
            style={{ marginBottom: '0.5rem', padding: '0.5rem' }}
          />
        </div>
      </form>
      <div>
        <button
          type="submit"
          form="form"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: '0.25rem',
            cursor: 'pointer',
          }}
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default AddTodo