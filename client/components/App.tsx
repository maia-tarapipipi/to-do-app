import { useState } from 'react'
import AddTodo from './AddTodo'
import ToDoList from './ToDoList'

function App() {
  const [isListVisible, setListVisible] = useState(false)

  function handleEnterPressed() {
    setListVisible(true)
  }

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
