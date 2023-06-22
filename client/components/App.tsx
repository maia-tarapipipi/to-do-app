import { useState, useEffect } from 'react'
import AddTodo from './AddTodo'
import ToDoList from './ToDoList'
import { fetchTodos } from '../slices/todos'
import { useAppDispatch } from '../hooks'

function App() {
  const [isListVisible, setListVisible] = useState(false)

  function handleEnterPressed() {
    setListVisible(true)
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <>
      <header>
        <AddTodo onEnterPressed={handleEnterPressed} />
        {isListVisible && <ToDoList />}
      </header>
    </>
  )
}

export default App
