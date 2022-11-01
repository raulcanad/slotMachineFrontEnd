import start from '../resources/start.png';
import { Container } from '@mui/system';
import '../App.css';


function fun() {
  prompt("Esta imagen se puede clickar y estamos cerca, sólo hay que unir con  el back end o unaespecie de trigger");
};
interface BotonProps{funcionClick:()=>Promise<void>}


export const Boton = (props:BotonProps) => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5%' }}>

      <img id="boton" onClick={props.funcionClick} src={start} width="100" height="auto" 

      />


    </Container>

  )
}

export default Boton;