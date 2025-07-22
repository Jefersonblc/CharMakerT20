import { useState, useEffect } from 'react'
import './App.css'
import Personagem from './components/Personagem';
import Pericias from './components/Pericias';
import Ataques from './components/Ataques';
import Habilidades from './components/Habilidades';
import Magias from './components/Magias';
import Exportar from './components/Exportar';

const tabs = [
  { name: 'Personagem', icon:"fas fa-circle-user", component: <Personagem /> },
  { name: 'Perícias', icon:"fa-solid fa-dice-d20", component: <Pericias /> },
  { name: 'Ataques', icon:"fas fa-star", component: <Ataques /> },
  { name: 'Habilidades', icon:"fas fa-fire", component: <Habilidades /> },
  { name: 'Magias', icon:"fas fa-fire", component: <Magias /> },
  { name: 'Exportar', icon:"fas fa-code", component: <Exportar /> },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      <h1 className="mb-4">Gerador Tormenta20</h1>

      <ul className="nav nav-tabs" id="mainTabs" role="tablist">
        {tabs.map((tab, idx) => (
          <li className="nav-item" role="presentation" key={tab.name}>
            <button
              className={`nav-link ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
              type="button"
            >
              <i className={tab.icon}></i> {tab.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade show active">
          {tabs[activeTab].component}
        </div>
      </div>
    </div>
  );
}

export default App
