import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4'
import PropTypes from 'prop-types'
const Formulario = ({crearCita}) => {

    //crear state de citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const [error, setError] = useState(false)

    //funcion que se ejecuta cada vez que el usuario escribe en el input
    const handleChange = e =>{
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }
    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita

    //Cuando el usuario envia el form
    const submitCita = e => {
        e.preventDefault()

        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true)
            return
        }
        //Eliminar el  mensaje previo
        setError(false)
        //asignar un ID
        cita.id = uuid()
        //Crear la cita
        crearCita(cita)
        //Reiniciar el form
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error"> Todos los campos son obligatorios</p> :null}
            <form
                onSubmit={submitCita}
            >
                <label>nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agrega cita
                </button>
            </form>
        </Fragment>
    );
}
Formulario.propTypes={
    crearCita: PropTypes.func.isRequired
}
export default Formulario;