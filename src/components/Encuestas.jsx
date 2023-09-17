import React from 'react';
import '../App.css'; // Importa tu hoja de estilos CSS

function Encuestas({ encuestas }) {
  return (
    <div className='Encuestas'>
      <h2>Lista de Encuestas:</h2>
      <ul>
        {encuestas.map((encuesta) => (
          <li key={encuesta.id}>
            <p>Pregunta: {encuesta.pregunta}</p>
            <ul>
              {encuesta.opciones.map((opcion, index) => (
                <li key={index}>Opción {index + 1}: {opcion}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Encuestas;




