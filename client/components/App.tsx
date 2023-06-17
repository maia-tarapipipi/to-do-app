import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AddTodo from './AddTodo';
import List from './List';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header className="header">
        <h1>TASKS</h1>
        <AddTodo />
      </header>

      <section className="main">
        <List />
      </section>

      <footer className="footer"></footer>

      <ReactQueryDevtools initialIsOpen={false} /> {/* Optional: Devtools for React Query */}
    </QueryClientProvider>
  );
}

export default App;
