import React, { createContext, useContext, useState } from 'react';
import skills from '../assets/data/skills.js';

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

    pericias: skills.reduce((map, skill) => (map[skill.id] = { ...skill, treined: false }, map), {}),

    treinedSkills: [], 
    treinedSkillsOr: [], 
    skills: [], 
    extraSkills: 0,
  });

  const [attributes, setAttributes] = useState({
    for: { name: 'for', mod: 0, any: false, except: false, points: 0, icon:"fas fa-dumbbell" },
    des: { name: 'des', mod: 0, any: false, except: false, points: 0, icon:"fas fa-bolt" },
    con: { name: 'con', mod: 0, any: false, except: false, points: 0, icon:"fas fa-heartbeat" },
    int: { name: 'int', mod: 0, any: false, except: false, points: 0, icon:"fas fa-brain" },
    sab: { name: 'sab', mod: 0, any: false, except: false, points: 0, icon:"fas fa-eye" },
    car: { name: 'car', mod: 0, any: false, except: false, points: 0, icon:"fas fa-users" },
  });

  const [anyAttribute, setAnyAttribute] = useState({ avaliable: 0, selected: 0 });

  const [pointbuy, setPointbuy] = useState({ limit: 10, spent: 0, available: 10 });

  return (
    <PersonagemContext.Provider value={{
      personagem, setPersonagem,
      attributes, setAttributes,
      anyAttribute, setAnyAttribute,
      pointbuy, setPointbuy
    }}>
      {children}
    </PersonagemContext.Provider>
  );
}
