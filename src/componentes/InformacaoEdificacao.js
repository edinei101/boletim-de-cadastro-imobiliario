import React from 'react';

function InformacaoEdificacao({ abaAberta, toggleAba, formData, onInputChange }) {
  const handleSelectChange = (field, e) => {
    const value = e.target.value || 'X'; // Se nenhuma opção for selecionada, use 'X'
    onInputChange(field, value);
  };

  return (
    <div className="aba">
      <div className="aba-header" onClick={() => toggleAba('edificacao')}>
        <h2>Informação da Edificação</h2>
        <span>{abaAberta === 'edificacao' ? '-' : '+'}</span>
      </div>
      {abaAberta === 'edificacao' && (
        <div className="aba-conteudo">
          <p className="subtitulo">OBS.: USO EXCLUSIVO PARA TERRENOS COM EDIFICAÇÕES</p>
          <div className="linha-campos">
            <div className="subsecao">
              <h3>Estrutura</h3>
              <select
                value={formData.estrutura}
                onChange={(e) => handleSelectChange('estrutura', e)}
              >
                <option value="X">Selecione a estrutura</option>
                <option value="1">1 - MADEIRA TRATADA</option>
                <option value="2">2 - ALVENARIA</option>
                <option value="3">3 - CONCRETO</option>
                <option value="4">4 - METÁLICA</option>
                <option value="5">5 - MISTA MADEIRA E ALVENARIA</option>
                <option value="6">6 - MISTA ALVENARIA E ESTRUTURA METÁLICA</option>
                <option value="7">7 - MISTA CONCRETO E ESTRUTURA METÁLICA</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Cobertura</h3>
              <select
                value={formData.cobertura}
                onChange={(e) => handleSelectChange('cobertura', e)}
              >
                <option value="X">Selecione a cobertura</option>
                <option value="1">1 - AMIANTO</option>
                <option value="2">2 - ALUMÍNIO</option>
                <option value="3">3 - BARRO</option>
                <option value="4">4 - AMIANTO ESPECIAL</option>
                <option value="5">5 - LAJE</option>
                <option value="6">6 - OUTROS</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Paredes</h3>
              <select
                value={formData.paredes}
                onChange={(e) => handleSelectChange('paredes', e)}
              >
                <option value="X">Selecione as paredes</option>
                <option value="1">1 - MADEIRA BRUTA</option>
                <option value="2">2 - MADEIRA TRATADA</option>
                <option value="3">3 - ALVENARIA</option>
                <option value="4">4 - ESPECIAL</option>
                <option value="5">5 - MISTA</option>
                <option value="6">6 - SEM</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Piso</h3>
              <select
                value={formData.piso}
                onChange={(e) => handleSelectChange('piso', e)}
              >
                <option value="X">Selecione o piso</option>
                <option value="1">1 - TERRA</option>
                <option value="2">2 - CIMENTO</option>
                <option value="3">3 - CERÂMICA</option>
                <option value="4">4 - MADEIRA TRATADA</option>
                <option value="5">5 - ESPECIAL</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Esquadrias</h3>
              <select
                value={formData.esquadrias}
                onChange={(e) => handleSelectChange('esquadrias', e)}
              >
                <option value="X">Selecione as esquadrias</option>
                <option value="1">1 - SEM</option>
                <option value="2">2 - MADEIRA TRATADA</option>
                <option value="3">3 - FERRO</option>
                <option value="4">4 - ALUMÍNIO</option>
                <option value="5">5 - ESPECIAL</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Forro</h3>
              <select
                value={formData.forro}
                onChange={(e) => handleSelectChange('forro', e)}
              >
                <option value="X">Selecione o forro</option>
                <option value="1">1 - SEM</option>
                <option value="2">2 - MADEIRA</option>
                <option value="3">3 - LAJE</option>
                <option value="4">4 - GESSO</option>
                <option value="5">5 - ESPECIAL</option>
              </select>
            </div>
          </div>
          {/* Outras seções da edificação... */}
        </div>
      )}
    </div>
  );
}

export default InformacaoEdificacao;

