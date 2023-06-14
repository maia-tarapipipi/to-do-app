import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTasks, deleteTaskThenFetch } from '../slices/todos'
import { Task } from '../../models/Todos'

function Todos() {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  const handleDelete = (id: number) => {
    dispatch(deleteTaskThenFetch(id))
  }

  return (
    <ul>
      {tasks.map((task: Task) => (
        <li
          style={{ fontSize: '20px', listStyleType: 'none', padding: '10px' }}
          key={task.id}
        >
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" style={{ marginRight: '10px' }} />
            <span>{task.task}</span>
            <button
              style={{ margin: '10px' }}
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default Todos
