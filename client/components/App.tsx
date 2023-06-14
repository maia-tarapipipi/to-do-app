import AddTodo from './AddTodo';
import List from './List';

export default function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <List />
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  );
}
