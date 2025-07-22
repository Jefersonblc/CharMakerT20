import React, { useState } from 'react';
import { usePersonagem } from '../context/PersonagemContext';

function Exportar() {
  const { personagem } = usePersonagem();
  const [json, setJson] = useState('');

  function handleExport() {
    setJson(JSON.stringify(personagem, null, 2));
  }

  return (
    <div className="form-section">
      <button onClick={handleExport} className="btn btn-secondary mt-2">
        <i className="fas fa-code"></i> Gerar JSON
      </button>
      <h2>Resultado</h2>
      <pre>{json}</pre>
    </div>
  );
}
export default Exportar;
