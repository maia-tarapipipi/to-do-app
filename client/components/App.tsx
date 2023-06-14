import AddTodo from './AddTodo'
import Footer from './Footer'
import TodoList from './TodoList'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <TodoList />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
