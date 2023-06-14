import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { checkboxTodo, deleteTodo, fetchTodos, clearCompleted } from '../slices/todos'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  const [localTodos, setLocalTodos] = useState(todos)

  const [showing, setShowing] = useState('All')
  

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

  function clearCompletedHandler() {
    dispatch(clearCompleted())
  }

  function handleCheck(id: number, event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(checkboxTodo(id))
  }
  
  function showAllHandler() {
    setLocalTodos(todos)
    setShowing('All')
  }

  function showActiveHandler() {
    setLocalTodos(todos.filter(todo => todo.isCompleted == false))
    setShowing('Active')
  }

  function showCompletedHandler() {
    setLocalTodos(todos.filter(todo => todo.isCompleted == true))
    setShowing('Completed')
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
              color : element.isCompleted ? 'gray' : 'black',
            }}
            key={element.todo}
          >
            <input type="checkbox" checked = {element.isCompleted} onChange={(event) => handleCheck(element.id, event)}/>
            <div style={{ width: '250px'}}>
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
          <button onClick={showAllHandler}>All</button>
          <button onClick={showActiveHandler}>Active</button>
          <button onClick={showCompletedHandler}>Completed</button>
          <button onClick={clearCompletedHandler}>Clear completed</button>
          
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
              <p>Showing: {showing}</p></div>
      </div>
    </>
  )
}

export default List
