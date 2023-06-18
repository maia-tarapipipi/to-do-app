import { FormEvent, useState } from 'react'
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
      console.log(task)
    } else if (e.target.id === 'priority') {
      setTask({ ...task, priority: value })
      console.log(task)
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLFormElement>) {
   if (e.key === 'Enter') {
     e.preventDefault()   
     dispatch(postTaskThenFetch({...task, priority: Number(task.priority)}))
     setTask(initialState)
   }
  }

  return (
    <>
      <form onKeyDown={handleKeyPress} className="form">
        <input
          type="text"
          onChange={handleChange}
          className="new-todo"
          id="task"
          placeholder="Add a task"
          autoFocus={true}
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
      </form>
    </>
  )
}

export default AddTodo
