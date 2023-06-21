import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todos'
import { deleteTodoThenFetch } from '../slices/todos'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  function handleDelete(id: number) {
    dispatch(deleteTodoThenFetch(id))
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{todo.details}</label>
            <button
              className="destroy"
              onClick={() => {
                handleDelete(todo.id)
              }}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
