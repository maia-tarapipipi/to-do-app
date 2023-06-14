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
    <div>
      <div>
        {tasks.map((task) => (
          <p key={task.id}>{task.task}</p>
        ))}
      </div>
    </div>
  )
}

export default Todos
