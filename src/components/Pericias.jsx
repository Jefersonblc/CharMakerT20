import React, { useEffect, useState } from 'react';
import { usePersonagem } from '../context/PersonagemContext';

function Pericias() {
  const { personagem, setPersonagem } = usePersonagem();

  function handleSkillChange(id, field, value) {
    setPersonagem(prev => ({
      ...prev,
      pericias:{
        ...prev.pericias,
        [id]: { 
          ...prev.pericias[id], 
          [field]: value 
        } 
      }
    }));
  }

  function bonusPericiaTreinada(nivel) {
    if (nivel >= 15) return 6;
    if (nivel >= 7) return 4;
    return 2;
  }

  function totalSkill(id) {
    const skill = personagem.pericias[id];
    if (!skill) return 0;

    const treined = skill.treined || false;
    const atributo = skill.atributo;
    const outros = skill.outros || 0;
    const bonusTreinado = treined ? bonusPericiaTreinada(personagem.charnivel) : 0;
    const penalidadeArmadura = skill.armorPenalty ? personagem.penalidadearmadura + personagem.penalidadeescudo : 0;
    
    let total = bonusTreinado + personagem[atributo] + outros + Math.floor(personagem.charnivel/2) - penalidadeArmadura;

    if (skill.id === 'furtividade') {
      total += parseInt(personagem.tamanho) || 0;
    }

    return total;
  }

  function mustSelectSkill(skillName) {
    var treinedSkillsOr = personagem?.treinedSkillsOr;
    var hasSelectedOption= Object.values(personagem.pericias).some(pericia => treinedSkillsOr?.includes(pericia.nome) && pericia.treined == true);
    return treinedSkillsOr?.includes(skillName) && !hasSelectedOption;
  }

  function numeroPericiasTreinadas() {
    return Object.values(personagem.pericias).filter(skill => skill.treined).length;
  }

  return (
    <div className="form-section">
      <div className="table-responsive-sm col-lg-8 col-md-12">
        <table className="table table-sm text-center">
          <thead className="table-light">
            <tr>
              <th className="text-start">Perícia</th>
              <th>Treinada({numeroPericiasTreinadas()})</th>
              <th>Atributo</th>
              <th>Outros</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(personagem.pericias).map(skill => (
              <tr key={skill.id}>
                <td className="text-start">
                  <div className="d-flex align-items-center">
                    {
                      (skill.id.startsWith('oficio')) 
                      ? <input 
                          type="text" 
                          placeholder='Ofício' 
                          className="form-control form-control-sm w-75" 
                          value={personagem.pericias[skill.id]?.descricao || ''} 
                          onChange={e => handleSkillChange(skill.id, 'descricao', e.target.value)}
                        /> 
                      : <span>{skill.nome}</span>
                    }
                    {personagem.skills.includes(skill.nome) && '*'}
                    {personagem.treinedSkills.includes(skill.nome) && '**'}
                    {mustSelectSkill(skill.nome) && '**'}
                  </div>
                </td>
                <td className="position-relative">
                  <input
                    type="checkbox"
                    className={`form-check-input ${mustSelectSkill(skill.nome) ? 'question-box' : ''}`}
                    checked={personagem.pericias[skill.id]?.treined || false}
                    onChange={e => handleSkillChange(skill.id, 'treined', e.target.checked)}
                    disabled={personagem.treinedSkills.includes(skill.nome)}
                  />
                </td>
                <td>
                  <select
                    className="form-select form-select-sm"
                    value={personagem.pericias[skill.id]?.atributo || skill.atributo}
                    onChange={e => handleSkillChange(skill.id, 'atributo', e.target.value)}
                  >
                    <option value="for">FOR</option>
                    <option value="des">DES</option>
                    <option value="con">CON</option>
                    <option value="int">INT</option>
                    <option value="sab">SAB</option>
                    <option value="car">CAR</option>
                  </select>
                </td>
                <td style={{ width: '15%' }}>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    value={personagem.pericias[skill.id]?.outros || 0}
                    onChange={e => handleSkillChange(skill.id, 'outros', Number(e.target.value))}
                  />
                </td>
                <td style={{ width: '15%' }}>
                  <input
                    type="number"
                    className="form-control form-control-sm fw-bold"
                    value={totalSkill(skill.id)}
                    disabled
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p><strong>Total de Pericias:</strong> 2 (padrão) + {personagem?.extraSkills || 0} (classe) + {Math.max(personagem.int, 0)} (INT) = <strong>{ 2 + (personagem?.extraSkills || 0) + Math.max(personagem.int, 0)}</strong></p>
      <p className='small fw-light mb-1'>* Pericias de Classe</p>
      <p className='small fw-light mb-1'>** Pericias de Padrão da Classe</p>
      {personagem?.treinedSkillsOr?.length > 0 && (<p className='small fw-light mb-1'>*** Pericias de Padrão da Classe (Escolher)</p>)}
    </div>
  );
}
export default Pericias;
