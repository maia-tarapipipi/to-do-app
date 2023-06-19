import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'

function AddTodo() {
  const dispatch = useAppDispatch()
  const [form, setForm] = useState({
    listItemName: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event: FormEvent) {
    console.log('handleSubmit')
    event.preventDefault()
    dispatch(postFilmThenFetch(form))
  }

  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        name="listItemName"
        value={form.listItemName}
        onChange={handleChange}
        onClick={handleSubmit}
      />
    </>
  )
}

export default AddTodo
