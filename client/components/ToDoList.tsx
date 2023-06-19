import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import {
  fetchTasks,
  removeTask,
  setCompleted,
  updateTask,
} from '../slices/todos'
import { Task } from '../models/models'

function ToDoList() {
  const todos = useAppSelector((state) => state.tasks)
  const [editingId, setEditingId] = useState(0 as number | null)
  const [task, setTask] = useState('')
  const [priority, setPriority] = useState(0 as number | null)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setCompleted(Number(e.target.id)))
  }

  function handleDelete(id: number) {
    dispatch(removeTask(id))
  }

  function handleEditButton(todo: Task) {
    if (todo.id !== null) {
      setEditingId(todo.id)
      setPriority(todo.priority)
      setTask(todo.task)
    } else {
      setEditingId(null)
    }
  }

  function handleEditPriority(e: React.ChangeEvent<HTMLInputElement>) {
    setPriority(Number(e.target.value))
  }

  function handleEditTask(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value)
  }

  function handleUpdate() {
    if (editingId !== null) {
      dispatch(
        updateTask({
          id: editingId,
          task,
          priority: Number(priority),
          completed: false,
        })
      )
      setEditingId(null)
    }
  }

  return (
    <div className="todoList">
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              {!todo.completed && (
                <li>
                  {editingId === todo.id ? (
                    <>
                      <input
                        type="text"
                        onChange={handleEditPriority}
                        value={todo.priority}
                      />
                      <input
                        type="text"
                        onChange={handleEditTask}
                        value={task}
                      />
                      <button onClick={handleUpdate}>Update</button>
                    </>
                  ) : (
                    <>
                      <span>{todo.priority}</span>
                      <input
                        type="checkbox"
                        id={`${todo.id}`}
                        onChange={handleChange}
                      />
                      {todo.task}
                      <button
                        id="edit"
                        onClick={() => {
                          handleEditButton(todo)
                        }}
                      >
                        Edit
                      </button>
                      <button
                        id="del"
                        onClick={() => {
                          handleDelete(todo.id)
                        }}
                      >
                        Del
                      </button>
                    </>
                  )}
                </li>
              )}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoList
