Estrutura do Projeto:
src/
├── componentes/
│   ├── InscricaoCadastral.js
│   ├── EnderecoImovel.js
│   ├── IdentificacaoProprietario.js
│   ├── InformacaoTerreno.js
│   ├── MelhoriaPublica.js
│   ├── InformacaoEdificacao.js
│   └── SituacaoFundiaria.js
├── App.js
├── App.css
└── index.js

=== src/componentes/InscricaoCadastral.js ===
import React, { useState } from 'react';

function InscricaoCadastral({ abaAberta, toggleAba }) {
  // Estados para a primeira subseção: Inscrição Cadastral (Atual)
  const [setor, setSetor] = useState('');
  const [loteamento, setLoteamento] = useState('');
  const [quadra, setQuadra] = useState('');
  const [lote, setLote] = useState('');
  const [unidade, setUnidade] = useState('');

  // Estados para a segunda subseção: Tipo de Manutenção
  const [tipoManutencao, setTipoManutencao] = useState('');

  // Estados para a terceira subseção: Inscrição Cadastral Anterior
  const [setorAnterior, setSetorAnterior] = useState('');
  const [loteamentoAnterior, setLoteamentoAnterior] = useState('');
  const [quadraAnterior, setQuadraAnterior] = useState('');
  const [loteAnterior, setLoteAnterior] = useState('');
  const [unidadeAnterior, setUnidadeAnterior] = useState('');

  return (
    <div className="aba">
      <div className="aba-header" onClick={() => toggleAba('inscricao')}>
        <h2>Inscrição Cadastral</h2>
        <span>{abaAberta === 'inscricao' ? '-' : '+'}</span>
      </div>
      {abaAberta === 'inscricao' && (
        <div className="aba-conteudo">
          <div className="subsecoes-container">
            {/* Subseção 1: Inscrição Cadastral (Atual) */}
            <div className="subsecao">
              <h3>Inscrição Cadastral</h3>
              <input type="text" placeholder="Setor" value={setor} onChange={(e) => setSetor(e.target.value)} />
              <input type="text" placeholder="Loteamento" value={loteamento} onChange={(e) => setLoteamento(e.target.value)} />
              <input type="text" placeholder="Quadra" value={quadra} onChange={(e) => setQuadra(e.target.value)} />
              <input type="text" placeholder="Lote" value={lote} onChange={(e) => setLote(e.target.value)} />
              <input type="text" placeholder="Unidade" value={unidade} onChange={(e) => setUnidade(e.target.value)} />
            </div>

            {/* Subseção 2: Tipo de Manutenção */}
            <div className="subsecao">
              <h3>Tipo de Manutenção</h3>
              <select value={tipoManutencao} onChange={(e) => setTipoManutencao(e.target.value)}>
                <option value="">Selecione o Tipo de Manutenção</option>
                <option value="atualizacao">1 - INCLUI</option>
                <option value="correcao">2 - EXCLUIR</option>
                <option value="revisao">3 - ALTERA</option>
              </select>
            </div>

            {/* Subseção 3: Inscrição Cadastral Anterior */}
            <div className="subsecao">
              <h3>Inscrição Cadastral Anterior</h3>
              <input type="text" placeholder="Setor" value={setorAnterior} onChange={(e) => setSetorAnterior(e.target.value)} />
              <input type="text" placeholder="Loteamento" value={loteamentoAnterior} onChange={(e) => setLoteamentoAnterior(e.target.value)} />
              <input type="text" placeholder="Quadra" value={quadraAnterior} onChange={(e) => setQuadraAnterior(e.target.value)} />
              <input type="text" placeholder="Lote" value={loteAnterior} onChange={(e) => setLoteAnterior(e.target.value)} />
              <input type="text" placeholder="Unidade" value={unidadeAnterior} onChange={(e) => setUnidadeAnterior(e.target.value)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InscricaoCadastral;

=== src/componentes/EnderecoImovel.js ===
[O código completo de EnderecoImovel.js aqui...]

=== src/componentes/IdentificacaoProprietario.js ===
[O código completo de IdentificacaoProprietario.js aqui...]

=== src/componentes/InformacaoTerreno.js ===
[O código completo de InformacaoTerreno.js aqui...]

=== src/componentes/MelhoriaPublica.js ===
[O código completo de MelhoriaPublica.js aqui...]

=== src/componentes/InformacaoEdificacao.js ===
[O código completo de InformacaoEdificacao.js aqui...]

=== src/componentes/SituacaoFundiaria.js ===
[O código completo de SituacaoFundiaria.js aqui...]

=== src/App.js ===
[O código completo de App.js aqui...]

=== src/App.css ===
[O código completo de App.css aqui...]