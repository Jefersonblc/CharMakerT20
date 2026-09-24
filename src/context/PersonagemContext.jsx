import React, { createContext, useContext, useEffect, useState } from 'react';
import skills from '../assets/data/skills.js';
import { modificadorDaRolagem } from '../assets/data/attributesTable.js';

const PersonagemContext = createContext();

export function usePersonagem() {
  return useContext(PersonagemContext);
}

export function PersonagemProvider({ children }) {
  // Estado global do personagem
  const [personagem, setPersonagem] = useState({
    playername: '',
    trace: '',
    torigin: '',
    tlevel: '',
    charnivel: 1,
    divindade: '',

    for:0,
    des:0,
    con:0,
    int:0,    
    sab:0,
    car:0,

    vidaclassinit: 0,
    vidaclasslv: 0,
    vidaextra: 0,
    vidaextralv: 0,
    vidatotal: 0,

    manaclasslv: 0,
    manaextra: 0,
    manaextralv: 0,
    manatotal: 0,

    defesatotal: 10,
    defesaoutros: 0,
    defesaatributo: "des",
    nomearmadura: 'Armadura',
    nomeescudo: 'Escudo',
    defesaarmadura: 0,
    defesaescudo: 0,
    penalidadearmadura: 0,
    penalidadeescudo: 0,
    tamanho: '0',
    deslocamento: '',
    proficiencias: '',
    charnotes: '',

    attacks: [],
    abilities: [],
    powers: [],

    spells1: [],
    spells2: [],
    spells3: [],
    spells4: [],
    spells5: [],

    inventario: [],

    pericias: skills.reduce((map, skill) => (map[skill.id] = { ...skill, treined: false }, map), {}),

    treinedSkills: [], 
    treinedSkillsOr: [], 
    skills: [], 
    extraSkills: 0,
  });

  const [attributes, setAttributes] = useState({
    for: { name: 'for', mod: 0, any: false, except: false, points: 0 },
    des: { name: 'des', mod: 0, any: false, except: false, points: 0 },
    con: { name: 'con', mod: 0, any: false, except: false, points: 0 },
    int: { name: 'int', mod: 0, any: false, except: false, points: 0 },
    sab: { name: 'sab', mod: 0, any: false, except: false, points: 0 },
    car: { name: 'car', mod: 0, any: false, except: false, points: 0 },
  });

  const [anyAttribute, setAnyAttribute] = useState({ avaliable: 0, selected: 0 });

  const [pointbuy, setPointbuy] = useState({ limit: 10, spent: 0, available: 10 });
  const [config, setConfig] = useState({
    playername: '',
    stored: false,
    altered: false,
    autosave: false,
    modoDistribuicao: 'pontos', // 'pontos' (point buy) ou 'rolagem' (4d6 descartando o menor)
    rolagemAutomatica: false, // re-rola o menor valor até a soma dar 6 ou mais
  });

  // Resultados da rolagem de dados dos atributos (modo 'rolagem'):
  // { resultados: [{ id, dados: [d1, d2, d3, d4], total, atributo }] }
  const [rolagem, setRolagem] = useState({ resultados: [] });

  // No modo Rolagem de Dados, o modificador de cada atributo (o "Mod"/points) vem do
  // dado distribuído. Fica no provider para valer mesmo com a aba Personagem fechada.
  useEffect(() => {
    if (config.modoDistribuicao !== 'rolagem' || !rolagem.resultados.length) return;

    setAttributes(prev => {
      const points = {};
      Object.keys(prev).forEach(attr => { points[attr] = 0; });
      rolagem.resultados.forEach(r => {
        if (r.atributo) points[r.atributo] = modificadorDaRolagem(r.total);
      });

      const atualizados = {};
      Object.keys(prev).forEach(attr => atualizados[attr] = { ...prev[attr], points: points[attr] });
      return atualizados;
    });
  }, [rolagem, config.modoDistribuicao, setAttributes]);

  return (
    <PersonagemContext.Provider value={{
      personagem, setPersonagem,
      attributes, setAttributes,
      anyAttribute, setAnyAttribute,
      pointbuy, setPointbuy,
      config, setConfig,
      rolagem, setRolagem
    }}>
      {children}
    </PersonagemContext.Provider>
  );
}
