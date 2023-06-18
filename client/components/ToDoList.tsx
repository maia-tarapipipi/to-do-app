import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTasks } from '../slices/todos'

function ToDoList() {
  const todos = useAppSelector((state) => state.tasks)
  const [check, setCheck] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [check])

function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
  const target = e.target  
  setCheck(target.checked)
}

function handleClick(e:React.MouseEvent<HTMLButtonElement>) {
  dispatch(deleteTask())
}

  return (
    <><div className="todoList">
      
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.priority}
                <input type="checkbox" onChange={handleChange} /> {todo.task}
                <button onClick={() => {handleClick(todo.id)}}>X</button>
              </li>
            )
          })}
        </ul>
        Priority scale from 0 (lowest) - 10 (highest)
    </div>
    </>
  )
}

export default ToDoList
