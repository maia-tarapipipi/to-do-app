import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { postTodosThenFetch } from '../slices/todos'

interface AddTodoProps {
  onEnterPressed: () => void
}

const Form = ({ onEnterPressed }: AddTodoProps) => {
  const dispatch = useAppDispatch()
  const [todo, setTodo] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (todo !== '') {
      dispatch(postTodosThenFetch({ todo }))
      setTodo('')
      onEnterPressed()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="todo-input">
          Task:
        </label>
      </div>

      <input
        className="input"
        type="text"
        id="todo-input"
        name="todo"
        placeholder="Add your task"
        value={todo}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="button is-primary"
        style={{ margin: '40px', padding: '10px 20px' }}
      >
        Submit
      </button>
    </form>
  )
}

function AddTodo(props: AddTodoProps) {
  return (
    <>
      <h1 className="has-text-centered is-size-1 has-text-weight-bold has-text-danger">
        TODOS
      </h1>

      <div className="container has-text-centered">
        <div className="column is-half is-offset-one-quarter">
          <div className="control">
            <Form {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTodo
