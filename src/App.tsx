import React, { useState } from 'react';
import Formulario from "./screens/UserData";
import './App.css';

import Login from "./screens/Login";
import SegundoComponente from './screens/Mensaje';

import Boton from './screens/Boton';
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import mapResult from './helper/ResultMapper';
import apiFetch from './api/fetch';

function App() {
  const [gameResult, setGameResult] = useState(['joker', 'joker', 'joker'])
  const botonProps = { funcionClick: () => apiFetch('POST', '/').then(result => setGameResult(result)) }
  return (
    <>
      <Container className="fondo">
        <Login />
        <Container sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', marginBottom: '10%' }}>

          <Card sx={{ maxWidth: 345, background: '#40CFFF' }}>
            <CardMedia
              component="img"
              height="140"
              image={mapResult(gameResult[0])}
              alt="primer slot" />
          </Card>
          <Card sx={{ maxWidth: 345, background: '#40CFFF' }}>
            <CardMedia
              component="img"
              height="140"
              image={mapResult(gameResult[1])}
              alt="segundo slot" />
          </Card>
          <Card sx={{ maxWidth: 345, background: '#40CFFF' }}>
            <CardMedia
              component="img"
              height="140"
              image={mapResult(gameResult[2])}
              alt="tercer slot" />
          </Card>
        </Container>

        <Boton {...botonProps} />
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
