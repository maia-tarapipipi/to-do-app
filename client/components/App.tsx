import AddTodo from './AddTodo'
import ToDoList from './ToDoList'

function App() {
  return (
    <>
      <main className="main">
        <h1>Trotter&apos;s Todos</h1>
        <AddTodo />
        <ToDoList />
      </main>
      <footer className="footer"></footer>
    </>
  )
}

export default App
