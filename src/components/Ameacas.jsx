import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import ameacasArton from '../assets/data/ameaças_de_arton_t20.json';
import ameacasBase from '../assets/data/ameacas_livro_base_t20.json';
import { Tooltip } from "react-tooltip";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

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

    function handleSelecionar(opcoes) {
        setSelecionadas(opcoes ? opcoes.map(o => o.data) : []);
    }

    function convertAmeacas() {
        return selecionadas.map((ameaca, index) => ({
            id: index,
            playername: ameaca.nome,
            menace_name: ameaca.nome,
            trace: ameaca.tipo,
            charnivel: ameaca.nd.startsWith("S") ? 20 : ameaca.nd,

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
                `• Sentidos: ${ameaca.sentidos.join(', ')}\n` +
                `• Resistências: ${ameaca.resistencias.join(', ')}\n`,

            charnotes:
                `• Perícias: ${ameaca.pericias.join(', ')}\n\n` +
                `• Equipamento: ${ameaca.equipamento.join(', ')}\n\n` +
                `• Tesouro: ${ameaca.tesouro}`,

            tamanho: opcoesTamanho.find(opcao => opcao.label === ameaca.tamanho)?.value || 0,
            deslocamento: ameaca.deslocamento.join(', '),

            defesaoutros: parseInt(ameaca.defesa) - 10 - ameaca.atributos.des,

            attacks: ameaca.ataques.map(ataque => ({
                nomeataque: ataque.nome,
                // bonusataque: ataque.attackbonus,
                // danoataque: ataque.attackdano,
                // danoextraataque: ataque.attackdanoextra,
                // margemcriticoataque: ataque.attackcritico,
                // multiplicadorcriticoataque: ataque.attackmultiplicador,
                // ataquepericia: `@{${ataque.attackpericiaUsada?.toLowerCase()}total}+@{condicaomodataquecc}+@{condicaomodataque}`,
                // modatributodano: ataque.attackatributodano,
                // ataquetipodedano: ataque.tipodano,
                ataquealcance: ataque.tipo,
                ataquedescricao: `${ataque.bonus} (${ataque.dano})`,
            })),

            abilities: ameaca.habilidades.map(habilidade => ({
                nameability: habilidade.nome,
                abilitydescription: habilidade.descricao
            })),

            spells1: ameaca.magias.map(magia => ({
                namespell: magia.nome,
                spelldescription: magia.descricao,
            })),
        }));
    }

    // Função para exportar ameaças
    async function exportarAmeacas() {
        const ameacas = convertAmeacas();
        console.log(ameacas);
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
                onChange={handleSelecionar}
                placeholder="Selecione ameaças..."
                classNamePrefix="react-select"
            />

            <button className="btn btn-secondary mt-3" onClick={exportarAmeacas} disabled={selecionadas.length === 0}>
                <i class="fa-solid fa-file-arrow-down"></i> Exportar Ameaças
            </button>

            <div className="mt-4">
                {selecionadas.length === 0 && <p>Nenhuma ameaça selecionada.</p>}
                {selecionadas.map((a, index) => (
                    <div key={index} className="card mb-3">
                        <div className="card-body">
                            <h1 className="card-title fw-bold">
                                <strong>{a.nome}</strong> | ND {a.nd} | 
                                {a.descricao !== '' && <span data-tooltip-id={`tooltip-desc-${index}`} className='ms-1'> <i className="fa-solid fa-circle-info"></i></span>}
                            </h1>
                            <p>{a.tipo} {a.tamanho}</p>

                            <hr className="border border-1 border-dark" />

                            <Tooltip id={`tooltip-desc-${index}`} style={{ maxWidth: '600px' }}>
                                <div className="text-sm">
                                    <p className="pre-wrap fw-italic p-2">{a.descricao}</p>
                                </div>
                            </Tooltip>

                            <div className='d-flex flex-nowrap justify-content-start my-2'>
                                {Object.entries(a.atributos)?.map(([atributo, mod]) => (
                                    <div className="card mx-1 text-center text-nowrap">
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
                                {a.pericias?.map((pericia) => (
                                    <span className="badge bg-primary m-1 p-2">
                                        {pericia}
                                    </span>
                                ))}
                            </div>

                            <hr className="border border-1 border-dark" />

                            {a.ataques.length > 0 && (
                                <div className='mb-2 pb-2'>
                                    <h4>Ataques:</h4>
                                    {a.ataques?.map((ataque) => (
                                        <span className="badge bg-primary m-1 p-2">
                                            <strong>{ataque.tipo}</strong> - {ataque.nome}: {ataque.bonus} ({ataque.dano})
                                        </span>
                                    ))}
                                    <hr className="border border-1 border-dark" />
                                </div>
                            )}

                            {a.habilidades.length > 0 && (
                                <div className='pre-wrap mb-2 pb-2'>
                                    <h4>Habilidades:</h4>
                                    <ul className='pb-2'>
                                        {a.habilidades?.map((habilidade) => (
                                            <li>
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
                                        {a.magias?.map((magia) => (
                                            <li>
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Ameacas;