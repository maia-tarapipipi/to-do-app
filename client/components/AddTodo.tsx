/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { postTodosThenFetch } from '../slices/todos'

interface AddTodoProps {
  onEnterPressed: () => void
}

function AddTodo({ onEnterPressed }: AddTodoProps) {
  const dispatch = useAppDispatch()

  const [todosList, setTodosList] = useState({
    todo: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodosList({
      ...todosList,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    dispatch(postTodosThenFetch(todosList))
    console.log('HERE')
    onEnterPressed()
  }

  return (
    <>
      {/* Heading Level 1 */}
      <h1 className="has-text-centered is-size-1 has-text-weight-bold has-text-danger">
        TODOS
      </h1>

      <div className="container has-text-centered">
        <div className="column is-half is-offset-one-quarter">
          <div className="control">
            <form onSubmit={handleSubmit}>
              {/* Form Label */}
              <div>
                <label className="label" htmlFor="todo-input">
                  Task:
                </label>
              </div>

              {/* Input field */}
              <input
                className="input"
                type="text"
                id="todo-input"
                name="todo"
                placeholder="Add your task"
                value={todosList.todo}
                onChange={handleChange}
              />

              {/* Submit Button with styling */}
              <button
                type="submit"
                className="button is-primary"
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    handleSubmit(event)
                  }
                }}
                style={{ margin: '40px', padding: '10px 20px' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTodo
