import React, { useRef, useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { usePersonagem } from '../context/PersonagemContext';
import './Ficha.css';
import FichaContent from './FichaContent';

function Ficha() {
  const { personagem } = usePersonagem();
  const [printing, setPrinting] = useState(false);
  const printRef = useRef(null);

  useEffect(() => {
    if (printing && printRef.current) {
      const element = printRef.current;
      const opt = {
        margin: 0,
        filename: `t20-${personagem.playername || 'personagem'}-${new Date().getTime()}.pdf`,
        image: { type: 'jpeg', quality: 0.99 },
        html2canvas: { scale: 2, dpi: 192, letterRendering: true, allowTaint: true, useCORS: true, windowWidth: 1100 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      html2pdf().set(opt).from(element).save().then(() => {
        setPrinting(false);
      });
    }
  }, [printing, personagem.playername]);

  const handlePrintPDF = () => {
    setPrinting(true);
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

      <FichaContent />

      {printing && (
        <div style={{ position: 'fixed', top: '-9999px', left: '-9999px', width: '1100px' }}>
          <FichaContent ref={printRef} />
        </div>
      )}
    </div>
  );
}

export default Ficha;
