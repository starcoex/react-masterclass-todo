import React from 'react';
import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import ToDoList from './ToDoList';

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <ToDoList />
    </React.StrictMode>
  );
}

export default App;
