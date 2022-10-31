import * as React from 'react';
import react, { Fragment, useState } from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import '../App.css';

import { Container } from '@mui/system';
import mapResult from '../helper/ResultMapper';

//import {Button} from  "./Boton";

const Game : React.FC = () => {
  const [gameResult, setGameResult] = useState(['joker','joker','joker'])
  const [newTask, setNewTask] =useState('');
  
      return (  
          
            <Container  sx={{ display: 'flex', justifyContent: 'space-between',width:'60%', marginBottom:'10%'}}>
              
              <Card sx={{ maxWidth: 345, background:'#40CFFF' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={mapResult(gameResult[0])}
                  alt="primer slot" />
              </Card>
              <Card sx={{ maxWidth: 345,background:'#40CFFF' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={mapResult(gameResult[1])}
                  alt="segundo slot" />
              </Card>
              <Card sx={{ maxWidth: 345, background:'#40CFFF' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={mapResult(gameResult[2])}
                  alt="tercer slot" />
              </Card>
            </Container>            
        
      );
    
    


}


export default Game;




