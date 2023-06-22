import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todos'
import { deleteTodoThenFetch } from '../slices/todos'
import { updateTodoThenFetch } from '../slices/todos'
import { Task, TaskDraft } from '../../common/task'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  function handleDelete(id: number) {
    dispatch(deleteTodoThenFetch(id))
  }

  function handleUpdate(todo: Task) {
    todo = {
      id: todo.id,
      details: todo.details,
      priority: todo.priority,
      completed: todo.completed,
    }
    dispatch(updateTodoThenFetch(todo))
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onClick={() => {
                handleUpdate(todo)
              }}
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
