import React, { useState } from 'react';

function IdentificacaoProprietario({ abaAberta, toggleAba }) {
  const [nomeProprietario, setNomeProprietario] = useState('');
  const [cpfProprietario, setCpfProprietario] = useState('');
  const [cnpjProprietario, setCnpjProprietario] = useState('');
  const [rgProprietario, setRgProprietario] = useState('');
  const [sspSesdec, setSspSesdec] = useState('');

  return (
    <div className="aba">
      <div className="aba-header" onClick={() => toggleAba('proprietario')}>
        <h2>Identificação do Proprietário</h2>
        <span>{abaAberta === 'proprietario' ? '-' : '+'}</span>
      </div>
      {abaAberta === 'proprietario' && (
        <div className="aba-conteudo">
          <div className="subsecao">
            <h3>Identificação do Proprietário</h3>
            <input
              type="text"
              placeholder="Nome do Proprietário"
              value={nomeProprietario}
              onChange={(e) => setNomeProprietario(e.target.value)}
              className="nome-proprietario"
            />
            <div className="campos-lado-a-lado">
              <input
                type="text"
                placeholder="CPF"
                value={cpfProprietario}
                onChange={(e) => setCpfProprietario(e.target.value)}
                className="cpf"
              />
              <input
                type="text"
                placeholder="CNPJ"
                value={cnpjProprietario}
                onChange={(e) => setCnpjProprietario(e.target.value)}
                className="cnpj"
              />
              <input
                type="text"
                placeholder="RG / I.E. nº"
                value={rgProprietario}
                onChange={(e) => setRgProprietario(e.target.value)}
                className="rg"
              />
              <input
                type="text"
                placeholder="SSP / SESDEC"
                value={sspSesdec}
                onChange={(e) => setSspSesdec(e.target.value)}
                className="ssp-sesdec"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IdentificacaoProprietario;
