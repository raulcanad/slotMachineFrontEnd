import start from '../resources/start.png';
import { Container } from '@mui/system';
import '../App.css';

export const Boton = () => {
  return (
    <Container   sx={{ display: 'flex',justifyContent: 'flex-end', marginBottom:'5%'}}>
      
      <img id="boton" src={start} width="100" height="auto"  hover='filter: blur(5px)'  />
     
      
    </Container>

  )
}

export default Boton;