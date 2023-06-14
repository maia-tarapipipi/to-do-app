import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { cancelTodo, fetchTodos } from "../slices/todos"


export default function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  async function handleClick(id: number) {
    // todo: a deleteTodo slice/state
    await dispatch(cancelTodo(id))
    dispatch(fetchTodos())

  }

  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (


          <li key={todo.id}>
            <div className={todo.completed}>
              <input type="checkbox" className="toggle" />
              <label>{todo.task}</label>
              <button className="destroy" onClick={() => handleClick(todo.id)}></button>
            </div>

          </li>



        ))}
      </ul>
    </>
  )
}