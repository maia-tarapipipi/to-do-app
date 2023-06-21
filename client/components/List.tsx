import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos, deleteTodoThenFetch,updateTodo } from '../slices/todos'
import TodoRow from './TodoRow'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  useEffect(() => {
    console.log(todos)
  })

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodoThenFetch(id))
   
  }

  const handleUpdateTodo = (id :number, completed: boolean) => {
    console.log('UPDATING0', id, completed)
    dispatch(updateTodo({id: id,completed: completed}))
  }

  return (
    <div className="container has-text-centered ">
      <div className="columns is-centered">
        <div className="column is-two-fifths notification is-warning">
          {
            todos.map((todo) => {
              return <TodoRow key = {todo.id}  rowObject = {todo} handleDeleteTodo = {handleDeleteTodo} handleUpdateTodo={handleUpdateTodo}/>
            })
          }
        
        </div>
      </div>
    </div>
  )
}

export default List
