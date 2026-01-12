import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { usePersonagem } from '../context/PersonagemContext';
import './Ficha.css';

function Ficha() {
  const { personagem, attributes } = usePersonagem();
  const fichaRef = useRef(null);

  function totalSkill(id) {
    const skill = personagem.pericias[id];
    if (!skill) return 0;

    const treined = skill.treined || false;
    const atributo = skill.atributo;
    const outros = skill.outros || 0;
    const bonusTreinado = treined ? bonusPericiaTreinada(personagem.charnivel) : 0;
    const penalidadeArmadura = skill.armorPenalty ? personagem.penalidadearmadura + personagem.penalidadeescudo : 0;

    let total = bonusTreinado + personagem[atributo] + outros + Math.floor(personagem.charnivel / 2) - penalidadeArmadura;

    if (skill.id === 'furtividade') {
      total += parseInt(personagem.tamanho) || 0;
    }

    return total;
  }

  function getDefesaTotal() {
    const defesaAtributo = personagem.defesaatributo !== '' ? personagem[personagem.defesaatributo] : 0;
    return personagem.defesatotal + personagem.defesaoutros +
      personagem.defesaarmadura + personagem.defesaescudo + defesaAtributo
  }

  function bonusPericiaTreinada(nivel) {
    if (nivel >= 15) return 6;
    if (nivel >= 7) return 4;
    return 2;
  }

  const handlePrintPDF = () => {
    const element = fichaRef.current;
    const opt = {
      margin: 1,
      filename: `t20-${personagem.playername || 'personagem'}-${new Date().getTime()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, dpi: 192, letterRendering: true },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="container-md mt-4 mb-4">
      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={handlePrintPDF}>
          <i className="fas fa-download"></i> Baixar PDF
        </button>
      </div>

      {/* Cabeçalho */}
      <div className="text-center mb-4 pb-3">
        <h1 className="fw-bold mb-0">FICHA DE PERSONAGEM</h1>
        <p className="text-muted mb-0">Tormenta 20</p>
      </div>

      <div ref={fichaRef} className="bg-white p-4">
        {/* Informações Básicas */}
        <div className="mb-4 pt-4 border-top border-dark">
          <div className="mb-3">
            <label className="fw-bold">Nome</label>
            <div className="border-bottom border-dark pb-2">{personagem.playername}</div>
          </div>
          <div className="row g-3">
            <div className="col-md">
              <label className="fw-bold small">Raça</label>
              <div className="border-bottom border-dark pb-2">{personagem.trace}</div>
            </div>
            <div className="col-md">
              <label className="fw-bold small">Classe</label>
              <div className="border-bottom border-dark pb-2">{personagem.tlevel}</div>
            </div>
            <div className="col-md">
              <label className="fw-bold small">Origem</label>
              <div className="border-bottom border-dark pb-2">{personagem.torigin}</div>
            </div>
            <div className="col-md">
              <label className="fw-bold small">Divindade</label>
              <div className="border-bottom border-dark pb-2">{personagem.divindade}</div>
            </div>
            <div className="col-md-1">
              <label className="fw-bold small">Nível</label>
              <div className="border-bottom border-dark pb-2 text-center faded-text">{personagem.charnivel || '1'}</div>
            </div>
          </div>
        </div>

        {/* Atributos */}
        <div className="mb-4">
          <div className="row g-2">
            {Object.keys(attributes).map(attr => (
              <div className="col-2" key={attr}>
                <div className="card card-atributo text-center">
                  <div className="card-header px-0">
                    <small className="fw-bold">{attributes[attr].name.toUpperCase()}</small>
                  </div>
                  <div className="card-body p-2">
                    <strong className="card-text fs-1">{personagem[attr]}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vida, Mana e Perícias */}
        <div className="mb-4">
          <div className="row g-3">
            <div className="col-md-7">
              <div className="row g-2 mb-4">
                <div className="col-6">
                  <div className="card border-dark">
                    <div className="card-body">
                      <small className="text-muted fw-bold d-block mb-2">
                        <i className="fas fa-heart text-danger"></i> PV
                      </small>
                      <h4 className="m-2 text-center"><span className="faded-text">{personagem.vidatotal}</span> / ____</h4>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card border-dark">
                    <div className="card-body">
                      <small className="text-muted fw-bold d-block mb-2">
                        <i className="fa-solid fa-flask text-primary"></i> PM
                      </small>
                      <h4 className="m-2 text-center"><span className="faded-text">{personagem.manatotal}</span> / ____</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-2 mb-4">
                <div className="col-12">
                  <div className="card border-dark">
                    <div className="card-body">
                      <small className="text-muted fw-bold d-block mb-2">ATAQUES</small>
                      <table className="table-attacks table table-sm mb-0">
                        <thead>
                          <tr>

                            <th>Nome do Ataque</th>
                            <th className="text-center">Bônus Ataque</th>
                            <th className="text-center">Dano</th>
                            <th className="text-center">Dano Extra</th>
                            <th className="text-center">Crítico</th>
                          </tr>
                        </thead>
                        <tbody>
                          {personagem.attacks && personagem.attacks.length > 0 ? personagem.attacks.map((attack, idx) => (
                            <tr key={idx}>
                              <td className="fw-bold">{attack.attackname}</td>
                              <td className="text-center">{attack.attackbonus}</td>
                              <td className="text-center">{attack.attackdano}</td>
                              <td className="text-center">{attack.attackdanoextra}</td>
                              <td className="text-center">{attack.attackcritico}/x{attack.attackmultiplicador}</td>
                            </tr>
                          )) :
                            <>
                              <tr><td colSpan="5">•</td></tr>
                              <tr><td colSpan="5">•</td></tr>
                              <tr><td colSpan="5">•</td></tr>
                            </>}
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>


              <div className="row g-2 mb-2">
                <div className="col-6">
                  <div className="card border-dark">
                    <div className="card-body p-2">
                      <div className="mb-2">
                        <small className="text-muted fw-bold d-block">DEFESA</small>
                        <h4 className="faded-text text-center">{getDefesaTotal()}</h4>
                      </div>
                      <table className="table table-sm table-borderless table-defense mb-0">
                        <thead>
                          <tr className="border-bottom border-dark small">
                            <th className="ps-0"><i className="fas fa-shield-alt"></i></th>
                            <th className="text-center">Defesa</th>
                            <th className="text-center pe-0">Penalidade</th>
                          </tr>
                        </thead>
                        <tbody className="small">
                          <tr className="border-bottom border-dark">
                            <td className="ps-0">Armadura</td>
                            <td className="text-center faded-text">{personagem.defesaarmadura || 0}</td>
                            <td className="text-center faded-text pe-0">{personagem.penalidadearmadura || 0}</td>
                          </tr>
                          <tr>
                            <td className="ps-0">Escudo</td>
                            <td className="text-center faded-text">{personagem.defesaescudo || 0}</td>
                            <td className="text-center faded-text pe-0">{personagem.penalidadeescudo || 0}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                                        <div className="card border-dark mt-2">
                        <div className="card-body">
                          <small className="text-muted fw-bold d-block"><small>Tamanho:</small> {personagem.tamanholabel}</small>
                        </div>
                      </div>

                      <div className="card border-dark mt-2">
                        <div className="card-body">
                          <small className="text-muted fw-bold d-block"><small>Deslocamento:</small> {personagem.deslocamento}</small>
                        </div>
                      </div>
                </div>

                <div className="col-6">
                  <div className="row g-2 mb-2">
                    <div className="col-12">
                      <div className="card border-dark">
                        <div className="card-body text-center">
                          <small className="text-muted fw-bold d-block mb-2">Proficiências/Outros</small>
                          <p className="mb-0 small">{personagem.proficiencias}</p>
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="row g-2">
                    <div className="col-6">

                    </div>
                    <div className="col-6">

                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Coluna Direita: Perícias */}
            <div className="col-md-5">
              <div className="row g-2">
                <div className="col-12">
                  <div className="list-skills d-flex flex-wrap">
                    {Object.values(personagem.pericias).map((skill, idx) => (
                      <div className="list-skills-item d-flex justify-content-between align-items-center py-1 px-2" key={idx}>
                        <small>{skill.nome} {skill.treined && (<span className="ms-1">♦</span>)}</small>
                        <span className="fw-bold">{totalSkill(skill.id) || 0}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Anotações */}
          <div className="notes-section mb-4">
            <h5 className="fw-bold text-uppercase border-bottom border-dark pb-2 mb-3">Anotações</h5>
            <p className="mb-0 small text-break">{personagem.charnotes}</p>
            <hr/>
            <hr/>
            <hr/>
          </div>

        {/* Habilidades */}
        {personagem.abilities && personagem.abilities.length > 0 && (
          <div className="mb-4 list-smaller">
            <h5 className="fw-bold text-uppercase border-bottom border-dark pb-2 mb-3">Habilidades</h5>
            <div className="p-2">
              {personagem.abilities.map((ability, idx) => (
                <div key={idx} className="mb-2 pb-2 border-bottom border-dark">
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <strong className="small">{ability.name}</strong>
                    <small className="text-muted text-nowrap">{ability.type}</small>
                  </div>
                  {ability.description && <small className="d-block mt-1">{ability.description}</small>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Magias */}
        {[1, 2, 3, 4, 5].map(circle => {
          const spellsCicle = `spells${circle}`;
          return personagem[spellsCicle] && personagem[spellsCicle].length > 0 ? (
            <div className="mb-4" key={spellsCicle}>
              <h5 className="fw-bold text-uppercase border-bottom border-dark pb-2 mb-3">Magias de {circle}º Círculo ({(circle * (circle + 1)) / 2} PM)</h5>
              <div className="p-2">
                {personagem[spellsCicle].map((spell, idx) => (
                  <div key={idx} className="list-smaller mb-2 pb-2 border-bottom border-dark">
                    <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
                      <strong>{spell.namespell}</strong>
                      <small className="text-muted text-nowrap">{spell.spellescola} | {spell.spelltipo}</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-start gap-2 border-bottom border-dark small">
                      {spell.spellcd && <div className="mb-1"><strong>CD:</strong> {spell.spellcd}</div>}
                      {spell.spellexecucao && <div className="mb-1"><strong>Execução:</strong> {spell.spellexecucao}</div>}
                      {spell.spellalcance && <div className="mb-1"><strong>Alcance:</strong> {spell.spellalcance}</div>}
                      {spell.spellduracao && <div className="mb-1"><strong>Duração:</strong> {spell.spellduracao}</div>}
                      {spell.spellalvoarea && <div className="mb-1"><strong>Alvo/Área:</strong> {spell.spellalvoarea}</div>}
                      {spell.spellresistencia && <div className="mb-1"><strong>Resistência:</strong> {spell.spellresistencia}</div>}
                    </div>
                    <div className="small">
                      {spell.spelldescription && <div className="mt-1 spell-detail small">{spell.spelldescription}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null;
        })}


        {/* Rodapé */}
        <div className="text-center text-muted small pt-3 mt-4">
          <p className="mb-0">Gerado por CharMaker T20</p>
          <p className="mb-0">{new Date().toLocaleDateString('pt-BR')}</p>
        </div>
      </div>
    </div>
  );
}

export default Ficha;
