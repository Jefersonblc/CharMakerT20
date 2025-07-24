import React, { createContext, useContext, useState } from 'react';

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
    vidatotal: 0,

    manaclasslv: 0,
    manaextra: 0,
    manatotal: 0,

    defesaatributo: 10,
    defesaoutros: 0,
    tamanho: '1',
    deslocamento: '',
    charnotes: '',

    attacks: [],
    abilities: [],
    powers: [],

    spells1: [],
    spells2: [],
    spells3: [],
    spells4: [],
    spells5: [],

    pericias: {},
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
