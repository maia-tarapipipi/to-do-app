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
    <div>
      <div className="todoBox">
        {todos.map((todo) => (
          <div key={todo.id}>
            <input type="checkbox" id={`${todo.id}`} className="todoCheckbox" />
            <label htmlFor={`${todo.id}`} className="todoLabel">
              {todo.todo}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
