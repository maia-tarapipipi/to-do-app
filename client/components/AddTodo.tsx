import { FormEvent, useState } from 'react'
import { ToDo, ToDoDraft } from '../../modules/todo'
import { useAppDispatch } from '../hooks'
import { postTodoThenFetch } from '../slices/todos'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const dispatch = useAppDispatch()
  const [form, setForm] = useState({} as ToDoDraft)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, todo: event.target.value })
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    dispatch(postTodoThenFetch(form))
    setForm({ todo: '' } as ToDoDraft)
  }

  return (
    <>
      <form id="form" noValidate>
        <div className="formBox">
          <label htmlFor="todoInput">Todo:</label>
          <input
            id="todoInput"
            className="new-todo"
            placeholder="What needs to be done?"
            name="todo"
            value={form.todo}
            onChange={handleChange}
            autoFocus={true}
          />
        </div>
      </form>
      <div>
        <button type="button" onClick={handleSubmit} className="button">
          Add
        </button>
      </div>
    </>
  )
}

export default AddTodo
