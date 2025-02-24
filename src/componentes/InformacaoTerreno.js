import React from 'react';

function InformacaoTerreno({ abaAberta, toggleAba, formData, onInputChange }) {
  const handleSelectChange = (field, e) => {
    const value = e.target.value || 'X'; // Se nenhuma opção for selecionada, use 'X'
    onInputChange(field, value);
  };

  return (
    <div className="aba">
      <div className="aba-header" onClick={() => toggleAba('terreno')}>
        <h2>Informação do Terreno</h2>
        <span>{abaAberta === 'terreno' ? '-' : '+'}</span>
      </div>
      {abaAberta === 'terreno' && (
        <div className="aba-conteudo">
          <div className="linha-campos">
            <div className="subsecao">
              <h3>Topografia</h3>
              <select
                value={formData.topografia}
                onChange={(e) => handleSelectChange('topografia', e)}
              >
                <option value="X">Selecione a Topografia</option>
                <option value="1">1 - NORMAL</option>
                <option value="2">2 - ACLIVE</option>
                <option value="3">3 - DECLIVE</option>
                <option value="4">4 - IRREGULAR</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Nível</h3>
              <select
                value={formData.nivel}
                onChange={(e) => handleSelectChange('nivel', e)}
              >
                <option value="X">Selecione o Nível</option>
                <option value="1">1 - AO NÍVEL</option>
                <option value="2">2 - ABAIXO</option>
                <option value="3">3 - ACIMA</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Pedologia</h3>
              <select
                value={formData.pedologia}
                onChange={(e) => handleSelectChange('pedologia', e)}
              >
                <option value="X">Selecione a Pedologia</option>
                <option value="1">1 - NORMAL</option>
                <option value="2">2 - ARENOSO</option>
                <option value="3">3 - ATERRADO</option>
                <option value="4">4 - ALAGÁVEL</option>
                <option value="5">5 - BREJO</option>
                <option value="6">6 - ROCHOSO</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Situação</h3>
              <select
                value={formData.situacao}
                onChange={(e) => handleSelectChange('situacao', e)}
              >
                <option value="X">Selecione a Situação</option>
                <option value="1">1 - UMA FRENTE</option>
                <option value="2">2 - DUAS FRENTES</option>
                <option value="3">3 - TRÊS FRENTES</option>
                <option value="4">4 - QUATRO FRENTES</option>
                <option value="5">5 - ENCRAVADO</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Benfeitorias</h3>
              <select
                value={formData.benfeitorias}
                onChange={(e) => handleSelectChange('benfeitorias', e)}
              >
                <option value="X">Selecione as Benfeitorias</option>
                <option value="1">1 - SEM</option>
                <option value="2">2 - MURO COM CALÇADA</option>
                <option value="3">3 - CERCA</option>
                <option value="4">4 - CERCA COM CALÇADA</option>
                <option value="5">5 - MURO</option>
                <option value="6">6 - MURETA COM CALÇADA</option>
                <option value="7">7 - MURETA</option>
                <option value="8">8 - MISTA</option>
                <option value="9">9 - CALÇADA</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Zona (Zona Fiscal)</h3>
              <select
                value={formData.zona}
                onChange={(e) => handleSelectChange('zona', e)}
              >
                <option value="X">Selecione a Zona Fiscal</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
              </select>
            </div>
          </div>
          {/* Outras seções do terreno... */}
        </div>
      )}
    </div>
  );
}

export default InformacaoTerreno;
