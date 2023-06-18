import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTasks, removeTask } from '../slices/todos'
import { editTask } from '../apis/api'

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

function handleDelete( id:number) { 
  dispatch(removeTask(id))
}

// function handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
//   dispatch(editTask())
// }

  return (
    <><div className="todoList">
      
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.priority}
                <input type="checkbox" onChange={handleChange} /> {todo.task}
                {/* <button id='edit' onClick={() => {handleEdit}}>Edit</button> */}
                <button id='del' onClick={() => {handleDelete(todo.id)}}>Del</button>
              </li>
            )
          })}
        </ul>
        
    </div>
    </>
  )
}

export default ToDoList
