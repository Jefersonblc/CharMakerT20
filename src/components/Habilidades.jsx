import { useEffect, useState, useMemo } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { usePersonagem } from '../context/PersonagemContext';
import powersData from '../assets/data/powers.js';
import { VirtualizedMenuList } from './VirtualizedMenuList';

function Habilidades() {
  const { personagem, setPersonagem } = usePersonagem();
  
  const [powers, setPowers] = useState([]);

  useEffect(() => {
    setPowers(powersData.powers || powersData);
  }, []);

  const powersOptions = useMemo(() => powers.map(power => ({ 
    value: power.name, 
    label: `${power.name} (${power.type})`,
    type: power.type,
    description: power.description
  })), [powers]);

  const powersTypes = [...new Set(powersOptions.map(p=>p.type))].map(type => ({ value: type, label: type }));

  function addAbility() {
    setPersonagem(prev => ({
      ...prev,
      abilities: [
        ...prev.abilities,
        {
          id: Date.now(),
          name: '',
          type: '',
          description: ''
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

  function handleAbilityChange(id, value) {
    var power = powers.find(s => s.name === value);
    if(power) {
      setPersonagem(prev => ({
        ...prev,
        abilities: prev.abilities.map(a => a.id === id ? { 
          ...a, 
          name: power.name,
          type: power.type,
          description: power.description
        } : a)
      }));
      return;
    }

    setPersonagem(prev => ({
      ...prev,
      abilities: prev.abilities.map(a => a.id === id ? { 
        ...a, 
        name: value,
        type: '',
        description: ''
      } : a)
    }));
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
            <div className="d-flex align-items-center mb-2 gap-2">
              <CreatableSelect
                options={powersOptions.filter(p => ability.type !== '' ? p.type === ability.type : true)}
                value={ability.name ? { value: ability.name, label: ability.name } : null}
                onChange={e => handleAbilityChange(ability.id, e?.value || '')}
                components={{ MenuList: VirtualizedMenuList }}
                isClearable
                placeholder="Nome da Habilidade"
                className="flex-grow-1"
                classNamePrefix="react-select"
                formatCreateLabel={(inputValue) => `Novo item: "${inputValue}"`}
              />
              <Select name="Tipo"
                options={powersTypes}
                value={ability.type ? { value: ability.type, label: ability.type } : null}
                onChange={e => handleChange(ability.id, 'type', e?.value || '')}
                isClearable
                placeholder="Tipo..."
                className="w-25"
                classNamePrefix="react-select"
              />
              <button className="btn btn-outline-danger mr-2" onClick={() => removeAbility(ability.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
            <div className="mt-3">
              <label className="form-label">Descrição</label>
              <textarea className="form-control" rows={2} placeholder="Descrição" value={ability.description} onChange={e => handleChange(ability.id, 'description', e.target.value)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Habilidades;
