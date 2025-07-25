import React, { useEffect, useState } from 'react';
import { usePersonagem } from '../context/PersonagemContext';
import skillsData from '../assets/data/skills.js';

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

    const treinada = skill.treinada || false;
    const atributo = skill.atributo;
    const outros = skill.outros || 0;
    const bonusTreinado = treinada ? bonusPericiaTreinada(personagem.charnivel) : 0;
    return bonusTreinado + personagem[atributo] + outros + Math.floor(personagem.charnivel/2);
  }

  return (
    <div className="form-section">
      <div className="table-responsive col-md-6">
        <table className="table table-sm text-center">
          <thead className="table-light">
            <tr>
              <th className="text-start">Perícia</th>
              <th>Treinada?</th>
              <th>Atributo</th>
              <th>Outros</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(personagem.pericias).map(skill => (
              <tr key={skill.id}>
                <td className="text-start">{skill.nome}</td>
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={personagem.pericias[skill.id]?.treinada || false}
                    onChange={e => handleSkillChange(skill.id, 'treinada', e.target.checked)}
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
                <td>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    value={personagem.pericias[skill.id]?.outros || 0}
                    onChange={e => handleSkillChange(skill.id, 'outros', Number(e.target.value))}
                  />
                </td>
                <td className="">
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
    </div>
  );
}
export default Pericias;
