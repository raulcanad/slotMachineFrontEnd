import react, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import mapResult from '../helper/ResultMapper';

const Game : React.FC = () => {
  const [gameResult, setGameResult] = useState(['joker','joker','joker'])

      return (
        <Container sx={{display:'flex',justifyContent:'space-between'}}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image= {mapResult(gameResult[0])}
                alt="green iguana"
            />
            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={mapResult(gameResult[1])}
            alt="green iguana"
            />
        </Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={mapResult(gameResult[2])}
                alt="green iguana"
            />
            </Card>
        </Container>
      );
    
    


}


export default Game;

