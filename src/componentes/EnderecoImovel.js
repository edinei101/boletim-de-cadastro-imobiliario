import React, { useState } from 'react';

function EnderecoImovel({ abaAberta, toggleAba }) {
  const [nomeLogradouro, setNomeLogradouro] = useState('');
  const [codigoLogradouro, setCodigoLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');

  return (
    <div className="aba">
      <div className="aba-header" onClick={() => toggleAba('endereco')}>
        <h2>Endereço do Imóvel</h2>
        <span>{abaAberta === 'endereco' ? '-' : '+'}</span>
      </div>
      {abaAberta === 'endereco' && (
        <div className="aba-conteudo">
          <div className="subsecao">
            <h3>Endereço do Imóvel</h3>
            <input
              type="text"
              placeholder="Nome do Logradouro"
              value={nomeLogradouro}
              onChange={(e) => setNomeLogradouro(e.target.value)}
              className="nome-logradouro"
            />
            <div className="campos-lado-a-lado">
              <input
                type="text"
                placeholder="Código do Logradouro"
                value={codigoLogradouro}
                onChange={(e) => setCodigoLogradouro(e.target.value)}
                className="codigo-logradouro"
              />
              <input
                type="text"
                placeholder="Número"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                className="numero"
              />
              <input
                type="text"
                placeholder="Complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                className="complemento"
              />
              <input
                type="text"
                placeholder="Bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="bairro"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnderecoImovel;


