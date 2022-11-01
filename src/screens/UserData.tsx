import React, {Fragment, useState} from 'react';

const Formulario2 = () => {


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
            <h2>Tus Datos</h2>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Name" className="form-control" onChange={handleInputChange} name="name"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="LastName" className="form-control" onChange={handleInputChange} name="last_name"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="IdCard" className="form-control" onChange={handleInputChange} name="dni"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Birthday" className="form-control" onChange={handleInputChange} name="birthday"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Phone" className="form-control" onChange={handleInputChange} name="phone"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            
        </Fragment>
    );
}
 
export default Formulario2;
