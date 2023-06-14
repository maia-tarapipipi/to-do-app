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
          <div key={todo.id}>{todo.todo}</div>
        ))}
      </div>
    </div>
  )
}

export default List
