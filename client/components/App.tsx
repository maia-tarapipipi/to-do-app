import { useState } from 'react'
import AddTodo from './AddTodo'
import ToDoList from './ToDoList'

function App() {
  const [isListVisible, setListVisible] = useState(false)

  const showTodoList = () => {
    setListVisible(true)
  }

  return (
    <header>
      <AddTodo onEnterPressed={showTodoList} />
      {isListVisible && <ToDoList />}
    </header>
  )
}

export default App
