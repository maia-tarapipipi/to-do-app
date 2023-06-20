import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { postTodoThenFetch } from '../slices/todos'

function AddTodo() {
  const dispatch = useAppDispatch()
  const [form, setForm] = useState({
    details: '',
    priority: 1,
    completed: false,
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    dispatch(postTodoThenFetch(form))
  }

  return (
    <>
      <form id="form" noValidate onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          name="details"
          value={form.details}
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default AddTodo
