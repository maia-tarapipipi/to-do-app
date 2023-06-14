import React, { useState } from 'react'
import { useAppDispatch } from '../hooks'
import { addTask } from '../slices/todos'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useAppDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input) {
      dispatch(addTask({ text: input }))
      setInput('')
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        value={input}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default AddTodo
