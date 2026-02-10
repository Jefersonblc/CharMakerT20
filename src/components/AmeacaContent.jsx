import React from 'react';
import './Ficha.css';

const AmeacaContent = React.forwardRef(({ ameaca }, ref) => {

    const getAtaqueDescricao = (ataque) => {
        let descricao = [];
        if (ataque.tipodano) {
            descricao.push(`${ataque.tipodano}`);
        }

        if (ataque.critico && ataque.multiplicador) {
            descricao.push(`${ataque.critico}/x${ataque.multiplicador}`);
        } else if (ataque.critico) {
            descricao.push(`${ataque.critico}`);
        } else if (ataque.multiplicador) {
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

    return (
        <div ref={ref} className="bg-white p-0" style={{ fontSize: '0.8rem', lineHeight: '1.2' }}>
            <h3 className="card-title fw-bold mb-1">
                <strong>{ameaca.nome}</strong> | ND {ameaca.nd}
            </h3> 
            <p className="mb-1">{ameaca.tipo} {ameaca.tamanho}</p>

            <hr className="border border-1 border-dark my-1" />

            <div className='d-flex flex-nowrap overflow-auto align-items-start my-1'>
                {Object.entries(ameaca.atributos)?.map(([atributo, mod]) => (
                    <div key={atributo} className="card card-atributo text-center text-nowrap mx-1">
                        <div className="card-header px-0 py-0">
                            <strong className="text-uppercase" style={{ fontSize: '0.7rem' }}>{atributo}</strong>
                        </div>
                        <div className="card-body py-1 px-2">
                            <strong className="card-text fs-4">{mod === null ? '-' : mod}</strong>
                        </div>
                    </div>
                ))}
            </div>

            <hr className="border border-1 border-dark my-1" />

            <div className="d-flex flex-wrap gap-3 mb-1" style={{ pageBreakInside: 'avoid' }}>
                <p className="mb-0"><strong>Defesa:</strong> {ameaca.defesa} <i className="fa-solid fa-shield-halved"></i></p>
                <p className="mb-0"><strong>PV:</strong> {ameaca.pv} <i className="fas fa-heart"></i></p>
                {ameaca.pm > 0 && (
                    <p className="mb-0"><strong>PM:</strong> {ameaca.pm} <i className="fa-solid fa-flask"></i></p>
                )}
                <p className="mb-0"><strong>Deslocamento:</strong> {ameaca.deslocamento.join(', ')} <i className="fa-solid fa-person-running"></i></p>
            </div>
            <div className="mb-1" style={{ pageBreakInside: 'avoid' }}>
                {ameaca.sentidos.length > 0 && (
                    <p className="mb-0"><strong>Sentidos:</strong> {ameaca.sentidos.join(', ')} <i className="fa-solid fa-eye"></i></p>
                )}
                {ameaca.resistencias.length > 0 && (
                    <p className="mb-0"><strong>Resistências:</strong> {ameaca.resistencias.join(', ')} <i className="fa-solid fa-user-shield"></i></p>
                )}
            </div>

            <hr className="border border-1 border-dark my-1" />

            <h6 className="fw-bold mb-1">Perícias:</h6>
            <div className='d-flex align-content-around flex-wrap mb-1'>
                {ameaca.pericias?.map((pericia, index) => (
                    <span key={index} className="badge bg-secondary m-1 p-1 text-wrap text-start" style={{ fontSize: '0.75rem' }}>
                        {pericia}
                    </span>
                ))}
            </div>

            <hr className="border border-1 border-dark my-1" />

            {ameaca.ataques.length > 0 && (
                <>
                <h6 className="fw-bold mb-1">Ataques:</h6>
                <div className='d-flex align-content-around flex-wrap mb-1'>
                    {ameaca.ataques?.map((ataque, index) => (
                        <span key={index} className="badge bg-danger m-1 p-1 text-wrap text-start" style={{ fontSize: '0.8rem' }}>
                            <strong>{ataque.tipo}</strong> - {ataque.nome}: {ataque.bonus} ({ataque.dano}{ataque.danoextra ? `+${ataque.danoextra}` : ''}{getAtaqueDescricao(ataque)})
                        </span>
                    ))}
                </div>
                </>
            )}

            {ameaca.habilidades.length > 0 && (
                <div className='pre-wrap mb-1 pb-1' style={{ pageBreakInside: 'avoid' }}>
                    <hr className="border border-1 border-dark my-1" />
                    <h6 className="fw-bold mb-1">Habilidades:</h6>
                    <ul className='pb-1 ps-3 mb-0'>
                        {ameaca.habilidades?.map((habilidade, index) => (
                            <li key={index} className="mb-1">
                                <strong>{habilidade.nome}:</strong> {habilidade.descricao}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {ameaca.magias.length > 0 && (
                <div className='pre-wrap mb-1 pb-1' style={{ pageBreakInside: 'avoid' }}>
                    <hr className="border border-1 border-dark my-1" />
                    <h6 className="fw-bold mb-1">Magias:</h6>
                    <ul className='pb-1 ps-3 mb-0'>
                        {ameaca.magias?.map((magia, index) => (
                            <li key={index} className="mb-1">
                                <strong>{magia.nome}:</strong> {magia.descricao}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <hr className="border border-1 border-dark my-1" />

            {ameaca.equipamento && ameaca.equipamento.length > 0 && (
                <p className="mb-0"><strong>Equipamento:</strong> {ameaca.equipamento.join(', ')} <i className="fa-solid fa-user-gear"></i></p>
            )}
            <p className="mb-0"><strong>Tesouro:</strong> {ameaca.tesouro} <i className="fa-solid fa-gem"></i></p>
        </div>
    );
});

export default AmeacaContent;