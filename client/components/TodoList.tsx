import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todos'

function TodoList() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <>
      {todos.map((todo) =>
      (
      <div key={todo.id} className='todo-list'>
        <input type="checkbox"></input>
        {todo.taskDetails}
      </div>
      )
      )}
    </>
  )
}

export default TodoList
