import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos, deleteTodoThenFetch } from '../slices/todos'

const TodoItem = ({ task }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="block" key={task.id}>
      <p
        className="block"
        style={{ display: 'inline-block', marginRight: '10px' }}
      >
        {task.task}
      </p>
      <button
        className="delete is-medium"
        onClick={() => dispatch(deleteTodoThenFetch(task.id))}
        style={{ display: 'inline-block' }}
      >
        x
      </button>
    </div>
  )
}

function ToDoList() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="container has-text-centered ">
      <div className="columns is-centered">
        <div className="column is-two-fifths notification is-warning">
          {todos.map((task) => (
            <TodoItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ToDoList
