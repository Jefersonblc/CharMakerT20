import React, { useEffect, useState } from 'react';
import { usePersonagem } from '../context/PersonagemContext';
import skillsData from '../assets/data/skills.js';

function Pericias() {
  const { personagem, setPersonagem } = usePersonagem();
  const [skills, setSkills] = useState([]);
  

  useEffect(() => {
    setSkills(skillsData.skills || skillsData);
  }, []);

  function handleSkillChange(id, field, value) {
    setPersonagem(prev => ({
      ...prev,
      pericias: {
        ...prev.pericias,
        [id]: {
          ...prev.pericias[id],
          [field]: field === 'treinada' ? value : value
        }
      }
    }));
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
            </tr>
          </thead>
          <tbody>
            {skills.map(skill => (
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
                    <option value="FOR">FOR</option>
                    <option value="DES">DES</option>
                    <option value="CON">CON</option>
                    <option value="INT">INT</option>
                    <option value="SAB">SAB</option>
                    <option value="CAR">CAR</option>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Pericias;
