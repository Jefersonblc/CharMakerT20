import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import ameacasArton from '../assets/data/ameaças_de_arton_t20.json';
import ameacasBase from '../assets/data/ameacas_livro_base_t20.json';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import skills from '../assets/data/skills.js';
import Modal from './Modal';

function Ameacas() {
    const [ameacas, setAmeacas] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [filtroTipo, setFiltroTipo] = useState('');
    const [filtroTamanho, setFiltroTamanho] = useState('');
    const [filtroND, setFiltroND] = useState('');
    const [selecionadas, setSelecionadas] = useState([]);
    const [modalAmeacaId, setModalAmeacaId] = useState(null);

    useEffect(() => {
        const todas = [...ameacasArton, ...ameacasBase].map(a => { 
            return {
                id: crypto.randomUUID(),
                open: true,
                ...a, 
            }
        });
        setAmeacas(todas, []);
    }, []);

    const opcoesTamanho = [
        { value: '5', label: 'Minúsculo' },
        { value: '2', label: 'Pequeno' },
        { value: '0', label: 'Médio' },
        { value: '-2', label: 'Grande' },
        { value: '-5', label: 'Enorme' },
        { value: '-10', label: 'Colossal' },
    ];

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
    ).sort((a, b) => a.nome.localeCompare(b.nome));

    // Opções para Select
    const options = ameacasFiltradas.map(a => ({ value: a.nome, label: a.nome, data: a }));

    function getPericiasOutros(periciaAmeaca) {
        const splitPericia = periciaAmeaca.split(' ');
        const pericia = skills.find(s => s.nome === splitPericia[0]);
        const indexMod = pericia.id === 'oficio' ? 2 : 1;
        return {
            nome: pericia?.id,
            mod: splitPericia[indexMod],
            attr: pericia?.atributo,
            obs: (splitPericia.length > indexMod+1) ? splitPericia.slice(indexMod+1).join(' ') : '',
            oficio: indexMod === 2 ? splitPericia[1] : ''
        }
    }

    function getAtaqueDescricao(ataque) {
        let descricao = [];
        if (ataque.tipodano) {
            descricao.push(`${ataque.tipodano}`);
        }

        if (ataque.critico && ataque.multiplicador) {
            descricao.push(`${ataque.critico}/x${ataque.multiplicador}`);
        }else if (ataque.critico){
            descricao.push(`${ataque.critico}`);
        }else if (ataque.multiplicador){
            descricao.push(`x${ataque.multiplicador}`);
        }

        if (ataque.extra) {
            descricao.push(`mais ${ataque.extra}`);
        }

        if (ataque.alcance) {
            descricao.push(`alcance ${ataque.alcance}`);
        }

        return descricao.length > 0 ? `, ${descricao.join(', ')}` : '';
    }

    function convertAmeacas() {
        return selecionadas.map((ameaca, index) => {
            const nd = ameaca.nd.startsWith("S") ? 20 : (parseInt(ameaca.nd) || 1)

            const luta = ameaca.ataques?.find(ataque => ataque.pericia === 'luta')?.bonus;
            const lutaoutros = luta ? parseInt(luta) - ameaca.atributos.for - Math.floor(nd/2) : 0;

            const pontaria = ameaca.ataques?.find(ataque => ataque.pericia === 'pontaria')?.bonus;
            const pontariaoutros = pontaria ? parseInt(pontaria) - ameaca.atributos.des - Math.floor(nd/2) : 0;

            return {
                id: index,
                playername: ameaca.nome,
                menace_name: ameaca.nome,
                trace: ameaca.tipo,
                charnivel: nd,

                for: ameaca.atributos.for,
                des: ameaca.atributos.des,
                con: ameaca.atributos.con,
                int: ameaca.atributos.int,
                sab: ameaca.atributos.sab,
                car: ameaca.atributos.car,

                vidatotal: ameaca.pv,
                vida: ameaca.pv,
                manatotal: ameaca.pm,
                mana: ameaca.pm,

                proficiencias: `${ameaca.nome} | ND: ${ameaca.nd}\n` +
                    `${ameaca.tipo} ${ameaca.tamanho}\n` +
                    (ameaca.sentidos.length > 0 ? `• Sentidos: ${ameaca.sentidos.join(', ')}\n` : '') +
                    (ameaca.resistencias.length > 0 ? `• Resistências: ${ameaca.resistencias.join(', ')}\n` : ''),

                charnotes:
                    `• Perícias: ${ameaca.pericias.join(', ')}\n\n` +
                    (ameaca.equipamento.length > 0 ? `• Equipamento: ${ameaca.equipamento.join(', ')}\n\n` : '') +
                    `• Tesouro: ${ameaca.tesouro}`,

                tamanho: opcoesTamanho.find(opcao => opcao.label === ameaca.tamanho)?.value || 0,
                deslocamento: ameaca.deslocamento.join(', '),

                defesaoutros: parseInt(ameaca.defesa) - 10 - ameaca.atributos.des,

                attacks: ameaca.ataques.map(ataque => ({
                    nomeataque: ataque.nome,
                    bonusataque: parseInt(ataque.bonus) - (ataque.pericia === 'luta' ?  luta : pontaria),
                    danoataque: ataque.dano,
                    danoextraataque: ataque.danoextra - (ameaca.atributos[ataque.atributo] || 0),
                    margemcriticoataque: ataque.critico || 20,
                    multiplicadorcriticoataque: ataque.multiplicador || 2,
                    ataquepericia: `@{${ataque.pericia}total}+@{condicaomodataquecc}+@{condicaomodataque}`,
                    modatributodano: `@{${ataque.atributo}_mod}`,
                    ataquetipodedano: ataque.tipodano,
                    ataquealcance: ataque.alcance ? `${ataque.tipo}: ${ataque.alcance}` : ataque.tipo,
                    ataquedescricao: ataque.extra,
                })),

                abilities: ameaca.habilidades.map(habilidade => ({
                    nameability: habilidade.nome,
                    abilitydescription: habilidade.descricao
                })),

                spells1: ameaca.magias.map(magia => ({
                    namespell: magia.nome,
                    spelldescription: magia.descricao,
                })),
                ...ameaca.pericias.reduce((acc, pericia) => {
                    const { nome, mod, attr, obs, oficio } = getPericiasOutros(pericia);
                    return {
                        ...acc,
                        ...{
                            [`${nome}outros`]: mod - ameaca.atributos[attr] - Math.floor(nd/2),
                            ...obs !== '' ? {[`${nome}obs`]: obs} : {},
                            ...oficio !== '' ? { oficionome: oficio } : {}
                        }
                    };
                }, {}),
                lutaoutros: lutaoutros,
                pontariaoutros: pontariaoutros,
                ...skills.reduce((acc, skill) => {
                    return { ...acc, ...{[`${skill.id}atributo2`]: `@{${skill.atributo}_mod}`} }
                }, {})
            };
        });
    }


    // Função para exportar ameaças
    async function exportarAmeacas() {
        const ameacas = convertAmeacas();
        if (ameacas.length === 0) return;
        if (ameacas.length === 1) {
            const blob = new Blob([
                JSON.stringify(ameacas[0], null, 2)
            ], { type: 'application/json' });
            saveAs(blob, `${ameacas[0].menace_name.replace(' ', '_').toLowerCase().trim()}_${Date.now()}.json`);
        } else {
            const zip = new JSZip();
            ameacas.forEach(a => {
                zip.file(
                    `${a.menace_name.replace(' ', '_').toLowerCase().trim()}_${a.id}.json`,
                    JSON.stringify(a, null, 2)
                );
            });
            const content = await zip.generateAsync({ type: 'blob' });
            saveAs(content, `ameacas_${Date.now()}.zip`);
        }
    }
    
    function handleSelecionar(opcoes, val) {
        let newSelected = [];

        if(val.action === "select-option"){
            newSelected = [...selecionadas, val.option.data];
        }else if(val.action === "remove-value"){
            newSelected = selecionadas.filter(a => a.id !== val.removedValue.data.id);
        }

        setSelecionadas(newSelected)
    }

    function removeAmeaca(id) {
        setSelecionadas(prev => prev.filter(ameaca => ameaca.id !== id));
    }

    function toggleColapse(id) {
        setSelecionadas(prev => 
            prev.map(a => a.id === id ? { 
              ...a, 
              open: !a.open
            } : a)
        );
    }

    return (
        <div className="form-section">
            <div className="row mb-3">
                <div className="col-md-3">
                    <label className="form-label">Categoria</label>
                    <select className="form-select" value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)}>
                        <option value="">Todos</option>
                        {categorias.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}
                    </select>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Tipo</label>
                    <select className="form-select" value={filtroTipo} onChange={e => setFiltroTipo(e.target.value)}>
                        <option value="">Todos</option>
                        {tipos.map(tam => <option key={tam} value={tam}>{tam}</option>)}
                    </select>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Tamanho</label>
                    <select className="form-select" value={filtroTamanho} onChange={e => setFiltroTamanho(e.target.value)}>
                        <option value="">Todos</option>
                        {tamanhos.map(tam => <option key={tam} value={tam}>{tam}</option>)}
                    </select>
                </div>
                <div className="col-md-3">
                    <label className="form-label">ND</label>
                    <select className="form-select" value={filtroND} onChange={e => setFiltroND(e.target.value)}>
                        <option value="">Todos</option>
                        {nds.map(nd => <option key={nd} value={nd}>{nd}</option>)}
                    </select>
                </div>
            </div>
            
            <Select
                options={options}
                isMulti
                value={selecionadas.map(a => options.find(o => o.data.nome === a.nome))}
                onChange={handleSelecionar}
                placeholder="Selecione ameaças..."
                classNamePrefix="react-select"
            />

            <button className="btn btn-secondary mt-3" onClick={exportarAmeacas} disabled={selecionadas.length === 0}>
                <i className="fa-solid fa-file-arrow-down"></i> Exportar Ameaças
            </button>

            <div className="d-flex flex-column-reverse mt-4">
                {selecionadas.length === 0 && <p>Nenhuma ameaça selecionada.</p>}
                {selecionadas.map(a => (
                    <div key={a.id} className="card mb-3 position-relative">

                        <div className="position-absolute top-0 end-0 m-3">
                            <button className="btn btn-sm btn-outline-secondary" title={a.open ? "Minimizar" : "Expandir" } onClick={() => toggleColapse(a.id)}>
                                <i className={a.open ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down" }></i>
                            </button>

                            <button className="btn btn-sm btn-danger ms-2" title="Remover ameaça" onClick={() => removeAmeaca(a.id)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <div className="card-body">
                            <h1 className="card-title fw-bold">
                                <strong>{a.nome}</strong> | ND {a.nd} | 
                                {a.descricao !== '' && (
                                    <span className='ms-1 clickable' onClick={() => setModalAmeacaId(a.id)}> 
                                        <i className="fa-solid fa-circle-info"></i>
                                    </span>
                                )}
                            </h1>
                            <p>{a.tipo} {a.tamanho}</p>

                            <Modal
                                show={modalAmeacaId === a.id}
                                handleClose={() => setModalAmeacaId(null)}
                                title={`Descrição de ${a.nome}`}
                            >
                                <div className="text-sm">
                                    <p className="pre-wrap fw-italic p-2">{a.descricao}</p>
                                </div>
                            </Modal>

                            {a.open && (
                                <>
                                    <hr className="border border-1 border-dark" />

                                    <div className='d-flex flex-nowrap overflow-auto align-items-start my-2'>
                                        {Object.entries(a.atributos)?.map(([atributo, mod]) => (
                                            <div key={atributo} className="card card-atributo text-center text-nowrap mx-1">
                                                <div className="card-header px-0">
                                                    <strong className="text-uppercase">{atributo}</strong>
                                                </div>
                                                <div className="card-body py-2">
                                                    <strong className="card-text fs-3">{mod===null ? '-' : mod}</strong>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <hr className="border border-1 border-dark" />

                                    <p><strong>Defesa:</strong> {a.defesa} <i className="fa-solid fa-shield-halved"></i></p>

                                    <p><strong>PV:</strong> {a.pv} <i className="fas fa-heart"></i></p>

                                    {a.pm > 0 && (
                                        <p><strong>PM:</strong> {a.pm} <i className="fa-solid fa-flask"></i></p>
                                    )}

                                    <p><strong>Deslocamento:</strong> {a.deslocamento.join(', ')} <i className="fa-solid fa-person-running"></i></p>

                                    {a.sentidos.length > 0 && (
                                        <p><strong>Sentidos:</strong> {a.sentidos.join(', ')} <i className="fa-solid fa-eye"></i></p>
                                    )}

                                    {a.resistencias.length > 0 && (
                                        <p><strong>Resistencias:</strong> {a.resistencias.join(', ')} <i className="fa-solid fa-user-shield"></i></p>
                                    )}

                                    <hr className="border border-1 border-dark" />

                                    <h4>Perícias:</h4>
                                    <div className='d-flex align-content-around flex-wrap mb-2'>
                                        {a.pericias?.map((pericia, index) => (
                                            <span key={index} className="badge bg-primary m-1 p-2">
                                                {pericia}
                                            </span>
                                        ))}
                                    </div>

                                    <hr className="border border-1 border-dark" />

                                    {a.ataques.length > 0 && (
                                        <div className='d-flex flex-column flex-nowrap overflow-auto align-items-start mb-2 pb-2'>
                                            <h4>Ataques:</h4>
                                            {a.ataques?.map((ataque, index) => (
                                                <span key={index} className="badge bg-primary m-1 p-2">
                                                    <strong>{ataque.tipo}</strong> - {ataque.nome}: {ataque.bonus} ({ataque.dano}+{ataque.danoextra}{getAtaqueDescricao(ataque)})
                                                </span>
                                            ))}
                                            
                                        </div>
                                    )}

                                    <hr className="border border-1 border-dark" />

                                    {a.habilidades.length > 0 && (
                                        <div className='pre-wrap mb-2 pb-2'>
                                            <h4>Habilidades:</h4>
                                            <ul className='pb-2'>
                                                {a.habilidades?.map((habilidade, index) => (
                                                    <li key={index}>
                                                        <strong>{habilidade.nome}:</strong> {habilidade.descricao}
                                                    </li>
                                                ))}
                                            </ul>
                                            <hr className="border border-1 border-dark" />
                                        </div>
                                    )}

                                    {a.magias.length > 0 && (
                                        <div className='pre-wrap mb-2 pb-2'>
                                            <h4>Magias:</h4>
                                            <ul>
                                                {a.magias?.map((magia, index) => (
                                                    <li key={index}>
                                                        <strong>{magia.nome}:</strong> {magia.descricao}
                                                    </li>
                                                ))}
                                            </ul>
                                            <hr className="border border-1 border-dark" />
                                        </div>
                                    )}

                                    {a.equipamento && a.equipamento.length > 0 && (
                                        <p><strong>Equipamento:</strong> {a.equipamento.join(', ')} <i className="fa-solid fa-user-gear"></i></p>
                                    )}

                                    <p><strong>Tesouro:</strong> {a.tesouro} <i className="fa-solid fa-gem"></i></p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Ameacas;