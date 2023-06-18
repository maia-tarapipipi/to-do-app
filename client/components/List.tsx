import { useState } from 'react';
import { useTodos, useDeleteTodo, useUpdateTodo } from '../apis/api';

function TodoList() {
  const { data: todos = [], isLoading, isError, refetch } = useTodos();
  const deleteTodoMutation = useDeleteTodo();
  const updateTodoMutation = useUpdateTodo();

  const handleComplete = async (id: number) => {
    try {
      await deleteTodoMutation.mutateAsync(id);
      refetch();
    } catch (error) {
      // Handle error
    }
  };

  const handleEdit = async (id: number, name: string, priority: string) => {
    try {
      await updateTodoMutation.mutateAsync({
        id,
        name,
        priority,
        completed: false
      });
      refetch();
    } catch (error) {
      // Handle error
    }
  };

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedPriority, setEditedPriority] = useState('');

  const handleEditClick = (id: number, name: string, priority: string) => {
    setEditingId(id);
    setEditedName(name);
    setEditedPriority(priority);
  };

  const handleUpdate = () => {
    if (editingId && editedName && editedPriority) {
      handleEdit(editingId, editedName, editedPriority);
      setEditingId(null);
      setEditedName('');
      setEditedPriority('');
    }
  };

  if (isLoading) {
    return <div>Loading todos...</div>;
  }

  if (isError) {
    return <div>Error fetching todos</div>;
  }

  const priorityColors: { [key: string]: string } = {
    High: '#FFB151',
    Medium: '#FFD89C',
    Low: '#A2CDB0',
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: '0.5rem',
              padding: '0.5rem',
              backgroundColor: priorityColors[todo.priority] || 'white',
            }}
          >
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  type="text"
                  value={editedPriority}
                  onChange={(e) => setEditedPriority(e.target.value)}
                />
                <button
                  onClick={handleUpdate}
                  style={{
                    marginLeft: '0.5rem',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: 'green',
                    color: 'white',
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                  }}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <span>{todo.name}</span>
                <button
                  onClick={() => handleEditClick(todo.id, todo.name, todo.priority)}
                  style={{
                    marginLeft: '0.5rem',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#025464',
                    color: 'white',
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                  }}
                >
                  Edit
                </button>
              </>
            )}
            <button
              onClick={() => handleComplete(todo.id)}
              style={{
                marginLeft: '0.5rem',
                padding: '0.25rem 0.5rem',
                backgroundColor: '#B70900',
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
