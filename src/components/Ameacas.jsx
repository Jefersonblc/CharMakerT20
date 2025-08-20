import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import ameacasArton from '../assets/data/ameaças_de_arton_t20.json';
import ameacasBase from '../assets/data/ameacas_livro_base_t20.json';

function Ameacas() {
  const [ameacas, setAmeacas] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');
  const [filtroTamanho, setFiltroTamanho] = useState('');
  const [filtroND, setFiltroND] = useState('');
  const [selecionadas, setSelecionadas] = useState([]);

  useEffect(() => {
    const todas = [...ameacasArton, ...ameacasBase];
    setAmeacas(todas);
  }, []);


  const alfaNumeric = (a, b) => {
        const numA = parseInt(a);
        const numB = parseInt(b);
        if (!isNaN(numA) && !isNaN(numB)) {
            return numA - numB;
        } 
        return isNaN(numA) || -1;
    };


  // Gera opções únicas para filtros
  const categorias = Array.from(new Set(ameacas.map(a => a.categoria))).filter(Boolean).sort();
  const tipos = Array.from(new Set(ameacas.map(a => a.tipo))).filter(Boolean).sort();
  const tamanhos = Array.from(new Set(ameacas.map(a => a.tamanho))).filter(Boolean).sort();
  const nds = Array.from(new Set(ameacas.map(a => a.nd))).filter(Boolean).sort(alfaNumeric);

  // Filtra ameaças
  const ameacasFiltradas = ameacas.filter(a =>
    (!filtroCategoria || a.categoria === filtroCategoria) &&
    (!filtroTipo || a.tipo === filtroTipo) &&
    (!filtroTamanho || a.tamanho === filtroTamanho) &&
    (!filtroND || String(a.nd) === String(filtroND))
  ).sort((a,b) => a.nome.localeCompare(b.nome));

  // Opções para Select
  const options = ameacasFiltradas.map(a => ({ value: a.nome, label: a.nome, data: a }));

  function handleSelecionar(opcoes) {
    setSelecionadas(opcoes ? opcoes.map(o => o.data) : []);
  }

  return (
    <div className="form-section">
      <h4>Ameaças</h4>
      <div className="row mb-3">
        <div className="col-md-3">
          <label>Categoria</label>
          <select className="form-select" value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)}>
            <option value="">Todos</option>
            {categorias.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}
          </select>
        </div>
        <div className="col-md-3">
          <label>Tipo</label>
          <select className="form-select" value={filtroTipo} onChange={e => setFiltroTipo(e.target.value)}>
            <option value="">Todos</option>
            {tipos.map(tam => <option key={tam} value={tam}>{tam}</option>)}
          </select>
        </div>        
        <div className="col-md-3">
          <label>Tamanho</label>
          <select className="form-select" value={filtroTamanho} onChange={e => setFiltroTamanho(e.target.value)}>
            <option value="">Todos</option>
            {tamanhos.map(tam => <option key={tam} value={tam}>{tam}</option>)}
          </select>
        </div>
        <div className="col-md-3">
          <label>ND</label>
          <select className="form-select" value={filtroND} onChange={e => setFiltroND(e.target.value)}>
            <option value="">Todos</option>
            {nds.map(nd => <option key={nd} value={nd}>{nd}</option>)}
          </select>
        </div>
      </div>
      <Select
        options={options}
        isMulti
        onChange={handleSelecionar}
        placeholder="Selecione ameaças..."
        classNamePrefix="react-select"
      />
      <div className="mt-4">
        {selecionadas.length === 0 && <p>Nenhuma ameaça selecionada.</p>}
        {selecionadas.map(a => (
          <div key={a.id} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title fw-bold"><strong>{a.nome}</strong> | ND {a.nd}</h3>
              <p>{a.tipo} {a.tamanho}</p>
              
              <h4 className='my-4'>[ <strong>For:</strong> {a.atributos.for} | <strong>Des:</strong> {a.atributos.des} | <strong>Con:</strong> {a.atributos.con} | <strong>Int:</strong> {a.atributos.int} | <strong>Sab:</strong> {a.atributos.sab} | <strong>Car:</strong> {a.atributos.car} ]</h4>
              
              <p><strong>Defesa:</strong> {a.defesa}</p>
              <p><strong>Sentidos:</strong> {a.sentidos.join(', ')}</p>
              <p><strong>Resistencias:</strong> {a.resistencias.join(', ')}</p>
              <p><strong>Pericias:</strong> {a.pericias.join(', ')}</p>
              <p><strong>PV:</strong> {a.pv} | <strong>PM:</strong> {a.pm}</p>
              <p><strong>Deslocamento:</strong> {a.deslocamento.join(', ')}</p>
              <p><strong>Ataques:</strong> {a.ataques?.map((ataque, index) => `${ataque.tipo}: ${ataque.nome} ${ataque.bonus} (${ataque.dano})`).join(' | ')}</p>
              <p><strong>Descrição:</strong></p>
              <p className="p-2" style={{ whiteSpace: 'pre-wrap', fontStyle: 'italic' }}>{a.descricao}</p>
              <p><strong>Equipamento:</strong> {a.equipamento.join(', ')}</p>
              <p><strong>Tesouro:</strong> {a.tesouro}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Ameacas;

// "tipo": "Corpo a Corpo",
// "nome": "Dois socos pneumáticos",
// "bonus": "+20",
// "dano": "1d8+16 impacto, x3"