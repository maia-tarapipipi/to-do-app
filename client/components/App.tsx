import AddTodo from './AddTodo'
import List from './List'

function App() {
  return (
    <>
      <header className="header">
        <h1>Sarah todos</h1>
      </header>
      <AddTodo />
      <List />
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
