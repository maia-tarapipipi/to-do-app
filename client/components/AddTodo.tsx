import { useState } from "react"
import { useDispatch } from "react-redux"

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const dispatch = useDispatch()
  const [task, setTask] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLInputElement>){
    const newTask = e.target
    
    dispatch(postTask(task))  
  }

  return (
    <>
      <input
      onChange={handleChange}
      onSubmit={handleSubmit}
        className="new-todo"
        placeholder="Add a task"
        autoFocus={true}
        value={task}
      />
    </>
  )
}

export default AddTodo
