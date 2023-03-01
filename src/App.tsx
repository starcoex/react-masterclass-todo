import React, { useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import ToDoList from './components/ToDoList';
import { ThemeProvider } from 'styled-components';
import { darkTheme, ligthTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { isLightState } from './recoil/atoms';

function App() {
  const isLight = useRecoilValue(isLightState)
  useEffect(() => {
    localStorage.setItem("isLight", JSON.stringify(isLight))
  }, [isLight])
  return (
    <React.StrictMode>
      <ThemeProvider theme={isLight ? ligthTheme : darkTheme}>
        <GlobalStyle />
        <ToDoList />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
