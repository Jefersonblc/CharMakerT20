import React from 'react';
import { usePersonagem } from '../context/PersonagemContext';

function Ataques() {
  const { personagem, setPersonagem } = usePersonagem();

  function addAttack() {
    setPersonagem(prev => ({
      ...prev,
      attacks: [
        ...prev.attacks,
        {
          id: Date.now(),
          attackname: '',
          attackbonus: 0,
          attackdano: '',
          attackdanoextra: 0,
          attackcritico: 20,
          attackmultiplicador: 2,
          attackdadosextra: 0,
          attackpericiaUsada: 'Luta',
          attacktipoDano: '',
          attackalcance: '',
          attackatributodano: '@for_mod',
          attackdesc: ''
        }
      ]
    }));
  }

  function removeAttack(id) {
    if (window.confirm('Tem certeza que deseja remover este item?')) {
      setPersonagem(prev => ({
        ...prev,
        attacks: prev.attacks.filter(a => a.id !== id)
      }));
    }
  }

  function handleChange(id, field, value) {
    setPersonagem(prev => ({
      ...prev,
      attacks: prev.attacks.map(a => a.id === id ? { ...a, [field]: value } : a)
    }));
  }

  return (
    <div className="form-section">
      <button onClick={addAttack} className="btn btn-secondary mt-2">
        <i className="fas fa-plus"></i> Add Ataque
      </button>
      <div className="dynamic-list accordion mt-3">
        {personagem.attacks.map(attack => (
          <div className="card attack-block mb-2 shadow-sm p-3 rounded" key={attack.id}>
            <div className="row g-2">
              <div className="col-md-4">
                <label className="form-label">Nome do Ataque</label>
                <input type="text" className="form-control" value={attack.attackname} onChange={e => handleChange(attack.id, 'attackname', e.target.value)} />
              </div>
              <div className="col-md-2">
                <label className="form-label">Bônus Ataque</label>
                <input type="number" className="form-control" value={attack.attackbonus} onChange={e => handleChange(attack.id, 'attackbonus', Number(e.target.value))} />
              </div>
              <div className="col-md-2">
                <label className="form-label">Dano</label>
                <input type="text" className="form-control" value={attack.attackdano} onChange={e => handleChange(attack.id, 'attackdano', e.target.value)} />
              </div>
              <div className="col-md-1">
                <label className="form-label">Dano Extra</label>
                <input type="number" className="form-control" value={attack.attackdanoextra} onChange={e => handleChange(attack.id, 'attackdanoextra', Number(e.target.value))} />
              </div>
              <div className="col-md-2">
                <label className="form-label">Crítico</label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" value={attack.attackcritico} onChange={e => handleChange(attack.id, 'attackcritico', Number(e.target.value))} />
                  <span className="input-group-text fw-bold">/x</span>
                  <input type="number" className="form-control" value={attack.attackmultiplicador} onChange={e => handleChange(attack.id, 'attackmultiplicador', Number(e.target.value))} />
                </div>
              </div>
              <div className="col-md-1 d-flex align-items-center pt-3">
                <button className="btn btn-outline-danger mx-2" onClick={() => removeAttack(attack.id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="row g-2 mt-2">
              <div className="col-md-2">
                <label className="form-label">Dados Extra</label>
                <input type="number" className="form-control" value={attack.attackdadosextra} onChange={e => handleChange(attack.id, 'attackdadosextra', Number(e.target.value))} />
              </div>
              <div className="col-md-2">
                <label className="form-label">Perícia Utilizada</label>
                <select className="form-select" value={attack.attackpericiaUsada} onChange={e => handleChange(attack.id, 'attackpericiaUsada', e.target.value)}>
                  <option value="Atuação">Atuação</option>
                  <option value="Luta">Luta</option>
                  <option value="Pontaria">Pontaria</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Tipo de Dano</label>
                <input type="text" className="form-control" value={attack.attacktipoDano} onChange={e => handleChange(attack.id, 'attacktipoDano', e.target.value)} />
              </div>
              <div className="col-md-2">
                <label className="form-label">Alcance</label>
                <input type="text" className="form-control" value={attack.attackalcance} onChange={e => handleChange(attack.id, 'attackalcance', e.target.value)} />
              </div>
              <div className="col-md-3">
                <label className="form-label">Atributo no Dano</label>
                <select className="form-select" value={attack.attackatributodano} onChange={e => handleChange(attack.id, 'attackatributodano', e.target.value)}>
                  <option value="@for_mod">Força</option>
                  <option value="@des_mod">Destreza</option>
                  <option value="@con_mod">Constituição</option>
                  <option value="@int_mod">Inteligência</option>
                  <option value="@sab_mod">Sabedoria</option>
                  <option value="@car_mod">Carisma</option>
                  <option value="0">Nenhum</option>
                </select>
              </div>
            </div>
            <div className="mt-3">
              <label className="form-label">Descrição</label>
              <textarea className="form-control" rows={2} value={attack.attackdesc} onChange={e => handleChange(attack.id, 'attackdesc', e.target.value)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Ataques;
