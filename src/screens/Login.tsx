import { Fingerprint } from '@mui/icons-material'
import { Button, Container} from '@mui/material';
import Formulario from "./UserData";
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function sayHello() {
  //window.prompt('Hello!');
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  
}

const Login: React.FC = () => {
  return (
    
    <Container  sx={{ display: 'flex',justifyContent: 'flex-end', marginBottom:'5%' }}>

<Popup trigger={<Button /*onClick={sayHello}*/ sx={{ marginRight: '2%' }} variant="contained">Hazte jugador

      </Button>} position="bottom center" ><Formulario/></Popup>
     
      <Button  variant="contained">Login</Button>
    


    </Container>
              
            
  )
}

export default Login;