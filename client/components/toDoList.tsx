import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTask } from '../slices/Task'

function ToDoList() {
  const Tasks = useAppSelector((state) => state.tasks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTask())
  })

  return (
    <>
      {Tasks.map((Task) => {
        return (
          <div key={Task.id} className="todo-list">
            <input type="checkbox"></input>
            {Task.task_name}
            {/* <button onClick ={handleClick} value = {todo.id}>X</button> */}
          </div>
        )
      })}
    </>
  )
}

export default ToDoList
