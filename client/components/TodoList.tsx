import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todos'

function TodoList() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  //delete todos
  // function handleClick (e: React.MouseEvent<HTMLButtonElement> ) {
  //   const id = e.target.value
  //   if (id === todos[id].id) {

  //   }
    
  //   console.log('clicked', id)
  // }

  return (
    <>
      {todos.map((todo) =>
      (
      <div key={todo.id} className='todo-list'>
        <input type="checkbox"></input>
        {todo.taskDetails}
        <button onClick ={handleClick} value = {todo.id}>X</button>
      </div>
      )
      )}
    </>
  )
}

export default TodoList
