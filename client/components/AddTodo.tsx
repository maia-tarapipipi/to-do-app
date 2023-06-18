import { FormEvent, useState } from 'react'
import { addTodo } from '../apis/api'
import { useAppDispatch } from '../hooks'
import { fetchTodos, postTodoThenFetch } from '../slices/todos'

const initialState = {
  taskDetails: '',
  priority: 0,
  completed: false,
}

function AddTodo() {
  const [newTodo, setNewTodo] = useState(initialState)

  const dispatch = useAppDispatch()

  //TODO: create handleChange function to change state with a new input
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo({
      ...newTodo,
      taskDetails: e.target.value,
    })
  }

  //TODO: create handleSubmit function to dispatch addTodo function from API
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(postTodoThenFetch(newTodo))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default AddTodo
