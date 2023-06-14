import AddTodo from './AddTodo'
import TodosList from './TodosList'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        <TodosList />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
