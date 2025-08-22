import React, { useState } from 'react';
import { usePersonagem } from '../context/PersonagemContext';

function Exportar() {
  const { personagem } = usePersonagem();
  const [json, setJson] = useState('');

  function handleExport() {
    const jsonExport = {
        isJDA: true,
        playername: personagem.playername,
        menace_name: personagem.playername,
        trace: personagem.trace,
        torigin: personagem.torigin,
        tlevel: personagem.tlevel,
        charnivel: personagem.charnivel,

        for:  personagem.for,
        des: personagem.des,
        con: personagem.con,
        int: personagem.int,
        sab: personagem.sab,
        car: personagem.car,

        vidatotal: personagem.vidatotal,
        vida: personagem.vidatotal,
        manatotal: personagem.manatotal,
        mana: personagem.manatotal,

        proficiencias: personagem.proficiencias,
        charnotes: personagem.charnotes,
        
        divindade: personagem.divindade,
        tamanho: personagem.tamanho,
        deslocamento: personagem.deslocamento,
        
        defesaatributo: personagem.defesaatributo === "" ? "0" : "1",
        defesaoutros: personagem.defesaoutros,
        modatributodefesa: personagem.defesaatributo === "" ? "" : personagem.defesaatributo + "_mod",

        armaduradefesa1: personagem.defesaarmadura, 
        armadurapenalidade1: personagem.penalidadearmadura, 

        armaduradefesa2: personagem.defesaescudo, 
        armadurapenalidade2: personagem.penalidadeescudo, 

        abilities : personagem.abilities.map(ability => ({
          nameability: ability.name,
          abilitydescription: ability.description
        })),

        attacks : personagem.attacks.map(attack => ({
          nomeataque: attack.attackname,
          bonusataque: attack.attackbonus,
          danoataque: attack.attackdano,
          danoextraataque: attack.attackdanoextra,
          margemcriticoataque: attack.attackcritico,
          multiplicadorcriticoataque: attack.attackmultiplicador,
          dadoextraataque: attack.attackdadosextra,
          ataquepericia: `@{${attack.attackpericiaUsada?.toLowerCase()}total}+@{condicaomodataquecc}+@{condicaomodataque}`,
          ataquetipodedano: attack.attacktipoDano,
          ataquealcance: attack.attackalcance,
          modatributodano: attack.attackatributodano,
          ataquedescricao: attack.attackdesc,
        }))

        // cdatributo: "@{sab_mod} + @{condicaopermental}",
        // cdequips: "0",
        // cdpoderes: "0",
        // cdoutros: "1",
        // extraslot: "0",
    };

    [1,2,3,4,5].forEach(circle => {
      const spellsCicle = `spells${circle}`;
      jsonExport[spellsCicle] = personagem[spellsCicle].map(spell => ({
        namespell: spell.namespell,
        spelltipo: `${spell.spelltipo} ${circle} (${spell.spellescola})`,
        spellcd: spell.spellcd,
        spellexecucao: spell.spellexecucao,
        spellalcance: spell.spellalcance,
        spellduracao: spell.spellduracao,
        spellalvoarea: spell.spellalvoarea,
        spellresistencia: spell.spellresistencia,
        spelldescription: spell.spelldescription,
      }));
    });

    Object.values(personagem.pericias).forEach(pericia => {
      jsonExport[`${pericia.id}_treinada`] = pericia.treined ? "1" : "0";
      jsonExport[`${pericia.id}atributo2`] = `@{${pericia.atributo}_mod}`; // "@{des_mod} + @{condicaoperfisico} + @{condicaocego}" pericia.outros;
      jsonExport[`${pericia.id}outros`] = pericia.outros;

      if(pericia.id.startsWith("oficio")){
        jsonExport[`${pericia.id}nome`] = pericia.descricao;
      }
    });

    const personagemJson = JSON.stringify(jsonExport, null, 2)

    setJson(personagemJson);

    const blob = new Blob([personagemJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `t20-${personagem.playername || 'personagem'}-${crypto.randomUUID()}.json`;
    link.click();

    URL.revokeObjectURL(url); 
  }

  return (
    <div className="form-section">
      <button onClick={handleExport} className="btn btn-secondary mt-2">
        <i class="fa-solid fa-file-arrow-down"></i> Exportar Personagem
      </button>
      <h2>Resultado</h2>
      <pre>{json}</pre>
    </div>
  );
}
export default Exportar;
