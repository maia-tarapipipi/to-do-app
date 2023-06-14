import AddTodo from './AddTodo'
import ToDoList from './ToDoList'

function App() {
  return (
    <>
      <header className="header">
      </header>
      <main className="main">
        <h1>Trotter`s Todos</h1>
        <AddTodo />
        <ToDoList />
      </main>
      <footer className="footer"></footer>
    </>
  )
}

export default App
