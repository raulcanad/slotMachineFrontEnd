import { ThemeContext } from "@emotion/react";

const BASE = 'http://localhost:8080';

const apiFetch = ( metodo: string, ruta: string, body = {}) => {
   
        return fetch(BASE + ruta,
            {
                method: "POST",
                headers: {
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({'username':'Pepi','password':'12345'})
            })
            .then(response => { return response.json() })
            .then(json => { return json })
    }

    
export default apiFetch;
 