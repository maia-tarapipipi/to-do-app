import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { fetchTodos } from "../slices/todos"


export default function List() {
  const dispatch = useAppDispatch()
  // to add the todos slice/state
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])



  return (
    <>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {/* <div className="complete button">
              <button value={todo.completed}>complete</button>
            </div> */}
            <div>
              <p>{todo.task}</p>
            </div>
            {/* <div className="delete button">
              <button>delete</button>
            </div> */}
          </div>
        ))}
      </div>
    </>
  )
}