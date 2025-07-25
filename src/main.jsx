import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { PersonagemProvider } from './context/PersonagemContext'
import '@fortawesome/fontawesome-free/css/all.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonagemProvider>
      <App />
    </PersonagemProvider>
  </StrictMode>,
)
