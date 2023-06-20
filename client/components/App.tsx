import AddTodo from './AddTodo'
import ToDoList from './toDoList'

function App() {
  return (
    <>
      <main className="main">
        <h1>Todos List</h1>
        <AddTodo />
        <ToDoList />
      </main>
      <footer className="footer"></footer>
    </>
  )
}


export default App
