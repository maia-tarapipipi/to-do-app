import { useAppDispatch } from "../hooks"
import { fetchTodos } from "../slices/todos"

function AddTodo() {


  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        // onChange={handleChange}
      />
    </>
  )
}

export default AddTodo
