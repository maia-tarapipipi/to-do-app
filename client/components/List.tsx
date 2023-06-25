import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todos'
import { deleteTodoThenFetch } from '../slices/todos'
import { updateTodoThenFetch } from '../slices/todos'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  function handleDelete(id: number) {
    dispatch(deleteTodoThenFetch(id))
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updateTodoThenFetch(Number(event.target.id)))
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <div className="view">
            <input
              id={`${todo.id}`}
              className="toggle"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
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
