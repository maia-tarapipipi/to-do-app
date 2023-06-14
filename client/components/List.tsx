import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos, deleteTodoThenFetch } from '../slices/todos'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodoThenFetch(id))
    console.log('working', id)
  }

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-evenly mt-5">
        {todos.map((todo) => (
          <div key={todo.id} className="m-4 max-w-md">
            <div className="bg-slate-200 block rounded-lg shadow-lg  p-10">
              <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
              <p className="text-gray-900 text-xl leading-tight font-medium mb-2">
                {todo.todo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
