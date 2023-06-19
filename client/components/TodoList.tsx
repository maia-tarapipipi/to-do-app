import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos, removeTodo } from '../slices/todos'

function TodoList() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  //delete todos
  function handleClick(id: number) {
    //DELETE ITEM BY ID
    dispatch(removeTodo(id))
    //RERENDER ITEMS ON THE PAGE
    dispatch(fetchTodos())
  }

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-list">
          <input type="checkbox"></input>
          {todo.taskDetails}
          <button onClick={() => handleClick(todo.id)}>X</button>
        </div>
      ))}
    </>
  )
}

export default TodoList
