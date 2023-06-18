import { ChangeEvent, FormEvent, useState } from 'react';
import { useAddTodo, useTodos } from '../apis/api';

const priorityColors: { [key: string]: string } = {
  High: '#FFB151',
  Medium: '#FFD89C',
  Low: '#A2CDB0',
};

const initialState = {
  name: '',
  priority: '',
  completed: false,
};

function AddTodo() {
  const [todo, setTodo] = useState(initialState);
  const [error, setError] = useState('');

  const addTodoMutation = useAddTodo();
  const { refetch } = useTodos();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePriority = (e: ChangeEvent<HTMLSelectElement>) => {
    setTodo({
      ...todo,
      priority: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (todo.name === '' || todo.priority === '') {
      setError('Please fill in all the fields.');
      return;
    }

    setError('');

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
            aria-label='Task'
            style={{ marginBottom: '0.5rem', padding: '0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <select
            name="priority"
            value={todo.priority}
            onChange={handleChangePriority}
            aria-label='Priority'
            style={{
              marginBottom: '0.5rem',
              padding: '0.5rem',
              backgroundColor: priorityColors[todo.priority],
              color: 'black',
            }}
          >
            <option value="">Select priority</option>
            <option value="High" style={{ backgroundColor: priorityColors.High }}>
              High
            </option>
            <option value="Medium" style={{ backgroundColor: priorityColors.Medium }}>
              Medium
            </option>
            <option value="Low" style={{ backgroundColor: priorityColors.Low }}>
              Low
            </option>
          </select>
          
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
      <div>
        <button
          type="submit"
          form="form"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#025464',
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

export default AddTodo;
