import React, { useEffect, useState } from 'react';
import { usePersonagem } from '../context/PersonagemContext';
// import skillsData from '../assets/data/skills.js';

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
    return bonusTreinado + personagem[atributo] + outros + Math.floor(personagem.charnivel/2);
  }

  function mustSelectSkill(skillName) {
    var treinedSkillsOr = personagem?.treinedSkillsOr;
    var hasSelectedOption= Object.values(personagem.pericias).some(pericia => treinedSkillsOr?.includes(pericia.nome) && pericia.treined == true);
    return treinedSkillsOr?.includes(skillName) && !hasSelectedOption;
  }

  function numeroPericiasTreinadas() {
    return Object.values(personagem.pericias).filter(skill => skill.treined).length;
    //&& !(personagem?.treinedSkills?.includes(skill.nome) || personagem?.treinedSkillsOr?.filter(item => item == skill.nome).length > 0)
  }

  return (
    <div className="form-section">
      <div className="table-responsive-sm col-lg-8 col-md-12">
        <table className="table table-sm text-center">
          <thead className="table-light">
            <tr>
              <th className="text-start">Perícia</th>
              <th>Treinada({numeroPericiasTreinadas()}) <br/> (INT:{personagem.int}) </th>
              <th>Atributo</th>
              <th>Outros</th>
              <th>Total</th>
              <th>Opção de Classe (2 + {personagem?.extraSkills || 0} = {(personagem?.extraSkills || 0) + 2})</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(personagem.pericias).map(skill => (
              <tr key={skill.id}>
                <td className="text-start">{skill.nome}</td>
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
                <td className="text-start">
                  {personagem.skills.includes(skill.nome) ? <i className="fa-solid fa-circle-left"></i> : ''}
                  {mustSelectSkill(skill.nome) ? ' Escolher 1' : ''}
                  {personagem.treinedSkills.includes(skill.nome) ? <span><i className="fa-solid fa-circle-left"></i> Padrão de Classe</span> : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Pericias;
