import React from 'react';
import Formulario from "./screens/UserData";
import './App.css';
import Game from './screens/Game';
import Login from "./screens/Login";
import SegundoComponente from './screens/Mensaje';

import Boton from './screens/Boton';
import { Container } from '@mui/system';

function App() {
  return (
    <>
    <Container className="fondo">
    <Login />
    <Game />
    <Boton/>
    <SegundoComponente />
    </Container>
    
   
    </>
   
 /*   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
