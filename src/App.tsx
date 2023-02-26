import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <ToDoList />
    </React.StrictMode>
  );
}

export default App;
