// eslint-disable-next-line no-unused-vars
import React, { FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { postTodoThenFetch } from '../slices/todos'

interface Form {
  todo: string
  priority: 1 | 2 | 3 | 4 | 5
}

function AddTodo() {
  const [form, setForm] = useState({ todo: '', priority: 3 } as Form)
  const dispatch = useAppDispatch()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === 'priority') {
      // Convert the value to a number using parseInt or parseFloat
      const priority = Number(event.target.value)
      setForm({
        ...form,
        [event.target.name]: priority,
      })
    } else {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      })
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    dispatch(postTodoThenFetch(form))
    setForm({ todo: '', priority: 3 })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={form.todo}
          onChange={handleChange}
          name="todo"
        />
        <div
          style={{
            display: 'flex',
            margin: '0 20px',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <label htmlFor="priority">
            <h3>Priority:</h3>
          </label>
          <input
            onChange={handleChange}
            type="range"
            min="1"
            max="5"
            id="priority"
            name="priority"
            value={form.priority}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <button type="submit" style={{ alignContent: 'center' }}>
            Add
          </button>
        </div>
      </form>
    </>
  )
}

export default AddTodo
