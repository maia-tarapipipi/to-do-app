import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTasks } from '../slices/todos'

function Todos() {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <ul>
      {tasks.map((task) => (
        <li style={{ fontSize: '20px' }} key={task.id}>
          {task.task}
        </li>
      ))}
    </ul>
  )
}

export default Todos
