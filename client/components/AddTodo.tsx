import { FormEvent, useState } from "react"
import { postNewTodoThenFetch } from "../slices/todos"
import { useAppDispatch } from "../hooks"

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const [todo, setTodo] = useState({ task: '' })
  const dispatch = useAppDispatch()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo({ ...todo, [event.target.name]: event.target.value })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault
    // console.log(todo, "handle Submit")
    dispatch(postNewTodoThenFetch(todo))
    setTodo({ task: '' })
  }

  return (
    <>
      <form noValidate>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          name="task"
          autoFocus={true}
          value={todo.task}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>Add</button>
      </form>

    </>
  )
}

export default AddTodo
