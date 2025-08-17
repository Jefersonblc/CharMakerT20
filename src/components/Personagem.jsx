import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { usePersonagem } from '../context/PersonagemContext';
import racesData from '../assets/data/races.json';
import originsData from '../assets/data/origins.js';
import classesData from '../assets/data/classes.js';
import deitiesData from '../assets/data/deities.js';

function Personagem() {
  const {
    personagem, setPersonagem,
    attributes, setAttributes,
    anyAttribute, setAnyAttribute,
    pointbuy, setPointbuy
  } = usePersonagem();

  const [races, setRaces] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [classes, setClasses] = useState([]);
  const [deities, setDeities] = useState([]);

  useEffect(() => {
    setRaces(racesData.races || racesData);
    setOrigins(originsData.orgins || originsData);
    setClasses(classesData.classes || classesData);
    setDeities(deitiesData.deities || deitiesData);
  }, []);

  const pointbuyTable = [
    { habilidade: -2, custo: -1, rolagem: "7 ou menos", min: null, max: 7 },
    { habilidade: -1, custo: -1, rolagem: "8-9", min: 8, max: 9 },
    { habilidade: 0, custo: 0, rolagem: "10-11", min: 10, max: 11 },
    { habilidade: 1, custo: 1, rolagem: "12-13", min: 12, max: 13 },
    { habilidade: 2, custo: 2, rolagem: "14-15", min: 14, max: 15 },
    { habilidade: 3, custo: 4, rolagem: "16-17", min: 16, max: 17 },
    { habilidade: 4, custo: 7, rolagem: "18-19", min: 18, max: 19 },
    { habilidade: 5, custo: 10, rolagem: "20 ou mais", min: 20, max: null }
  ];

  const opcoesTamanho = [
    { value: '5', label: 'Minúsculo' },
    { value: '2', label: 'Pequeno' },
    { value: '0', label: 'Médio' },
    { value: '-2', label: 'Grande' },
    { value: '-5', label: 'Enorme' },
    { value: '-10', label: 'Colossal' },
  ];

  useEffect(() => {
    const updated = {};

    Object.entries(attributes).forEach(([key, attr]) => {
      updated[key] = (attr.mod || 0) + (attr.points || 0);
    });

    setPersonagem(prev => ({ ...prev, ...updated }));
  }, [attributes]);


  function calculatePointbuy() {
    const totalSpent = Object.values(attributes).reduce((sum, attr) => sum + getPointbuyCost(attr.points), 0);
    const totalAvailable = pointbuy.limit - totalSpent;
    setPointbuy({ ...pointbuy, spent: totalSpent, available: totalAvailable });
  }

  function getPointbuyCost(ponto) {
    const pointbuyEntry = pointbuyTable.find(entry => entry.habilidade === ponto);
    return pointbuyEntry ? pointbuyEntry.custo : 0;
  }

  // Atualiza campo do personagem
  function handleChange(e) {
    const { name, value, type } = e.target;
    setPersonagem(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) : value
    }));
  };

  function handleSizeChange(e) {
    const { value } = e;
    setPersonagem(prev => ({ ...prev, tamanho: value }));
  };

  // Atualiza atributos e exceções da raça ao selecionar
  function updateRaceAttributes(selectedRaceName) {
    const selectedRace = races.find(r => r.name === selectedRaceName);
    if (!selectedRace || !selectedRace.attributes) {
      Object.keys(attributes).forEach(attr => {
        setAttributes(prev => ({
          ...prev,
          [attr]: { ...prev[attr], mod: 0, any: false, except: false }
        }));
      });
      setAnyAttribute({ avaliable: 0, selected: 0 });
      setPersonagem(prev => ({
        ...prev,
        abilities: prev.abilities.filter(a => a.type !== "Padrão Racial")
      }));
      return;
    }

    const anyAttributeCount = selectedRace.attributes.filter(item => item.attr === 'any').length;
    setAnyAttribute({ avaliable: anyAttributeCount, selected: 0 });


    Object.keys(attributes).forEach(attr => {
      const raceModifier = selectedRace.attributes.find(item => item.attr === attr);
      setAttributes(prev => ({
        ...prev,
        [attr]: {
          ...prev[attr],
          mod: raceModifier?.mod || 0,
          any: anyAttributeCount > 0,
          except: false
        }
      }));
    });

    if (selectedRace.attributeException) {
      setAttributes(prev => ({
        ...prev,
        [selectedRace.attributeException]: {
          ...prev[selectedRace.attributeException],
          except: true
        }
      }));
    }

    setPersonagem(prev => ({ 
      ...prev, 
      tamanho: opcoesTamanho.find(item => item.label === selectedRace.size)?.value || prev.tamanho,
      deslocamento: selectedRace.displacement + " Metros" || prev.deslocamento,
      abilities: [
        ...prev.abilities.filter(a => !a.raceDefault), 
        ...selectedRace.abilities.map(ability => ({       
          id: crypto.randomUUID(),
          name: ability.name,
          type: "Padrão Racial",
          description: ability.description,
          raceDefault: true
        }))
      ]
    }));
  }

  function handleChangeAttribute(attr, e) {
    const value = parseInt(e.target.value) || 0;
    const cost = getPointbuyCost(value);
    const diference = value - attributes[attr].points;

    if (value < -2 || value > 5) return

    attributes[attr].points = value;
    setAttributes(prev => ({
      ...prev,
      [attr]: { ...prev[attr], points: value }
    }));

    calculatePointbuy();
  }

  function handleAttrCheckboxChange(attr, e) {
    const checked = e.target.checked;
    if (checked && anyAttribute.selected >= anyAttribute.avaliable) {
      return;
    }

    setAttributes(prev => {
      const prevChecked = prev[attr].mod === 1;
      let newSelectedAnyCount = anyAttribute.selected;
      if (checked && !prevChecked) newSelectedAnyCount++;
      if (!checked && prevChecked) newSelectedAnyCount--;
      setAnyAttribute({ avaliable: anyAttribute.avaliable, selected: newSelectedAnyCount });
      return {
        ...prev,
        [attr]: { ...prev[attr], mod: checked ? 1 : 0 }
      };
    });
  }

  function handlePointbuyChange(e) {
    const value = parseInt(e.target.value) || 0;
    setPointbuy({ ...pointbuy, limit: value, available: value - pointbuy.spent });
  }

  // Handler para mudança de raça
  function onRaceChange(option) {
    const raceName = option ? option.value : '';
    setPersonagem(prev => ({ ...prev, trace: raceName }));
    updateRaceAttributes(raceName);
  };

  function onClassChange(option) {
    const className = option ? option.value : '';
    const {selectedClass, isSubclass} = getClassByName(className);
    
    if(selectedClass && isSubclass){
      const { nome, ...variante } = selectedClass.variante;
      Object.assign(selectedClass, variante);
    }

    Object.values(personagem.pericias).forEach((pericia) => {
      personagem.pericias[pericia.id].treined = selectedClass?.treinedSkills?.includes(pericia.nome) || false;
    })
    
    setPersonagem(prev => ({
      ...prev,
      tlevel: className,
      vidaclassinit: selectedClass?.pv || 0,
      vidaclasslv: selectedClass?.pv_per_level || 0,
      manaclasslv: selectedClass?.pm || 0,
      treinedSkills: selectedClass?.treinedSkills || [],
      treinedSkillsOr: selectedClass?.treinedSkillsOr || [],
      skills: selectedClass?.skills || [],
      extraSkills: selectedClass?.extraSkills || 0,
      proficiencias: selectedClass?.proficiencies?.join(', ') || '',
    }));

    if(selectedClass){
      updateClassAbilities(selectedClass, isSubclass, personagem.charnivel);
    }
  };

  function getClassByName(name) {
    let selectedClass = classes.find(r => r.nome === name);
    let isSubclass = false;
    
    if(!selectedClass) {
      selectedClass = classes.find(r => r.variante.nome === name);
      isSubclass = selectedClass ? true : false;
    }
    
    return { selectedClass, isSubclass };
  }

  function updateClassAbilities(selectedClass, isSubclass, charnivel) {
    setPersonagem(prev => ({
      ...prev,
      abilities: [
        ...selectedClass.abilities.filter(a => a.default && (isSubclass ? a.subclassOnly : a.mainclassOnly ) && a.nivel <= charnivel ).map(ability => ({       
          id: crypto.randomUUID(),
          name: ability.name,
          type: selectedClass.nome,
          description: ability.description,
          classDefault: true
        })),
        ...prev.abilities.filter(a => !a.classDefault),
      ]
    }));
  }

  function onLevelChange(e) {
    const { value } = e.target;
    if (isNaN(value) || value < 1 || value > 20) return;
    const charnivel = parseInt(value);
    setPersonagem(prev => ({
      ...prev,
      charnivel: charnivel
    }));

    const {selectedClass, isSubclass} = getClassByName(personagem.tlevel);
    if(selectedClass){
      updateClassAbilities(selectedClass, isSubclass, charnivel);
    }
  };

  function onOriginChange(option) {
    setPersonagem(prev => ({
      ...prev,
      torigin: option ? option.value : ''
    }));
  };

  function onDeityChange(option) {
    setPersonagem(prev => ({
      ...prev,
      divindade: option ? option.value : ''
    }));
  };

  function getLifeTotal() {
    personagem.vidatotal = personagem.vidaclassinit +
    (Math.max(personagem.con, 0) * personagem.charnivel) +
    (personagem.vidaclasslv * (personagem.charnivel - 1)) +
    (personagem.vidaextralv * personagem.charnivel) +
    personagem.vidaextra;

    return personagem.vidatotal;
  }

  function getManaTotal() {
    personagem.manatotal = (personagem.manaclasslv * (personagem.charnivel)) +
    (personagem.manaextralv * personagem.charnivel) +
    personagem.manaextra;

    return personagem.manatotal;
  }

  function getDefesaTotal() {
    const defesaAtributo = personagem.defesaatributo !== '' ? personagem[personagem.defesaatributo] : 0;
    return personagem.defesatotal + personagem.defesaoutros + 
      personagem.defesaarmadura + personagem.defesaescudo + defesaAtributo
  }

  return (
    <div className="form-section">

      <div className="row g-2 mb-3">
        <div className="col-md">
          <label className="form-label">Nome</label>
          <input className="form-control" name="playername" value={personagem.playername} onChange={handleChange} />
        </div>
        <div className="col-md-2">
          <label className="form-label">Nível</label>
          <input type="number" className="form-control" name="charnivel" value={personagem.charnivel} onChange={onLevelChange} />
        </div>
      </div>

      <div className="row g-2 mb-3">
        <div className="col-md">
          <label className="form-label">Raça</label>
          <Select
            options={races.map(r => ({ value: r.name, label: r.name }))}
            value={races.find(r => r.name === personagem.trace) ? { value: personagem.trace, label: personagem.trace } : null}
            onChange={onRaceChange}
            isClearable
            placeholder="Selecione..."
            classNamePrefix="react-select"
          />
        </div>

        <div className="col-md">
          <label className="form-label">Classe</label>
          <Select
            options={classes.flatMap(c => [c.nome, c.variante?.nome]).filter(Boolean).map(c => ({ value: c, label: c }))}
            value={classes.find(c => c.nome === personagem.tlevel || c.variante?.nome === personagem.tlevel) ? { value: personagem.tlevel, label: personagem.tlevel } : null}
            onChange={onClassChange}
            isClearable
            placeholder="Selecione..."
            classNamePrefix="react-select"
          />
        </div>

        <div className="col-md">
          <label className="form-label">Origem</label>
          <Select
            options={origins.map(o => ({ value: o.nome, label: o.nome }))}
            value={origins.find(o => o.nome === personagem.torigin) ? { value: personagem.torigin, label: personagem.torigin } : null}
            onChange={onOriginChange}
            isClearable
            placeholder="Selecione..."
            classNamePrefix="react-select"
          />
        </div>

        <div className="col-md">
          <label className="form-label">Divindade</label>
          <Select
            options={deities.map(d => ({ value: d.nome, label: d.nome }))}
            value={deities.find(d => d.nome === personagem.divindade) ? { value: personagem.divindade, label: personagem.divindade } : null}
            onChange={onDeityChange}
            isClearable
            placeholder="Selecione..."
            classNamePrefix="react-select"
          />
        </div>
      </div>

      {/* Atributos */}
      <div className="row pb-2 g-2 attribute-group">
        {Object.keys(attributes).map(attr => (
          <div className="col-md" key={attr}>
            <label className="form-label fs-5"><i className={attributes[attr].icon + " attribute-icon"} ></i>{attributes[attr].name.toUpperCase()}</label>
            <input name={attr} className="form-control form-control-lg fs-3 fw-bold text-center" value={personagem[attr]} disabled />
            <div className="d-flex justify-content-between mt-1 gap-1">
              <div className="position-relative">
                <input name={attr + "_race"} className="form-control" value={attributes[attr].mod} disabled />
                <div className="position-absolute top-50 end-0 translate-middle-y" hidden={!attributes[attr].any || attributes[attr].except} >
                  <input type="checkbox" className="btn-check" id={`btn-check-${attr}`} 
                    onChange={e => handleAttrCheckboxChange(attr, e)}
                    checked={attributes[attr].mod === 1} />
                  <label className="btn btn-select" htmlFor={`btn-check-${attr}`}><i className="fa-solid fa-circle-up"></i></label>
                </div>
              </div>
              <input type="number" name={attr + "_point"} className="form-control" value={attributes[attr].points} onChange={e => handleChangeAttribute(attr, e)} />
            </div>
          </div>
        ))}

        {/* Point buy session */}
        <div className="col-md-1">
          <label className="form-label fs-5">Pontos</label>
          <select name="pointbuy_rule" className="form-select" value={pointbuy.limit} onChange={handlePointbuyChange}>
            <option value="5">5 Pontos</option>
            <option value="10">10 Pontos</option>
            <option value="15">15 Pontos</option>
            {/* <option value="any">Personalizado</option> */}
          </select>
          <div className="position-relative">
            <input name="pointbuy_count" className="form-control form-control-lg mt-1 fs-3" value={pointbuy.available} disabled />
            {pointbuy.available < 0 && (
              <span className="position-absolute top-50 end-0 translate-middle-y me-2" title="Pontos negativos">
                <i className="fa-solid fa-triangle-exclamation fa-beat-fade fa-xl" style={{ color: '#bd1414' }}></i>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* PM / PV */}

      <div className="row g-2 mt-3">
        <div className="col-md">
          <label className="form-label"><i className="fas fa-heart"></i> Vida Total</label>
          <input type="number" name="vidatotal" className="form-control" title="Vida total (classe, con, nivel, extras...)" value={getLifeTotal()} onChange={handleChange} disabled />
          <div className="input-group mt-1 gap-1">
            <input type="number" name="vidaextralv" className="form-control" title="Vida extra por nível" value={personagem.vidaextralv} onChange={handleChange} />
            <input type="number" name="vidaextra" className="form-control" title="Vida extra" value={personagem.vidaextra} onChange={handleChange} /> 
          </div>
        </div>

        <div className="col-md">
          <label className="form-label"><i className="fa-solid fa-flask"></i> Mana Total</label>
          <input type="number" name="manatotal" className="form-control" title="Mana total (classe, nivel, extras...)" value={getManaTotal()} onChange={handleChange} disabled />
          <div className="input-group mt-1 gap-1">
            <input type="number" name="manaextralv" className="form-control" title="Mana extra por nível" value={personagem.manaextralv} onChange={handleChange} />
            <input type="number" name="manaextra" className="form-control" title="Mana extra" value={personagem.manaextra} onChange={handleChange} /> 
          </div>
        </div>
        
        <div className="col-md">
          <label className="form-label"><i className="fas fa-ruler-combined"></i> Tamanho</label>
          <Select name="tamanho"
            options={opcoesTamanho}
            value={opcoesTamanho.find(t => t.value === personagem.tamanho)}
            onChange={handleSizeChange}
            classNamePrefix="react-select"
          />
        </div>

        <div className="col-md">
          <label className="form-label"><i className="fas fa-shoe-prints"></i> Deslocamento</label>
          <input type="text" name="deslocamento" className="form-control" value={personagem.deslocamento} onChange={handleChange} />
        </div>
      </div>

      <div className='row g-2 mt-3'>
        <div className="col-md-6">
          <label className="form-label"><i className="fas fa-shield"></i> Defesa</label>

          <div className="d-flex justify-content-between gap-1">
            <input type="number" name="defesatotal" className="form-control" value={getDefesaTotal()} disabled/>
            
            <select name="defesaatributo" className="form-select" value={personagem.defesaatributo} onChange={handleChange}>
              <option value="">Nenhum</option>
              <option value="des">DES</option>
              <option value="for">FOR</option>
              <option value="con">CON</option>
              <option value="int">INT</option>
              <option value="sab">SAB</option>
              <option value="car">CAR</option>
            </select>

            <input type="number" name="defesaoutros" className="form-control" value={personagem.defesaoutros} onChange={handleChange} />
          </div>

          <div className="input-group mt-1 gap-1 align-items-baseline">
            <span className="input-group-text w-25">Armadura</span>
            <input type="number" name="defesaarmadura" className="form-control" value={personagem.defesaarmadura} onChange={handleChange} />
            <input type="number" name="penalidadearmadura" className="form-control" value={personagem.penalidadearmadura} onChange={handleChange} />
          </div>

          <div className="input-group mt-1 gap-1 align-items-baseline">
            <span className="input-group-text w-25">Escudo</span>
            <input type="number" name="defesaescudo" className="form-control" value={personagem.defesaescudo} onChange={handleChange} />
            <input type="number" name="penalidadeescudo" className="form-control" value={personagem.penalidadeescudo} onChange={handleChange} />
          </div>
        </div>

        <div className="col-md">
          <label className="form-label"><i className="fa-solid fa-bars"></i> Proficiências/Outros</label>
          <textarea name="proficiencias" className="form-control fst-italic" rows="3" value={personagem.proficiencias} onChange={handleChange} />
        </div>

      </div>

      <div className="mt-4">
        <label className="form-label">Anotações</label>
        <textarea name="charnotes" className="form-control fst-italic" rows="6" value={personagem.anotacoes} onChange={handleChange} />
      </div>

    </div>
  );
}
export default Personagem;
