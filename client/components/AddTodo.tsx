// eslint-disable-next-line no-unused-vars
import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'

function AddTodo() {

  const dispatch = useAppDispatch()

  const [form, setForm] = useState()


  return (
    <>
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
      />
      </form>
    </>
  )
}

export default AddTodo
