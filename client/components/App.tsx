import AddTodo from './AddTodo'
import Footer from './Footer'
import TodoList from './TodoList'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Todo List</h1>
        <AddTodo />
      </header>
      <section className="main">
        <TodoList />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
