import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { usePersonagem } from '../context/PersonagemContext';
import spells1Data from '../assets/data/spells/spells1.js';
import spells2Data from '../assets/data/spells/spells2.js';
import spells3Data from '../assets/data/spells/spells3.js';
import spells4Data from '../assets/data/spells/spells4.js';
import spells5Data from '../assets/data/spells/spells5.js';

function Magias() {
  const { personagem, setPersonagem } = usePersonagem();

  const [spells, setSpells] = useState({
    circle1: [],
    circle2: [],
    circle3: [],
    circle4: [],
    circle5: [],
  });
  
  useEffect(() => {
    setSpells({
      circle1: spells1Data.spells1 || spells1Data,
      circle2: spells2Data.spells2 || spells2Data,
      circle3: spells3Data.spells3 || spells3Data,
      circle4: spells4Data.spells4 || spells4Data,
      circle5: spells5Data.spells5 || spells5Data,
    });
  }, []);


  function addSpell(circle) {
    setPersonagem(prev => ({
      ...prev,
      [`spells${circle}`]:  [
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
            spelldescription: '',
            filterType: false,
            filterSchool: false,
            open: true,
          },
          ...prev[`spells${circle}`],
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

  function openSpell(circle, id) {
    setPersonagem(prev => ({
      ...prev,
      [`spells${circle}`]: prev[`spells${circle}`].map(s => s.id === id ? { 
        ...s, 
        open: !s.open,
      } : s)
    }));
  }

  function handleSpellChange(circle, id, value) {
    var spell = spells[`circle${circle}`].find(s => s.name === value);
    if(spell) {
      setPersonagem(prev => ({
        ...prev,
        [`spells${circle}`]: prev[`spells${circle}`].map(s => s.id === id ? { 
          ...s, 
          namespell: value,
          spelltipo: spell.type?.split(' ')?.at(0),
          spellescola: spell.type?.split(' ')?.at(-1)?.replace(/[()]/g, ""),
          spellexecucao: spell.execution,
          spellalcance: spell.range,
          spellduracao: spell.duration,
          spellalvoarea: spell.target + spell.effect,
          spellresistencia: spell.resistance,
          spelldescription: spell.description + '\n\n' + spell.implements.map(item => `${item.cost}: ${item.description}`).join('\n\n')
        } : s)
      }));
      return;
    }

    setPersonagem(prev => ({
      ...prev,
      [`spells${circle}`]: prev[`spells${circle}`].map(s => s.id === id ? {
         ...s, 
         namespell: value,
         spelltipo: '',
         spellescola: '',
         spellexecucao: '',
         spellalcance: '',
         spellduracao: '',
         spellalvoarea: '',
         spellresistencia: '',
         spelldescription: '',
        } : s)
    }));
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
              <div className="card spell-block mb-2 shadow-sm p-2 rounded" key={spell.id}>
                <div className="d-flex align-items-center gap-2">
                  <CreatableSelect
                    options={spells[`circle${circle}`].filter(s => 
                        (spell.filterType ? spell.spelltipo == '' || s.type.includes(spell.spelltipo) : true) && 
                        (spell.filterSchool ? spell.spellescola == '' || s.type.includes(spell.spellescola) : true)
                      ).map(s => ({ value: s.name, label: s.name }))}
                    value={spell ? { value: spell.namespell, label: spell.namespell } : null}
                    onChange={e => handleSpellChange(circle, spell.id, e?.value || '')}
                    isClearable
                    placeholder="Nome da Magia..."
                    className="flex-grow-1 fw-bold"
                    classNamePrefix="react-select"
                    formatCreateLabel={(inputValue) => `Novo item: "${inputValue}"`}
                  />
                  <button className="btn btn-outline-danger mr-2" onClick={() => removeSpell(circle, spell.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                  <button className="btn btn-outline-secondary mr-2" onClick={() => openSpell(circle, spell.id)}>
                    <i className={`fa-solid ${spell.open ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                  </button>
                </div>
                <div className="mt-1" hidden={!spell.open}>
                  <div className="row mb-2">
                    <div className="col-md-3">
                      <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Tipo</label>
                          <div>
                            <input type="checkbox" className="btn-check" id={`filter-type-${spell.id}`} checked={spell.filterType} onChange={e => handleChange(circle, spell.id, 'filterType', e.target.checked)} />
                            <label className="btn btn-outline-primary btn-sm mb-1 ms-2" htmlFor={`filter-type-${spell.id}`}>Usar na Busca? <i className={spell.filterType ? 'fa-solid fa-check' : 'fa-solid fa-magnifying-glass'}></i></label>
                          </div>
                      </div>
                      <select className="form-select" value={spell.spelltipo} onChange={e => handleChange(circle, spell.id, 'spelltipo', e.target.value)}>
                        {tipos.map(tipo => <option key={tipo} value={tipo}>{tipo || 'Selecione...'}</option>)}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Escola</label>
                          <div>
                            <input type="checkbox" className="btn-check" id={`filter-school-${spell.id}`} checked={spell.filterSchool} onChange={e => handleChange(circle, spell.id, 'filterSchool', e.target.checked)} />
                            <label className="btn btn-outline-primary btn-sm mb-1 ms-2" htmlFor={`filter-school-${spell.id}`}>Usar na Busca? <i className={spell.filterSchool ? 'fa-solid fa-check' : 'fa-solid fa-magnifying-glass'}></i></label>
                          </div>
                      </div>
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
                  <div className="row mb-2 mt-3">
                    <div className="col-md-12">
                      <textarea className="form-control fst-italic" placeholder="Descrição" rows="3" value={spell.spelldescription} onChange={e => handleChange(circle, spell.id, 'spelldescription', e.target.value)} />
                    </div>
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
