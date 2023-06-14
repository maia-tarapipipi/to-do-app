import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTasks } from '../slices/todos'

function ToDoList() {
  const todos = useAppSelector((state) => state.tasks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  // function handleClick(){

  // }

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {' '}
              <input type="checkbox" value={`${todo.completed}`} /> {todo.task}{' '}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ToDoList
