/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { postTaskThenFetch } from '../slices/todos'
import { useAppDispatch } from '../hooks'

const initialState = { task: '', priority: '' }
// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const dispatch = useAppDispatch()
  const [task, setTask] = useState(initialState)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const value = e.target.value

    if (e.target.id === 'task') {
      setTask({ ...task, task: value })

    } else if (e.target.id === 'priority') {
      setTask({ ...task, priority: value })
    }
  }

 
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(postTaskThenFetch({...task, priority: Number(task.priority)}))
     setTask(initialState)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={handleChange}
          className="new-todo"
          id="task"
          placeholder="Add a task"
          
          value={task.task}
        />
        <input
          type="text"
          className="new-todo"
          onChange={handleChange}
          id="priority"
          placeholder="Priority: 0-10"
          value={task.priority}
        />
        <button >Submit</button>
      </form>
    </>
  )
}

export default AddTodo

