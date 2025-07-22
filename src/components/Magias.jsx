import React from 'react';
import { usePersonagem } from '../context/PersonagemContext';

function Magias() {
  const { personagem, setPersonagem } = usePersonagem();

  function addSpell(circle) {
    setPersonagem(prev => ({
      ...prev,
      [`spells${circle}`]:  [
          ...prev[`spells${circle}`],
          {
            id: Date.now(),
            namespell: '',
            spelltipo: '',
            spellescola: '',
            spellexecucao: '',
            spellalcance: '',
            spellduracao: '',
            spellalvoarea: '',
            spellresistencia: '',
            spelldescription: ''
          }
      ]
    }));
  }

  function removeSpell(circle, id) {
    if (window.confirm('Tem certeza que deseja remover esta magia?')) {
      setPersonagem(prev => ({
        ...prev,
        [`spells${circle}`]: prev[`spells${circle}`].filter(s => s.id !== id)
      }));
    }
  }

  function handleChange(circle, id, field, value) {
    setPersonagem(prev => ({
      ...prev,
      [`spells${circle}`]: prev[`spells${circle}`].map(s => s.id === id ? { ...s, [field]: value } : s)
    }));
  }

  const tipos = ['', 'Universal', 'Arcana', 'Divina'];
  const escolas = ['', 'Abjuração', 'Adivinhação', 'Convocação', 'Encantamento', 'Evocação', 'Ilusão', 'Necromancia', 'Transmutação'];

  return (
    <div className="form-section">
      {[1,2,3,4,5].map(circle => (
        <div className="dynamic-list accordion mb-3" key={circle}>
          <div className="d-flex align-items-center mb-2 border-bottom-red">
            <h5><i className="fas fa-fire"></i> {circle}º Círculo</h5>
            <button onClick={() => addSpell(circle)} className="btn btn-sm btn-outline-primary mb-2 mx-2"><i className="fas fa-plus"></i></button>
          </div>
          <div>
            {personagem[`spells${circle}`].map(spell => (
              <div className="card spell-block mb-2 shadow-sm p-3 rounded" key={spell.id}>
                <div className="d-flex align-items-center mb-2">
                  <input type="text" className="form-control" placeholder="Nome da Magia" value={spell.namespell} onChange={e => handleChange(circle, spell.id, 'namespell', e.target.value)} />
                  <button className="btn btn-outline-danger mx-2" onClick={() => removeSpell(circle, spell.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
                <div className="row mb-2">
                  <div className="col-md-3">
                    <label className="form-label">Tipo</label>
                    <select className="form-select" value={spell.spelltipo} onChange={e => handleChange(circle, spell.id, 'spelltipo', e.target.value)}>
                      {tipos.map(tipo => <option key={tipo} value={tipo}>{tipo || 'Selecione...'}</option>)}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Escola</label>
                    <select className="form-select" value={spell.spellescola} onChange={e => handleChange(circle, spell.id, 'spellescola', e.target.value)}>
                      {escolas.map(escola => <option key={escola} value={escola}>{escola || 'Selecione...'}</option>)}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Execução</label>
                    <input type="text" className="form-control" value={spell.spellexecucao} onChange={e => handleChange(circle, spell.id, 'spellexecucao', e.target.value)} />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Alcance</label>
                    <input type="text" className="form-control" value={spell.spellalcance} onChange={e => handleChange(circle, spell.id, 'spellalcance', e.target.value)} />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Duração</label>
                    <input type="text" className="form-control" value={spell.spellduracao} onChange={e => handleChange(circle, spell.id, 'spellduracao', e.target.value)} />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Alvo/Área/Efeito</label>
                    <input type="text" className="form-control" value={spell.spellalvoarea} onChange={e => handleChange(circle, spell.id, 'spellalvoarea', e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Resistência</label>
                    <input type="text" className="form-control" value={spell.spellresistencia} onChange={e => handleChange(circle, spell.id, 'spellresistencia', e.target.value)} />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-12">
                    <label className="form-label">Descrição</label>
                    <textarea className="form-control" rows={2} value={spell.spelldescription} onChange={e => handleChange(circle, spell.id, 'spelldescription', e.target.value)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Magias;
