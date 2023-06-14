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
        <li
          style={{ fontSize: '20px', listStyleType: 'none', padding: '10px' }}
          key={task.id}
        >
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" style={{ marginRight: '10px' }} />
            <span>{task.task}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default Todos
