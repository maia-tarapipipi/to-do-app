import { FormEvent, useState } from 'react'
import { postTaskThenFetch } from '../slices/Task'
import { useAppDispatch } from '../hooks'

const initialState = { task_name: '' }
// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const dispatch = useAppDispatch()
  const [task, setTask] = useState(initialState)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setTask({ task_name: e.target.value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(postTaskThenFetch(task))
    setTask(initialState)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={handleChange}
          className="new-todo"
          placeholder="Add a task"
          value={task.task_name}
        />
      </form>
    </>
  )
}

export default AddTodo
