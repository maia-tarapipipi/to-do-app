import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todos'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="view">
            <input className="toggle" type="checkbox" checked="" />
            <label>{todo.details}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
