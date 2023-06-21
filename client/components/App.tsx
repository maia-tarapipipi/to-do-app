import { useState } from 'react';
import AddTodo from './AddTodo';
import List from './List';

function App() {
  const [isListVisible, setListVisible] = useState(true);//set to false when done testing ************

  function handleEnterPressed() {
    setListVisible(true);
  }

  return (
    <>
      <header>
        <AddTodo onEnterPressed={handleEnterPressed} />
        {isListVisible && <List />}
      </header>
    </>
  );
}

export default App;
