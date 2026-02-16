import React, { useState } from 'react';
import { usePersonagem } from '../context/PersonagemContext';
import weaponsData from '../assets/data/itens/weapons.json';
import armorData from '../assets/data/itens/armor.json';
import miscData from '../assets/data/itens/misc.json';
import accessoriesData from '../assets/data/itens/accessories.json';

const Itens = () => {
  const { personagem, setPersonagem } = usePersonagem();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedSubCategory, setSelectedSubCategory] = useState('Todos');
  const [selectedPurpose, setSelectedPurpose] = useState('Todos');
  const [selectedGrip, setSelectedGrip] = useState('Todos');

  // Helper para filtrar itens gerais por subcategoria
  const filterMisc = (term) => miscData.items.filter(item => item.category && item.category.includes(term));

  // Estrutura preparada para receber outros dados conforme forem criados
  const allData = {
    'Armas': weaponsData.items || [],
    'Armaduras': armorData.items || [],
    'Acessórios': accessoriesData.items || [],
    'Equipamentos': filterMisc('Equipamento de Aventura'),
    'Ferramentas': filterMisc('Ferramentas'),
    'Vestuário': filterMisc('Vestuário'),
    'Esotéricos': filterMisc('Esotéricos'),
    'Alquímicos': filterMisc('Alquímicos'),
    'Aparatos': filterMisc('Aparatos'),
    'Alimentação': filterMisc('Alimentação'),
    'Animais': filterMisc('Animais'),
    'Veículos': filterMisc('Veículos'),
  };

  const categories = ['Todos', ...Object.keys(allData)];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory('Todos');
    setSelectedPurpose('Todos');
    setSelectedGrip('Todos');
  };

  const parsePrice = (priceString) => {
    if (!priceString || priceString === '—') return 0;
    // Remove 'T$', substitui ',' por '.' e remove caracteres não numéricos (exceto ponto)
    // Ex: "T$ 3.000" -> "3000", "T$ 0,5" -> "0.5"
    const cleanString = priceString.replace('T$', '').replace(/\./g, '').replace(',', '.').trim();
    return parseFloat(cleanString) || 0;
  };

  const parseSpaces = (spacesString) => {
    if (!spacesString || spacesString === '—') return 0;
    const cleanString = String(spacesString).replace(',', '.').trim();
    return parseFloat(cleanString) || 0;
  };

  const addItem = (item) => {
    setPersonagem(prev => ({
      ...prev,
      inventario: [...(prev.inventario || []), { ...item, price: parsePrice(item.price), quantidade: 1 }]
    }));
  };

  const addCustomItem = () => {
    addItem({ quantidade: 1, name: '', description: '', price: '0', category: 'Manual', spaces: '0' });
  };

  const removeItem = (indexToRemove) => {
    setPersonagem(prev => ({
      ...prev,
      inventario: (prev.inventario || []).filter((_, index) => index !== indexToRemove)
    }));
  };

  const updateInventoryItem = (index, field, value) => {
    setPersonagem(prev => ({
      ...prev,
      inventario: prev.inventario.map((item, i) => i === index ? { ...item, [field]: value } : item)
    }));
  };

  const getSubCategories = (category) => {
    const items = allData[category] || [];
    const subCats = new Set();
    if (category === 'Armas' || category === 'Armaduras') {
      items.forEach(item => item.proficiency && subCats.add(item.proficiency));
    } else if (['Ferramentas', 'Alquímicos', 'Alimentação', 'Acessórios'].includes(category)) {
      items.forEach(item => {
        subCats.add(item.category);
      });
    }
    if (subCats.size === 0) return [];
    return ['Todos', ...Array.from(subCats).sort()];
  };

  const currentSubCategories = getSubCategories(selectedCategory);

  const getFilteredItems = () => {
    let items = [];
    if (selectedCategory === 'Todos') {
      Object.values(allData).forEach(list => items = [...items, ...list]);
    } else {
      items = allData[selectedCategory] || [];
      if (selectedSubCategory !== 'Todos') {
        items = items.filter(item => {
          if (item.proficiency === selectedSubCategory) return true;
          if (item.category && item.category.includes(selectedSubCategory)) return true;
          return false;
        });
      }

      if (selectedCategory === 'Armas') {
        if (selectedPurpose !== 'Todos') {
          items = items.filter(item => item.purpose === selectedPurpose);
        }
        if (selectedGrip !== 'Todos') {
          items = items.filter(item => item.grip === selectedGrip);
        }
      }
    }

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      items = items.filter(item => item.name.toLowerCase().includes(lowerTerm));
    }
    return items;
  };

  const filteredItems = getFilteredItems();

  const totalSpaces = (personagem.inventario || []).reduce((acc, item) => acc + (parseSpaces(item.spaces) * (parseFloat(item.quantidade) || 1)), 0);

  const renderItemDetails = (item) => {
    const details = [];
    if (item.damage && item.damage !== '—') details.push(`Dano: ${item.damage}`);
    if (item.critical && item.critical !== '—') details.push(`Crítico: ${item.critical}`);
    if (item.range && item.range !== '—') details.push(`Alcance: ${item.range}`);
    if (item.damageType && item.damageType !== '—') details.push(`Tipo: ${item.damageType}`);
    if (item.defenseBonus) details.push(`Defesa: ${item.defenseBonus}`);
    if (item.armorPenalty && item.armorPenalty !== '0') details.push(`Penalidade: ${item.armorPenalty}`);
    
    return details.join(' | ');
  };

  return (
    <div className="form-section">
      {/* Seção de Inventário */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0"><i className="fas fa-box-open me-2"></i> Inventário</h5>
          <span className="badge bg-light text-dark">{totalSpaces} Espaços</span>
        </div>
        <div className="card-body">
          {/* Lista de Inventário */}
          <div className="table-responsive border rounded" >
            <table className="table table-sm table-hover mb-0 align-middle">
              <thead className="table-light sticky-top">
                <tr>
                  <th scope="col" style={{ width: '6%' }}>Qtde</th>
                  <th scope="col" style={{ width: '20%' }}>Nome</th>
                  <th scope="col">Descrição</th>
                  <th scope="col" style={{ width: '10%' }}>Preço</th>
                  <th scope="col" style={{ width: '10%' }}>Espaços</th>
                  <th scope="col" style={{ width: '5%' }}></th>
                </tr>
              </thead>
              <tbody className="pb-2">
                {(personagem.inventario || []).length > 0 ? (
                  (personagem.inventario || []).map((item, index) => (
                    <tr key={`inv-${index}`}>
                      <td>
                        <input
                          type="number"
                          className="form-control form-control-sm border-0 bg-transparent text-center"
                          value={item.quantidade || 1}
                          onChange={(e) => updateInventoryItem(index, 'quantidade', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control form-control-sm border-0 bg-transparent"
                          value={item.name}
                          onChange={(e) => updateInventoryItem(index, 'name', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control form-control-sm border-0 bg-transparent"
                          value={item.description || ''}
                          onChange={(e) => updateInventoryItem(index, 'description', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control form-control-sm border-0 bg-transparent"
                          value={item.price || ''}
                          onChange={(e) => updateInventoryItem(index, 'price', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control form-control-sm border-0 bg-transparent text-center"
                          value={item.spaces || ''}
                          onChange={(e) => updateInventoryItem(index, 'spaces', e.target.value)}
                          step="0.5"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary-outline btn-sm text-danger p-1"
                          onClick={() => removeItem(index)}
                          title="Remover"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-muted py-3">
                      Inventário vazio.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Adicionar Item Manualmente */}
          <button className="btn btn-secondary btn-sm mt-2" onClick={addCustomItem}>
            <i className="fas fa-plus"></i> Adicionar item
          </button>

        </div>
      </div>

      <div className="row">
        {/* Filtros (Lado Esquerdo) */}
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-header bg-secondary text-white">
              <i className="fas fa-filter me-2"></i> Filtros
            </div>
            <div className="card-body">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="list-group list-group-flush">
              {categories.map(cat => (
                <React.Fragment key={cat}>
                  <button
                    type="button"
                    className={`list-group-item list-group-item-action ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat}
                  </button>
                  {selectedCategory === cat && (
                    <div className="list-group list-group-flush">
                      {currentSubCategories.length > 0 && (
                        <>
                          {cat === 'Armas' && <div className="ps-3 py-1 text-muted small fw-bold text-uppercase mt-2" style={{fontSize: '0.75rem'}}>Proficiência</div>}
                          {currentSubCategories.map(sub => (
                            <button
                              key={sub}
                              type="button"
                              className={`list-group-item list-group-item-action ps-4 py-1 small border-0 ${selectedSubCategory === sub ? 'fw-bold text-primary' : 'text-muted'}`}
                              style={{ backgroundColor: '#f8f9fa' }}
                              onClick={() => setSelectedSubCategory(sub)}
                            >
                              <i className={`fas ${selectedSubCategory === sub ? 'fa-check' : 'fa-angle-right'} me-2`}></i>
                              {sub === 'Todos' ? 'Todas' : sub}
                            </button>
                          ))}
                        </>
                      )}

                      {cat === 'Armas' && (
                        <>
                          <div className="ps-3 py-1 text-muted small fw-bold text-uppercase mt-2" style={{fontSize: '0.75rem'}}>Propósito</div>
                          {['Todos', ...new Set(allData['Armas'].map(i => i.purpose).filter(Boolean))].sort().map(p => (
                            <button
                              key={p}
                              type="button"
                              className={`list-group-item list-group-item-action ps-4 py-1 small border-0 ${selectedPurpose === p ? 'fw-bold text-primary' : 'text-muted'}`}
                              style={{ backgroundColor: '#f8f9fa' }}
                              onClick={() => setSelectedPurpose(p)}
                            >
                              <i className={`fas ${selectedPurpose === p ? 'fa-check' : 'fa-angle-right'} me-2`}></i>
                              {p === 'Todos' ? 'Todos' : p}
                            </button>
                          ))}

                          <div className="ps-3 py-1 text-muted small fw-bold text-uppercase mt-2" style={{fontSize: '0.75rem'}}>Empunhadura</div>
                          {['Todos', ...new Set(allData['Armas'].map(i => i.grip).filter(Boolean))].sort().map(g => (
                            <button
                              key={g}
                              type="button"
                              className={`list-group-item list-group-item-action ps-4 py-1 small border-0 ${selectedGrip === g ? 'fw-bold text-primary' : 'text-muted'}`}
                              style={{ backgroundColor: '#f8f9fa' }}
                              onClick={() => setSelectedGrip(g)}
                            >
                              <i className={`fas ${selectedGrip === g ? 'fa-check' : 'fa-angle-right'} me-2`}></i>
                              {g === 'Todos' ? 'Todos' : g}
                            </button>
                          ))}
                        </>
                      )}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Lista de Itens Disponíveis */}
        <div className="col-md-9 mb-3">
          <div className="card">
            <div className="card-header bg-secondary text-white">
              <i className="fas fa-list me-2"></i> Itens
            </div>
            <div className="list-group list-group-flush overflow-auto" style={{ maxHeight: '900px' }}>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="list-group-item"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-1 fw-bold">{item.name}</h6>
                      <small className="text-muted border-start ms-2 ps-2">{item.category}</small>
                      <div className='ms-auto align-self-center'>
                        <span className="badge bg-secondary me-2" title='Espaços'>{item.spaces} <i class="fa-solid fa-dumbbell"></i></span>
                        <span className="badge bg-primary me-2" title='Preço'>{item.price}</span>
                        <button 
                          className="btn btn-secondary btn-sm" 
                          onClick={() => addItem(item)}
                          title="Adicionar ao inventário"
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <p className="mb-1 small text-muted">
                      {renderItemDetails(item)}
                    </p>
                    <small className="text-muted">
                      {[item.proficiency, item.grip, item.purpose].filter(Boolean).join(' • ')}
                    </small>
                    <p className="small text-muted fst-italic border-top pt-1 mt-1">
                      {item.description}
                    </p>
                  </div>
                ))
              ) : (
                <div className="list-group-item text-center text-muted py-4">
                  Nenhum item encontrado nesta categoria.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itens;