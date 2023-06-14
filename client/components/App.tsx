import { todoDraftSchema } from '../../models/todos'
import AddTodo from './AddTodo'
import Footer from './Footer'
import List from './List'

function App() {


  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <List />
      </section>
      <footer className="footer">

      </footer>
    </>
  )
}

export default App
