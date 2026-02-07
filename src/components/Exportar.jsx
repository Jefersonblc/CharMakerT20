import React, { useEffect, useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { usePersonagem } from '../context/PersonagemContext';
import FichaContent from './FichaContent';

function Exportar() {
  const { 
    personagem, setPersonagem,
    attributes, setAttributes,
    anyAttribute, setAnyAttribute,
    pointbuy, setPointbuy,
  } = usePersonagem();

  const [json, setJson] = useState('');
  const [storage, setStorage] = useState({
    saves: [],
    selected: '',
  });
  const [printing, setPrinting] = useState(false);
  const fichaRef = useRef(null);

  useEffect(() => {
    const saves = localStorage.getItem("personagens");
    if (saves) {
      setStorage({ 
        ...storage, 
        saves: JSON.parse(saves)
      });
    }
  }, []);

  useEffect(() => {
    if (printing && fichaRef.current) {
      const element = fichaRef.current;
      const opt = {
        margin: 0,
        filename: `t20-${personagem.playername || 'personagem'}-${new Date().getTime()}.pdf`,
        image: { type: 'jpeg', quality: 0.99 },
        html2canvas: { scale: 2, dpi: 192, letterRendering: true, allowTaint: true, useCORS: true },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      html2pdf().set(opt).from(element).save().then(() => {
        setPrinting(false);
      });
    }
  }, [printing, personagem.playername]);

  function handlePrintPDF() {
    setPrinting(true);
  }

  function handleSaveSelected(e){
    const { value } = e.target;
    setStorage({
      ...storage,
      selected: value
    })
  }

  function handleSaveTolocal(){
    const localsaves = localStorage.getItem("personagens") || "[]";

    let saves = JSON.parse(localsaves);
    const personagemSave = {
      nome: storage.selected,
      personagem: personagem,
      attributes: attributes,
      anyAttribute: anyAttribute,
      pointbuy: pointbuy,
    }
    
    if(saves.find(s => s.nome === personagemSave.nome)){
      if(!window.confirm(`Sobrescrever o personagem "${personagemSave.nome}"?`)){
        return;
      }
      saves = saves.map(save =>
        save.nome === personagemSave.nome ? personagemSave : save
      );
    }else{
      saves.push(personagemSave);
    }

    localStorage.setItem('personagens', JSON.stringify(saves));

    setStorage({ 
      ...storage, 
      saves: saves
    });

    alert('Personagem salvo no navegador!');
  }

  function handleLoadFromlocal(){
    const localsaves = localStorage.getItem("personagens") || "[]";
    const saves = JSON.parse(localsaves);

    if(saves.length > 0 && storage.selected !== '') {
      const saved = saves.find(save => save.nome === storage.selected);
      if(!saved){
        alert('Nenhum personagem salvo com esse nome!');
        return;
      }

      if(window.confirm('Carregar o personagem salvo no navegador? Isso irá sobrescrever o personagem atual.')){
        setPersonagem(saved.personagem);
        setAttributes(saved.attributes);
        setAnyAttribute(saved.anyAttribute);
        setPointbuy(saved.pointbuy);
      }
    } else {
      alert('Nenhum personagem salvo no navegador!');
    }
  }

  function handleDeleteFromlocal(){
    const localsaves = localStorage.getItem("personagens") || "[]";
    const saves = JSON.parse(localsaves);

    if(saves.length > 0 && storage.selected !== '') {
      if(window.confirm(`Deseja realmente deletar o personagem "${storage.selected}"?`)){
        const newSaves = saves.filter(save => save.nome !== storage.selected);
        localStorage.setItem('personagens', JSON.stringify(newSaves));
        setStorage({ ...storage, saves: newSaves });
      }
    } else {
      alert('Nenhum personagem selecionado!');
    }
  }

  
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

        abilities : personagem.abilities.filter(a => a.classDefault || a.raceDefault).map(ability => ({
          nameability: ability.name,
          abilitydescription: ability.description
        })),

        powers : personagem.abilities.filter(a => !a.classDefault && !a.raceDefault).map(power => ({
          namepower: power.name,
          powerdescription: power.description
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
      <h2 className='mt-2'>Salvar/Carregar</h2>
      
      <div className='d-flex flex-column align-items-center gap-2'>
        <select id="saves" className="form-select form-select-md" size="4" value={storage.saves.find(save => save.nome === storage.selected) ? storage.selected : ''} onChange={handleSaveSelected}>
          <option value="" disabled hidden></option>
          {storage.saves.map((save, index) => (
            <option key={index} value={save.nome}>{save.nome}</option>
          ))}
        </select>

        <input type="text" className="form-control" id="newsave" placeholder="Novo personagem..." value={storage.selected} onChange={handleSaveSelected} />
      </div>

      <div className="d-flex gap-2 mt-2">
        <button className="btn btn-secondary" onClick={handleSaveTolocal} disabled={storage.selected === ''}>
          <i className="fa-solid fa-file-arrow-up"></i> Salvar
        </button>
        <button className="btn btn-secondary" onClick={handleLoadFromlocal} disabled={!storage.saves.find(save => save.nome === storage.selected)}>
          <i className="fa-solid fa-file-arrow-down"></i> Carregar
        </button>
        <button className="btn btn-secondary" onClick={handleDeleteFromlocal} disabled={!storage.saves.find(save => save.nome === storage.selected)}>
          <i className="fa-solid fa-trash"></i> Deletar
        </button>
      </div>

      <h2 className='mt-4'>Exportar Personagem</h2>

      <div className="d-flex gap-2">
        <button onClick={handleExport} className="btn btn-secondary">
          <i className="fa-solid fa-file-export"></i> Exportar
        </button>
        <button className="btn btn-secondary" onClick={handlePrintPDF}>
          <i className="fas fa-file-pdf"></i> Gerar PDF
        </button>
      </div>
      <p className="text-muted small mt-2">Formato JSON compatível com a extensão <a target="_blank" href="https://roll20tormenta20.pyanderson.dev/">Roll20: Grimório do Tormenta20</a>.</p>
      <pre className="mt-2">{json || 'JSON Result'}</pre>
      {printing && (
        <div style={{ position: 'fixed', top: '-9999px', left: '-9999px' }}>
          <FichaContent ref={fichaRef} />
        </div>
      )}
    </div>
  );
}
export default Exportar;
