import { FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { postTodoThenFetch } from '../slices/todos'

const initialState = {name: '',
priority: '',
completed: false,

}

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const [todo, setTodo] = useState(initialState)
  const dispatch = useAppDispatch()
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    dispatch(postTodoThenFetch(todo))
  }

  // dispatch(postTodoThenFetch(todo))
  // setTodo(initialState)

  return (
    <>
      <form id="form" noValidate>
        <div className="relative z-0 w-full mb-5">
          <input
            type="text"
            name="name"
            placeholder=" "
            value={todo.name}
            onChange={handleChange}
            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label
            htmlFor="name"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >
            Task
          </label>
        </div>
        <div>
          <input
            type="text"
            name="priority"
            placeholder=" "
            value={todo.priority}
            onChange={handleChange}
            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label
            htmlFor="priority"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >
            Priority(High/Medium/Low)
          </label>
        </div>
        <div>
          <input
            type="text"
            name="completed"
            placeholder=" "
            value={todo.completed}
            onChange={handleChange}
            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label
            htmlFor="completed"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >
            Completed?
          </label>
        </div>
      </form>
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Task
        </button>
      </div>
    </>
  )
}

export default AddTodo
