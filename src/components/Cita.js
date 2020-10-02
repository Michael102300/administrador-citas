import React from 'react';
import PropTypes from 'prop-types'
const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p> Mascota: <spam>{cita.mascota}</spam></p>
        <p> Propietario: <spam>{cita.propietario}</spam></p>
        <p> Fecha: <spam>{cita.fecha}</spam></p>
        <p> Hora: <spam>{cita.hora}</spam></p>
        <p> Sintomas: <spam>{cita.sintomas}</spam></p>
        <button
            className ="buttton eliminar u-full-width"
            onClick = {()=> eliminarCita(cita.id)}
        >
            Eliminar &times;
        </button>

    </div>
)
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita;