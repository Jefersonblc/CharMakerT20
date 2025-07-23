import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { usePersonagem } from '../context/PersonagemContext';
import racesData from '../assets/data/races.js';
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

  // Atualiza atributos e exceções da raça ao selecionar
  function updateRaceAttributes(selectedRaceName) {
    const selectedRace = races.find(r => r.nome === selectedRaceName);
    if (!selectedRace || !selectedRace.modificadores) {
      Object.keys(attributes).forEach(attr => {
        attributes[attr].mod = 0;
        attributes[attr].any = false;
        attributes[attr].except = false;
        personagem[attr] = 0;
      });
      setAnyAttribute({ avaliable: 0, selected: 0 });
      return;
    }

    const anyAttributeCount = selectedRace.modificadores.filter(item => item.attr === 'any').length;
    setAnyAttribute({ avaliable: anyAttributeCount, selected: 0 });

    Object.keys(attributes).forEach(attr => {
      const raceModifier = selectedRace.modificadores.find(item => item.attr === attr);
      attributes[attr].mod = raceModifier?.mod || 0;
      attributes[attr].any = anyAttributeCount > 0;
      attributes[attr].except = false; 
      personagem[attr] = 0;
    });

    if(selectedRace.modException) {
      attributes[selectedRace.modException].except = true;
    }
  }

  function handleChangeAttribute(attr, e) {
    const value = parseInt(e.target.value) || 0;
    const cost = getPointbuyCost(value);
    const diference = value - attributes[attr].points;

    if(value < -2 || value > 5) return

    attributes[attr].points = value;
    setAttributes(prev => ({
      ...prev,
      [attr]: { ...prev[attr], points: value }
    }));

    calculatePointbuy();
  }
  
  function handleAttrCheckboxChange(attr, e) {
    const checked = e.target.checked;
    console.log(`anyAttribute ${anyAttribute.selected} anyAttribute: ${anyAttribute.avaliable}`);
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
    // setPointbuy({ limit: value, available: value, spent: 0 });
    setPointbuy({ ...pointbuy, limit: value, available: value - pointbuy.spent });
  }

  // Handler para mudança de raça
  function onRaceChange(option) {
    const raceName = option ? option.value : '';
    setPersonagem(prev => ({ ...prev, trace: raceName }));
    updateRaceAttributes(raceName);
  };

  function onClassChange(option) {
    setPersonagem(prev => ({
      ...prev,
      tlevel: option ? option.value : ''
    }));
  };

  function onOriginChange(option) {
    setPersonagem(prev => ({
      ...prev,
      torigin: option ? option.value : ''
    }));
  };

  function onLevelChange(e) {
    const { value } = e.target;
    setPersonagem(prev => ({
      ...prev,
      charnivel: parseInt(value)
    }));
  };

  function onDeityChange(option) {
    setPersonagem(prev => ({
      ...prev,
      divindade: option ? option.value : ''
    }));
  };

  function handleSelectChange(field, option) {
    setPersonagem(prev => ({ ...prev, [field]: option ? option.value : '' }));
  }

  function resultAttributes(attr) {
    return (attributes[attr]?.mod || 0) + (attributes[attr]?.points || 0);
  }

  return (
    <div className="form-section">

      <div className="row g-2 mb-3">
        <div className="col-md">
          <label className="form-label">Nome</label>
          <input className="form-control" name="playername" value={personagem.playername} onChange={handleChange} />
        </div>
        <div className="col-md">
          <label className="form-label">Raça</label>
          <Select
            options={races.map(r => ({ value: r.nome, label: r.nome }))}
            value={races.find(r => r.nome === personagem.trace) ? { value: personagem.trace, label: personagem.trace } : null}
            onChange={onRaceChange}
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
          <label className="form-label">Classe</label>
          <Select
            options={classes.map(c => ({ value: c.nome, label: c.nome }))}
            value={classes.find(c => c.nome === personagem.tlevel) ? { value: personagem.tlevel, label: personagem.tlevel } : null}
            onChange={onClassChange}
            isClearable
            placeholder="Selecione..."
            classNamePrefix="react-select"
          />
        </div>
        <div className="col-md">
          <label className="form-label">Nível</label>
          <input type="number" className="form-control" name="charnivel" value={personagem.charnivel} onChange={onLevelChange} />
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
            <label className="form-label"><i className={attributes[attr].icon + " attribute-icon"} ></i>{attributes[attr].name.toUpperCase()}</label>
            <input type="number" name={attr} className="form-control text-center" value={resultAttributes(attr)} disabled/>
            <div className="d-flex justify-content-between mt-1 gap-1">
              <div className="position-relative">
                <input type="number" name={attr + "_race"} className="form-control" value={attributes[attr].mod} disabled/>
                <input type="checkbox" name={attr + "_race_checkbox"} className="position-absolute top-50 end-0 translate-middle-y me-2"
                  onChange={e => handleAttrCheckboxChange(attr, e)}
                  checked={attributes[attr].mod === 1}
                  hidden={!attributes[attr].any || attributes[attr].except} />
              </div>
              <input type="number" name={attr + "_point"} className="form-control" value={attributes[attr].points} onChange={e => handleChangeAttribute(attr, e)} />
            </div>
          </div>
        ))}

        {/* Point buy session */}
        <div className="col-md-1">
            <label className="form-label">Pontos</label>
            <select name="pointbuy_rule" className="form-select" value={pointbuy.limit} onChange={handlePointbuyChange}>
              <option value="5">5 Pontos</option>
              <option value="10">10 Pontos</option>
              <option value="15">15 Pontos</option>
              {/* <option value="any">Personalizado</option> */}
            </select>
            <div className="position-relative">
              <input name="pointbuy_count" type="number" className="form-control mt-1" value={pointbuy.available}  disabled/>
              {pointbuy.available < 0 && (
                <span className="position-absolute top-50 end-0 translate-middle-y me-2" title="Pontos negativos">
                  <i className="fas fa-exclamation-triangle" style={{ color: 'red', fontSize: '1.2em' }}></i>
                </span>
              )}
            </div>
        </div>
      </div>

      {/* Secundários */}
      <div className="row g-2 mt-3">
        <div className="col-md">
          <label className="form-label"><i className="fas fa-heart"></i> Vida Total</label>
          <input type="number" name="vidatotal" className="form-control" value={personagem.vidatotal} onChange={handleChange} />
        </div>

        <div className="col-md">
          <label className="form-label"><i className="fas fa-tint"></i> Mana Total</label>
          <input type="number" name="manatotal" className="form-control" value={personagem.manatotal} onChange={handleChange} />
        </div>

        <div className="col-md">
          <label className="form-label"><i className="fas fa-shield-alt"></i> Defesa (atributo)</label>
          <input type="number" name="defesaatributo" className="form-control" value={personagem.defesaatributo} onChange={handleChange} />
        </div>

        <div className="col-md">
          <label className="form-label"><i className="fas fa-shield"></i> Defesa (outros)</label>
          <input type="number" name="defesaoutros" className="form-control" value={personagem.defesaoutros} onChange={handleChange} />
        </div>

        <div className="col-md">
          <label className="form-label"><i className="fas fa-ruler-combined"></i> Tamanho</label>
          <select name="tamanho" className="form-select" value={personagem.tamanho} onChange={handleChange}>
            <option value="-1">Minúsculo</option>
            <option value="0">Pequeno</option>
            <option value="1">Médio</option>
            <option value="2">Grande</option>
            <option value="3">Enorme</option>
            <option value="4">Colossal</option>
          </select>
        </div>

        <div className="col-md">
          <label className="form-label"><i className="fas fa-shoe-prints"></i> Deslocamento</label>
          <input type="text" name="deslocamento" className="form-control" value={personagem.deslocamento} onChange={handleChange}/>
        </div>

      </div>

      <div className="mt-4">
        <label className="form-label">Anotações</label>
        <textarea name="charnotes" className="form-control" rows="3" value={personagem.anotacoes} onChange={handleChange} />
      </div>

    </div>
  );
}
export default Personagem;
