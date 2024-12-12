import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css'


function FrmPersona({addPersona}) {
  const [unaPersona, setPersona] = useState({nombre: "", esMayorDeEdad: false, ciclo: ""});
  
  return (
    <form onSubmit={(e) => {e.preventDefault(); addPersona(unaPersona)}}>
      <fieldset className='form'>
        <legend>Persona Formulario</legend>
        <label htmlFor='nombre'>Nombre Completo:</label>
        <input type='text' name='nombre' id='nombre' value={unaPersona.nombre} onChange={e => setPersona({ ...unaPersona, nombre: e.target.value })} />

        <label htmlFor='mayor-edad'>¿Es mayor de edad?</label>
        <input type='checkbox' name='mayor-edad' id='mayor-edad' checked={unaPersona.esMayorDeEdad} onChange={e => setPersona({ ...unaPersona, esMayorDeEdad: e.target.checked })} />

        <label>Seleccione Ciclo:</label>
        <div className='divRadio'>
          <input type='radio' name='ciclo' id='medio' value={"medio"} checked={unaPersona.ciclo == "medio"} onChange={e => setPersona({ ...unaPersona, ciclo: e.target.value })} />
          <label htmlFor='medio'>Medio</label>
          <input type='radio' name='ciclo' id='superior' value={"superior"} checked={unaPersona.ciclo == "superior"} onChange={e => setPersona({ ...unaPersona, ciclo: e.target.value })} />
          <label htmlFor='superior'>Superior</label>
        </div>
      </fieldset>
      <button type='submit'>Añadir</button>
    </form>
  )
}

export default FrmPersona


PropTypes.FrmPersona = {
  addPersona: PropTypes.func,
  
}