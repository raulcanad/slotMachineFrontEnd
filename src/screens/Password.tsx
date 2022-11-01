import React, {Fragment, useState} from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <Fragment>
            <h2>Login</h2>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="UserName" className="form-control" onChange={handleInputChange} name="name"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Password" className="form-control" onChange={handleInputChange} name="password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            
        </Fragment>
    );
}
 
export default Formulario;