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
    <><div className="todoList">
      
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.priority}
                <input type="checkbox" checked={false} /> {todo.task}{' '}
              </li>
            )
          })}
        </ul>
    </div>
    </>
  )
}

export default ToDoList
