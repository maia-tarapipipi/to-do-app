import { useEffect } from 'react'
import { TodosData } from '../../models/models'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todosList'

function TodosList() {
  // i need a use app selector first
  const dispatch = useAppDispatch()
  const todosList = useAppSelector((state) => state.todosList as TodosData[])

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>
            Todo: {todo.todoDetails}, Priority: {todo.priority}, Completed:{' '}
            {todo.completed}
          </li>
        ))}
      </ul>
      <p>Priority Scale 1-High, 10-low</p>
    </div>
  )
}

export default TodosList
