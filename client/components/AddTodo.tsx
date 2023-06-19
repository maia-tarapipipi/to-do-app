import { useState } from 'react'
import { useAppDispatch } from '../hooks'
import { postTodoThenFetch } from '../slices/todos'

const initialState = {
  taskDetails: '',
  priority: 0,
  completed: false,
}

function AddTodo() {
  const [newTodo, setNewTodo] = useState(initialState)

  const dispatch = useAppDispatch()

  //CHANGE STATE WITH A NEW INPUT
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo({
      ...newTodo,
      taskDetails: e.target.value,
    })
  }

  //DISPATCH POSTTODOTHENFETCH FUNCTION FROM API
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(postTodoThenFetch(newTodo))

    //CLEAR THE INPUT AREA AFTER POSING A NEW TODO
    e.currentTarget.reset()
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
