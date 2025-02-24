import React, { useState } from 'react';

function MelhoriaPublica({ abaAberta, toggleAba }) {
  const [pavimentacao, setPavimentacao] = useState('');
  const [redeEnergia, setRedeEnergia] = useState('');
  const [redeGaleriaPluvial, setRedeGaleriaPluvial] = useState('');
  const [redeAgua, setRedeAgua] = useState('');
  const [redeTelefonica, setRedeTelefonica] = useState('');
  const [redeEsgoto, setRedeEsgoto] = useState('');

  return (
    <div className="aba">
      <div className="aba-header" onClick={() => toggleAba('melhoria-publica')}>
        <h2>Melhoria Pública</h2>
        <span>{abaAberta === 'melhoria-publica' ? '-' : '+'}</span>
      </div>
      {abaAberta === 'melhoria-publica' && (
        <div className="aba-conteudo">
          <div className="linha-campos">
            <div className="subsecao">
              <h3>Pavimentação</h3>
              <select value={pavimentacao} onChange={(e) => setPavimentacao(e.target.value)}>
                <option value="">Selecione</option>
                <option value="SIM">SIM</option>
                <option value="NAO">NÃO</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Rede de Água</h3>
              <select value={redeAgua} onChange={(e) => setRedeAgua(e.target.value)}>
                <option value="">Selecione</option>
                <option value="SIM">SIM</option>
                <option value="NAO">NÃO</option>
              </select>
            </div>
          </div>
          <div className="linha-campos">
            <div className="subsecao">
              <h3>Rede de Energia</h3>
              <select value={redeEnergia} onChange={(e) => setRedeEnergia(e.target.value)}>
                <option value="">Selecione</option>
                <option value="SIM">SIM</option>
                <option value="NAO">NÃO</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Rede Telefônica</h3>
              <select value={redeTelefonica} onChange={(e) => setRedeTelefonica(e.target.value)}>
                <option value="">Selecione</option>
                <option value="SIM">SIM</option>
                <option value="NAO">NÃO</option>
              </select>
            </div>
          </div>
          <div className="linha-campos">
            <div className="subsecao">
              <h3>Rede de Galerias de Águas Pluviais</h3>
              <select value={redeGaleriaPluvial} onChange={(e) => setRedeGaleriaPluvial(e.target.value)}>
                <option value="">Selecione</option>
                <option value="SIM">SIM</option>
                <option value="NAO">NÃO</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Rede de Esgoto</h3>
              <select value={redeEsgoto} onChange={(e) => setRedeEsgoto(e.target.value)}>
                <option value="">Selecione</option>
                <option value="SIM">SIM</option>
                <option value="NAO">NÃO</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MelhoriaPublica;
