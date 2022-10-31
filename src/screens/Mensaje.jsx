import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    
    <Card sx={{ minWidth: 275   }}>
      <CardContent  sx={{ background:'#5dc460'  }} >
        <Typography sx={{ textAlign:'center'  }}>
          Ejemplo de donde quiero que aparezca los datos del usuario      
        </Typography>
      </CardContent>
    </Card>
    
  );
}