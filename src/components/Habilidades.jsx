import { useEffect, useState, useMemo } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { usePersonagem } from '../context/PersonagemContext';
import powersData from '../assets/data/powers.js';
import { VirtualizedMenuList } from './VirtualizedMenuList';
import racesData from '../assets/data/races.json';
import classesData from '../assets/data/classes.js';

function Habilidades() {
  const { personagem, setPersonagem } = usePersonagem();
  
  const [powers, setPowers] = useState([]);
  const [races, setRaces] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setPowers(powersData.powers || powersData);
    setRaces(racesData.races || racesData);
    setClasses(classesData.classes || classesData);
  }, []);

  const raceAbilities = races.flatMap(r => r.abilities.map(a => ({...a, type: 'Padrão Racial'})) || []);
  const classAbilities = classes.flatMap(c => c.abilities.map(a => ({...a, type: `${c.nome}`})) || []);


  const powersOptions = useMemo(() => [...powers, ...raceAbilities, ...classAbilities].map(power => ({ 
    value: power.name, 
    label: `${power.name} (${power?.type})`,
    type: power?.type,
    description: power?.description
  })), [powers]);

  const powersTypes = [
    ...[...new Set(powersOptions.map(p=>p.type))].map(type => ({ value: type, label: type }))
  ]

  function addAbility() {
    setPersonagem(prev => ({
      ...prev,
      abilities: [
        {
          id: crypto.randomUUID(),
          name: '',
          type: '',
          description: '',
          open: true
        },
        ...prev.abilities,
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
  
  function openAbility(id) {
    setPersonagem(prev => ({
      ...prev,
      abilities: prev.abilities.map(a => a.id === id ? { 
        ...a, 
        open: !a.open
      } : a)
    }));
  }

  function handleAbilityChange(id, value) {
    var power = powersOptions.find(s => s.value === value);
    if(power) {
      setPersonagem(prev => ({
        ...prev,
        abilities: prev.abilities.map(a => a.id === id ? { 
          ...a, 
          name: power.value,
          type: power.type,
          description: power.description,
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
        description: '',
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
          <div className="card ability-block mb-2 shadow-sm p-2 rounded" key={ability.id}>
            <div className="d-flex align-items-center gap-2">
              <CreatableSelect
                options={powersOptions.filter(p => ability.type !== '' ? p.type === ability.type : true)}
                value={ability.name ? { value: ability.name, label: ability.name } : null}
                onChange={e => handleAbilityChange(ability.id, e?.value || '')}
                components={{ MenuList: VirtualizedMenuList }}
                isClearable
                placeholder="Nome da Habilidade..."
                className="flex-grow-1 fw-bold"
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
              <button className="btn btn-outline-secondary mr-2" onClick={() => openAbility(ability.id)}>
                <i class={`fa-solid fa-caret-up ${ability.open ? '' : 'fa-flip-vertical'}`}></i>
              </button>
            </div>
            <div className="mt-2" hidden={!ability.open}>
              <textarea id={`ability-description-${ability.id}`}  className="form-control fst-italic" placeholder="Descrição" rows="3" value={ability.description} onChange={e => handleChange(ability.id, 'description', e.target.value)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Habilidades;
