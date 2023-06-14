import { FormEvent, useState } from 'react'
import { postTaskThenFetch } from '../slices/todos'
import { useAppDispatch } from '../hooks'

const initialState = { task: '' }
// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const dispatch = useAppDispatch()
  const [task, setTask] = useState(initialState)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setTask({ task: e.target.value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('I was submitted')

    dispatch(postTaskThenFetch(task))
    setTask(initialState)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          onChange={handleChange}          
          className="new-todo"
          placeholder="Add a task"
          autoFocus={true}
          value={task.task}
        />
        
      </form>
    </>
  )
}

export default AddTodo
