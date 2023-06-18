import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todosList'

function TodosList() {
  const dispatch = useAppDispatch()
  const todosList = useAppSelector((state) => state.todosList)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>
            Todo: {todo.todoDetails}, Priority: {todo.priority}, Completed:
            {todo.completed}
          </li>
        ))}
      </ul>
      <p>Priority Scale 1-High, 5-low</p>
    </div>
  )
}

export default TodosList
