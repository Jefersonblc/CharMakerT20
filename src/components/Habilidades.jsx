import React from 'react';
import { usePersonagem } from '../context/PersonagemContext';

function Habilidades() {
  const { personagem, setPersonagem } = usePersonagem();

  function addAbility() {
    setPersonagem(prev => ({
      ...prev,
      abilities: [
        ...prev.abilities,
        {
          id: Date.now(),
          abilityname: '',
          abilitydesc: ''
        }
      ]
    }));
  }

  function removeAbility(id) {
    if (window.confirm('Tem certeza que deseja remover esta habilidade?')) {
      setPersonagem(prev => ({
        ...prev,
        abilities: prev.abilities.filter(a => a.id !== id)
      }));
    }
  }

  function handleChange(id, field, value) {
    setPersonagem(prev => ({
      ...prev,
      abilities: prev.abilities.map(a => a.id === id ? { ...a, [field]: value } : a)
    }));
  }

  return (
    <div className="form-section">
      <button onClick={addAbility} className="btn btn-secondary mt-2">
        <i className="fas fa-plus"></i> Add Habilidade / Poder
      </button>
      <div className="dynamic-list mt-3">
        {personagem.abilities.map(ability => (
          <div className="card ability-block mb-2 shadow-sm p-3 rounded" key={ability.id}>
            <div className="d-flex align-items-center mb-2">
              <input type="text" className="form-control" placeholder="Nome da Habilidade" value={ability.abilityname} onChange={e => handleChange(ability.id, 'abilityname', e.target.value)} />
              <button className="btn btn-outline-danger mx-2" onClick={() => removeAbility(ability.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
            <div className="mt-3">
              <label className="form-label">Descrição</label>
              <textarea className="form-control" rows={2} placeholder="Descrição" value={ability.abilitydesc} onChange={e => handleChange(ability.id, 'abilitydesc', e.target.value)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Habilidades;
