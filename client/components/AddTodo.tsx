// eslint-disable-next-line no-unused-vars
import { FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { TodoDraft, TodoForm } from '../../models/models'
import { postTodothenReload } from '../slices/todosList'
function AddTodo() {
  const dispatch = useAppDispatch()
  const [form, setForm] = useState({
    todoDetails: '',
    priority: 0,
  } as TodoForm)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    dispatch(postTodothenReload(form))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-todo">
        <input
          type="text"
          name="todoDetails"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={handleChange}
          value={form.todoDetails}
        />
        <input
          name="priority"
          className="new-todo"
          type="number"
          placeholder="Priority (1-High, 5-low)"
          min={1}
          max={5}
          onChange={handleChange}
          value={form.priority}
        />
        <div className="new-todo">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default AddTodo
