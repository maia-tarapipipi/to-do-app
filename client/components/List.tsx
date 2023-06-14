import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../slices/todos'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-evenly mt-5">
        {todos.map((todo) => (
          <div key={todo.id} className="m-4 max-w-md">
            <div className="bg-slate-200 block rounded-lg shadow-lg  p-10">
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                {todo.name}
              </h5>
              <small className="text-gray-700 text-base mb-4 italic">
                {todo.priority}
              </small>
              <small className="text-gray-700 text-base mb-4 italic">
                {todo.completed}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
