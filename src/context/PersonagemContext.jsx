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
    atributos: {
      forRace: 0, desRace: 0, conRace: 0, intRace: 0, sabRace: 0, carRace: 0,
      forPoint: 0, desPoint: 0, conPoint: 0, intPoint: 0, sabPoint: 0, carPoint: 0,
      pointbuyRule: '10', pointbuyCount: 10
    },
    for:0,
    des:0,
    con:0,
    int:0,    
    sab:0,
    car:0,

    vidatotal: 0,
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
    // ataques: [],
    // habilidades: [],
    // magias: { 1: [], 2: [], 3: [], 4: [], 5: [] }
  });

  const value = { personagem, setPersonagem };
  return (
    <PersonagemContext.Provider value={value}>
      {children}
    </PersonagemContext.Provider>
  );
}
