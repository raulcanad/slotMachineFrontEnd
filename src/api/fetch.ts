import { ThemeContext } from "@emotion/react";

const BASE = 'http://localhost/Proyecto2022/index.php';

const apiFetch = ( metodo: string, ruta: string, body = {}) => {
   
        return fetch(BASE + ruta,
            {
                body: JSON.stringify(body),
                headers: {
                    method: 'POST',
                    "Content-Type": 'form-data'
                }


            })
            .then(response => { return response.json() })
            .then(json => { return json })
            .catch(function (error) { console.log(error) })
    }


export default apiFetch;
