import React from 'react';

function SituacaoFundiaria({ abaAberta, toggleAba, formData, onInputChange }) {
  const handleSelectChange = (field, e) => {
    const value = e.target.value || 'X'; // Se nenhuma opção for selecionada, use 'X'
    onInputChange(field, value);
  };

  return (
    <div className="aba">
      <div className="aba-header" onClick={() => toggleAba('situacao-fundiaria')}>
        <h2>Situação Fundiária</h2>
        <span>{abaAberta === 'situacao-fundiaria' ? '-' : '+'}</span>
      </div>
      {abaAberta === 'situacao-fundiaria' && (
        <div className="aba-conteudo">
          <div className="linha-campos">
            <div className="subsecao">
              <h3>Documentação do Imóvel</h3>
              <select
                value={formData.documentacaoImovel}
                onChange={(e) => handleSelectChange('documentacaoImovel', e)}
              >
                <option value="X">Selecione a documentação</option>
                <option value="1">1 - SEM</option>
                <option value="2">2 - CADASTRADO</option>
                <option value="3">3 - AUTORIZAÇÃO DE ESCRITURA</option>
                <option value="4">4 - ESCRITURA PÚBLICA</option>
                <option value="5">5 - REGISTRADO NO CARTÓRIO</option>
                <option value="6">6 - TITULADO N°</option>
                <option value="7">7 - PROCESSO N°</option>
                <option value="8">8 - DOCUMENTO N°</option>
              </select>
              {formData.documentacaoImovel === '6' && (
                <div className="campo-adicional">
                  <label>Número do Título:</label>
                  <input
                    type="text"
                    placeholder="Digite o número do título"
                    value={formData.tituladoNumero}
                    onChange={(e) => onInputChange('tituladoNumero', e.target.value)}
                  />
                </div>
              )}
              {formData.documentacaoImovel === '7' && (
                <div className="campo-adicional">
                  <label>Número do Processo:</label>
                  <input
                    type="text"
                    placeholder="Digite o número do processo"
                    value={formData.processoNumero}
                    onChange={(e) => onInputChange('processoNumero', e.target.value)}
                  />
                </div>
              )}
              {formData.documentacaoImovel === '8' && (
                <div className="campo-adicional">
                  <label>Número do Documento:</label>
                  <input
                    type="text"
                    placeholder="Digite o número do documento"
                    value={formData.documentoNumero}
                    onChange={(e) => onInputChange('documentoNumero', e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="subsecao">
              <h3>Situação da Posse ou Propriedade</h3>
              <select
                value={formData.situacaoPosse}
                onChange={(e) => handleSelectChange('situacaoPosse', e)}
              >
                <option value="X">Selecione a situação de posse</option>
                <option value="1">1 - LITÍGIO</option>
                <option value="2">2 - PENHORA</option>
                <option value="3">3 - ESPÓLIO</option>
                <option value="4">4 - DUPLICIDADE DE POSSE</option>
                <option value="5">5 - DÚVIDA DE POSSE</option>
                <option value="6">6 - AUTO ARRESTO</option>
                <option value="7">7 - POSSEIRO / DOM. ÚTIL</option>
                <option value="8">8 - PROPRIETÁRIO</option>
                <option value="9">9 - LIB. ARRESTO</option>
                <option value="10">10 - OUTROS</option>
              </select>
            </div>
          </div>
          <div className="subsecao">
            <h3>Observações</h3>
            <textarea
              placeholder="Digite observações adicionais..."
              value={formData.observacoes}
              onChange={(e) => onInputChange('observacoes', e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SituacaoFundiaria;

