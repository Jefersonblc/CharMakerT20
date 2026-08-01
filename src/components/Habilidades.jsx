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
  const [isSorting, setIsSorting] = useState(false);
  const [draggedAbilityId, setDraggedAbilityId] = useState(null);
  const [dragOverTarget, setDragOverTarget] = useState(null);

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

  function reorderAbilities(draggedId, targetId, position = 'after') {
    if (!draggedId || !targetId || draggedId === targetId) {
      return;
    }

    setPersonagem(prev => {
      const nextAbilities = [...prev.abilities];
      const fromIndex = nextAbilities.findIndex(ability => ability.id === draggedId);
      const toIndex = nextAbilities.findIndex(ability => ability.id === targetId);

      if (fromIndex === -1 || toIndex === -1) {
        return prev;
      }

      const [movedAbility] = nextAbilities.splice(fromIndex, 1);
      const adjustedToIndex = toIndex > fromIndex ? toIndex - 1 : toIndex;
      const insertIndex = position === 'before' ? adjustedToIndex : adjustedToIndex + 1;

      nextAbilities.splice(Math.max(0, Math.min(insertIndex, nextAbilities.length)), 0, movedAbility);

      return {
        ...prev,
        abilities: nextAbilities,
      };
    });
  }

  return (
    <div className="form-section">
      <div className="d-flex flex-wrap gap-2 mt-2">
        <button onClick={addAbility} className="btn btn-secondary">
          <i className="fas fa-plus"></i> Add Habilidade / Poder
        </button>
        <button
          onClick={() => setIsSorting(prev => !prev)}
          className={`btn ${isSorting ? 'btn-primary' : 'btn-outline-secondary'}`}
        >
          <i className={`fas ${isSorting ? 'fa-times' : 'fa-arrows-up-down-left-right'}`}></i>{' '}
          {isSorting ? 'Finalizar Ordenação' : 'Ordenar'}
        </button>
      </div>
      {isSorting && (
        <div className="text-muted small mt-2">
          Arraste os cards para alterar a ordem dos poderes.
        </div>
      )}
      <div className="dynamic-list mt-3">
        {personagem.abilities.map(ability => (
          <div
            className="mb-2"
            key={ability.id}
            onDragOver={event => {
              if (isSorting) {
                event.preventDefault();
                const cardElement = event.currentTarget.querySelector('.ability-sortable-card');
                const rect = cardElement?.getBoundingClientRect();

                if (!rect) {
                  return;
                }

                const cursorOffset = event.clientY - rect.top;
                let position = null;

                if (cursorOffset <= 4) {
                  position = 'before';
                } else if (cursorOffset >= rect.height - 4) {
                  position = 'after';
                }

                setDragOverTarget(prev => {
                  if (prev?.id === ability.id && prev?.position === position) {
                    return prev;
                  }

                  return position ? { id: ability.id, position } : null;
                });
              }
            }}
            onDragLeave={() => {
              if (isSorting && dragOverTarget?.id === ability.id) {
                setDragOverTarget(null);
              }
            }}
            onDrop={() => {
              if (isSorting) {
                reorderAbilities(draggedAbilityId, ability.id, dragOverTarget?.position || 'after');
                setDraggedAbilityId(null);
                setDragOverTarget(null);
              }
            }}
          >
            
            {dragOverTarget?.id === ability.id && dragOverTarget?.position === 'before' && (
              <div className="ability-drop-marker ability-drop-marker-before" />
            )}
            <div
              className={`card ability-block shadow-sm p-2 rounded ${isSorting ? 'border border-primary ability-sortable-card' : ''}`}
              draggable={isSorting}
              onDragStart={() => setDraggedAbilityId(ability.id)}
              onDragEnd={() => {
                setDraggedAbilityId(null);
                setDragOverTarget(null);
              }}
            >
              <div className="d-flex align-items-center gap-2">
                {isSorting && <i className="fas fa-grip-vertical text-muted"></i>}
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
                  <i className={`fa-solid ${ability.open ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                </button>
              </div>
              <div className="mt-2" hidden={!ability.open}>
                <textarea id={`ability-description-${ability.id}`}  className="form-control fst-italic" placeholder="Descrição" rows="3" value={ability.description} onChange={e => handleChange(ability.id, 'description', e.target.value)} />
              </div>
            </div>
            {dragOverTarget?.id === ability.id && dragOverTarget?.position === 'after' && (
              <div className="ability-drop-marker ability-drop-marker-after" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Habilidades;
