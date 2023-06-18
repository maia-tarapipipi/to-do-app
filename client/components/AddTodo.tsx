// eslint-disable-next-line no-unused-vars
import { useAppDispatch } from '../hooks'

function AddTodo() {
  function handleSubmit() {}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
        />
        <input type="number"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddTodo
