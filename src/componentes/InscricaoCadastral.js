import React, { useState } from 'react';

function InscricaoCadastral({ abaAberta, toggleAba, formData, onInputChange }) {
  const handleTipoManutencaoChange = (e) => {
    const value = e.target.value || 'X'; // Se nenhuma opção for selecionada, use 'X'
    onInputChange('tipoManutencao', value);
  };

  return (
    <div className="aba">
      <div className="aba-header" onClick={() => toggleAba('inscricao')}>
        <h2>Inscrição Cadastral</h2>
        <span>{abaAberta === 'inscricao' ? '-' : '+'}</span>
      </div>
      {abaAberta === 'inscricao' && (
        <div className="aba-conteudo">
          <div className="subsecoes-container">
            <div className="subsecao">
              <h3>Inscrição Cadastral</h3>
              <input
                type="text"
                placeholder="Setor"
                value={formData.setor}
                onChange={(e) => onInputChange('setor', e.target.value)}
              />
              <input
                type="text"
                placeholder="Loteamento"
                value={formData.loteamento}
                onChange={(e) => onInputChange('loteamento', e.target.value)}
              />
              <input
                type="text"
                placeholder="Quadra"
                value={formData.quadra}
                onChange={(e) => onInputChange('quadra', e.target.value)}
              />
              <input
                type="text"
                placeholder="Lote"
                value={formData.lote}
                onChange={(e) => onInputChange('lote', e.target.value)}
              />
              <input
                type="text"
                placeholder="Unidade"
                value={formData.unidade}
                onChange={(e) => onInputChange('unidade', e.target.value)}
              />
            </div>
            <div className="subsecao">
              <h3>Tipo de Manutenção</h3>
              <select
                value={formData.tipoManutencao}
                onChange={handleTipoManutencaoChange}
              >
                <option value="X">Selecione o Tipo de Manutenção</option>
                <option value="1">1 - INCLUIR</option>
                <option value="2">2 - EXCLUIR</option>
                <option value="3">3 - ALTERAR</option>
              </select>
            </div>
            <div className="subsecao">
              <h3>Inscrição Cadastral Anterior</h3>
              <input
                type="text"
                placeholder="Setor Anterior"
                value={formData.setorAnterior}
                onChange={(e) => onInputChange('setorAnterior', e.target.value)}
              />
              <input
                type="text"
                placeholder="Loteamento Anterior"
                value={formData.loteamentoAnterior}
                onChange={(e) => onInputChange('loteamentoAnterior', e.target.value)}
              />
              <input
                type="text"
                placeholder="Quadra Anterior"
                value={formData.quadraAnterior}
                onChange={(e) => onInputChange('quadraAnterior', e.target.value)}
              />
              <input
                type="text"
                placeholder="Lote Anterior"
                value={formData.loteAnterior}
                onChange={(e) => onInputChange('loteAnterior', e.target.value)}
              />
              <input
                type="text"
                placeholder="Unidade Anterior"
                value={formData.unidadeAnterior}
                onChange={(e) => onInputChange('unidadeAnterior', e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InscricaoCadastral;