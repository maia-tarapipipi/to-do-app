import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todosList'

function TodosList() {
  const dispatch = useAppDispatch()
  const todosList = useAppSelector((state) => state.todosList)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  function clickHandler() {

  }

  return (
    <div>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id} className="todo-list">
            Todo: {todo.todoDetails}, Priority: {todo.priority}, Completed:{' '}
            <input type="checkbox" onClick={clickHandler} />
            {/* {Boolean(todo.completed) == false ? '✔️' : '❌'} */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodosList
