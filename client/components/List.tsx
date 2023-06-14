import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { checkboxTodo, deleteTodo, fetchTodos } from '../slices/todos'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  const [localTodos, setLocalTodos] = useState(todos)

  

  //Making the delete button work.
  //On the delete button, send through the associated id.
  //Dispatch it through to the slice, and handle it through there.

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  useEffect(() => {
    setLocalTodos(todos);
  }, [todos]);

  function handleDelete(id : number) {
    dispatch(deleteTodo(id))
  }

  function handleComplete(id : number) {

  }

  function handleCheck(id: number, event: React.ChangeEvent<HTMLInputElement>) {
    // setLocalTodos(prevTodos => {
    //   return prevTodos.map(todo => {
    //     if (todo.id === id) {
    //       return {
    //         ...todo,
    //         isCompleted: event.target.checked
    //       };
    //     }
    //     return todo;
    //   });
    // });
  

    dispatch(checkboxTodo(id))

  }

  return (
    <>
      <div>
        {localTodos.map((element) => (
          <div
            style={{
              display: 'flex',
              justifyContent: '',
              alignItems: 'center',
              gap: '20px',
              margin: '0 10px',
            }}
            key={element.todo}
          >
            <input type="checkbox" checked = {element.isCompleted} onChange={(event) => handleCheck(element.id, event)}/>
            <div style={{ width: '250px' }}>
              <h2>{element.todo}</h2>
            </div>
            <p>Priority: {element.priority}</p>
            <button onClick = {() => handleDelete(element.id)}style={{ marginLeft: 'auto', marginRight: '10px' }}>
              Delete
            </button>
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            margin: '0 10px',
          }}
        >
          <p>Items Left: {todos.length}</p>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
          <button>Clear completed</button>
        </div>
      </div>
    </>
  )
}

export default List
