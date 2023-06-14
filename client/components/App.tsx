import AddTodo from './AddTodo';

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
        />
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>
        <ul className="todo-list">
          <li className="todo-item">
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
              />
              <label>Todo item 1</label>
              <button className="destroy"></button>
            </div>
            <input
              className="edit"
              type="text"
              value="Todo item 1"
            />
          </li>
          <li className="todo-item">
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
              />
              <label>Todo item 2</label>
              <button className="destroy"></button>
            </div>
            <input
              className="edit"
              type="text"
              value="Todo item 2"
            />
          </li>
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>0</strong> items left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default App;
