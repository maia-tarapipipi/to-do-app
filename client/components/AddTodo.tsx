
import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { postTodosThenFetch } from '../slices/todos'


function AddTodo() {
  const dispatch = useAppDispatch()

  const [todosList, setTodosList] = useState({
   todo: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodosList({
     ...todosList,
       [event.target.name]: event.target.value,

    })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    dispatch(postTodosThenFetch(todosList))
  }
   return(
    
    <div>
    <h1> TODOS</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name= "todo" placeholder=" " value={todosList.todo} onChange={handleChange}/> 
   
    </form>
    </div>
)
}

export default AddTodo