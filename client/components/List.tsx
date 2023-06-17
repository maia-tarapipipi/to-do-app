import { useTodos, useDeleteTodo } from '../apis/api';

function TodoList() {
  const { data: todos = [], isLoading, isError, refetch } = useTodos();
  const deleteTodoMutation = useDeleteTodo();

  const handleComplete = async (id) => {
    try {
      await deleteTodoMutation.mutateAsync(id);
      refetch(); // Refetch todos after completing a task
    } catch (error) {
      // Handle error
    }
  };

  if (isLoading) {
    return <div>Loading todos...</div>;
  }

  if (isError) {
    return <div>Error fetching todos</div>;
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: '0.5rem',
              padding: '0.5rem',

               }}
          >
            <span>{todo.name}</span>
            <button
              onClick={() => handleComplete(todo.id)}
              style={{
                marginLeft: '0.5rem',
                padding: '0.25rem 0.5rem',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '0.25rem',
                cursor: 'pointer',
              }}
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
