import { useState, useEffect } from 'react'
import './App.css'
import Personagem from './components/Personagem';
import Pericias from './components/Pericias';
import Ataques from './components/Ataques';
import Habilidades from './components/Habilidades';
import Magias from './components/Magias';
import Exportar from './components/Exportar';
import Ameacas from './components/Ameacas';
import Ficha from './components/Ficha';

const tabs = [
  { name: 'Personagem', icon:"fas fa-circle-user", animation: "fa-beat", component: <Personagem /> },
  { name: 'Perícias', icon:"fa-solid fa-dice-d20", animation: "fa-shake", component: <Pericias /> },
  { name: 'Ataques', icon:"fa-solid fa-burst", animation: "fa-spin-pulse", component: <Ataques /> },
  { name: 'Habilidades', icon:"fas fa-star", animation: "fa-bounce", component: <Habilidades /> },
  { name: 'Magias', icon:"fas fa-fire", animation: "fa-beat-fade", component: <Magias /> },
  { name: 'Ameaças', icon:"fa-solid fa-skull", animation: "fa-fade", component: <Ameacas /> },
  { name: 'Configurações', icon:"fas fa-gear", animation: "fa-spin-pulse", component: <Exportar /> },
  { name: 'Ficha', icon:"fas fa-scroll", animation: "fa-fade", component: <Ficha /> },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateTab, setAnimateTab] = useState(-1);

  return (
    <div className="container-md">
      <h1 className="my-4">Gerador Tormenta20</h1>

      <ul className="nav nav-tabs" id="mainTabs" role="tablist">
        {tabs.map((tab, idx) => (
          <li className="nav-item" role="presentation" key={tab.name}>
            <button
              className={`nav-link ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
              onMouseOver={() => setAnimateTab(idx)}
              onMouseLeave={() => setAnimateTab(-1)}
              type="button"
            >
              <i className={tab.icon + (animateTab === idx ? ` ${tab.animation}` : "")}></i> {tab.name}
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
