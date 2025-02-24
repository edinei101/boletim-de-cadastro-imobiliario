import React, { useState } from 'react';
import ExcelJS from 'exceljs';
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import './App.css';
import InscricaoCadastral from './componentes/InscricaoCadastral';
import EnderecoImovel from './componentes/EnderecoImovel';
import IdentificacaoProprietario from './componentes/IdentificacaoProprietario';
import InformacaoTerreno from './componentes/InformacaoTerreno';
import MelhoriaPublica from './componentes/MelhoriaPublica';
import InformacaoEdificacao from './componentes/InformacaoEdificacao';
import SituacaoFundiaria from './componentes/SituacaoFundiaria';

function App() {
  const [abaAberta, setAbaAberta] = useState(null);
  const [formData, setFormData] = useState({
    // Inscrição Cadastral
    setor: '',
    loteamento: '',
    quadra: '',
    lote: '',
    unidade: '',
    tipoManutencao: 'X',
    setorAnterior: '',
    loteamentoAnterior: '',
    quadraAnterior: '',
    loteAnterior: '',
    unidadeAnterior: '',

    // Endereço do Imóvel
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    codigoLogradouro: '',

    // Identificação do Proprietário
    nomeProprietario: '',
    cpf: '',
    cnpj: '',
    rgIe: '',

    // Informação do Terreno
    topografia: 'X',
    nivel: 'X',
    pedologia: 'X',
    situacao: 'X',
    benfeitorias: 'X',
    zona: 'X',
    iluminacao: 'X',
    coletaLixo: 'X',
    pavimentacao: 'X',
    ocupacao: 'X',
    areaTerreno: '',
    frentePrincipal: '',
    fundos: '',
    direita: '',
    esquerda: '',
    observacoes: '',

    // Melhoria Pública
    pavimentacaoPublica: 'X',
    redeAgua: 'X',
    redeEnergia: 'X',
    redeGaleriaPluvial: 'X',
    redeEsgoto: 'X',

    // Informação da Edificação
    estrutura: 'X',
    cobertura: 'X',
    paredes: 'X',
    piso: 'X',
    esquadrias: 'X',
    forro: 'X',
    revestimentoExterno: 'X',
    revestimentoInterno: 'X',
    pinturaExterna: 'X',
    pinturaInterna: 'X',
    cozinha: 'X',
    banheiros: 'X',
    instalacaoAgua: 'X',
    instalacaoEletrica: 'X',
    posicao: 'X',
    conservacaoEdificacao: 'X',
    caracterizacao: 'X',
    areaEdificada: '',

    // Situação Fundiária
    documentacaoImovel: 'X',
    tituladoNumero: '',
    processoNumero: '',
    documentoNumero: '',
    situacaoPosse: 'X',
    observacoes: '',
  });

  const toggleAba = (aba) => {
    setAbaAberta(abaAberta === aba ? null : aba);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      // Carregar o arquivo Excel
      const response = await fetch('/BCI PRANCHA FRENTE.xlsx');
      if (!response.ok) {
        throw new Error('Erro ao carregar o arquivo Excel');
      }
      const arrayBuffer = await response.arrayBuffer();
      console.log('Arquivo carregado:', arrayBuffer);

      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(arrayBuffer);
      console.log('Arquivo Excel carregado com sucesso:', workbook);

      // Acessar a planilha pelo nome
      const worksheet = workbook.getWorksheet('BCI - Frente');
      if (!worksheet) {
        throw new Error('Planilha "BCI - Frente" não encontrada no arquivo Excel');
      }

      // Preencher as células conforme o mapeamento
      // Inscrição Cadastral
      worksheet.getCell('C7').value = formData.setor; // Setor
      worksheet.getCell('D7').value = formData.loteamento; // Loteamento
      worksheet.getCell('I7').value = formData.quadra; // Quadra
      worksheet.getCell('I7').value = formData.lote; // Lote (mesma célula que Quadra)
      worksheet.getCell('K7').value = formData.unidade; // Unidade
      worksheet.getCell('Q7').value = formData.tipoManutencao; // Tipo de Manutenção
      worksheet.getCell('S7').value = formData.setorAnterior; // Setor Anterior
      worksheet.getCell('U7').value = formData.loteamentoAnterior; // Loteamento Anterior
      worksheet.getCell('Z7').value = formData.quadraAnterior; // Quadra Anterior
      worksheet.getCell('AB7').value = formData.loteAnterior; // Lote Anterior
      worksheet.getCell('AE7').value = formData.unidadeAnterior; // Unidade Anterior

      // Endereço do Imóvel
      worksheet.getCell('E10').value = formData.logradouro; // Logradouro
      worksheet.getCell('J12').value = formData.numero; // Número
      worksheet.getCell('O12').value = formData.complemento; // Complemento
      worksheet.getCell('Z12').value = formData.bairro; // Bairro
      worksheet.getCell('C12').value = formData.codigoLogradouro; // Código do Logradouro

      // Identificação do Proprietário
      worksheet.getCell('J14').value = formData.nomeProprietario; // Nome do Proprietário
      worksheet.getCell('C17').value = formData.cpf; // CPF
      worksheet.getCell('J17').value = formData.cnpj; // CNPJ
      worksheet.getCell('T17').value = formData.rgIe; // RG/I.E N°

      // Informação do Terreno
      worksheet.getCell('F27').value = formData.topografia; // Topografia
      worksheet.getCell('J27').value = formData.nivel; // Nível
      worksheet.getCell('N27').value = formData.pedologia; // Pedologia
      worksheet.getCell('T27').value = formData.situacao; // Situação
      worksheet.getCell('AC27').value = formData.benfeitorias; // Benfeitorias
      worksheet.getCell('AG27').value = formData.zona; // Zona Fiscal
      worksheet.getCell('E40').value = formData.iluminacao; // Iluminação
      worksheet.getCell('I40').value = formData.coletaLixo; // Coleta de Lixo
      worksheet.getCell('O40').value = formData.pavimentacao; // Pavimentação
      worksheet.getCell('Y40').value = formData.ocupacao; // Ocupação
      worksheet.getCell('AE30').value = formData.areaTerreno; // Área do Terreno
      worksheet.getCell('AE32').value = formData.frentePrincipal; // Frente (Principal)
      worksheet.getCell('AE34').value = formData.fundos; // Fundos
      worksheet.getCell('AE36').value = formData.direita; // Direita
      worksheet.getCell('AE38').value = formData.esquerda; // Esquerda
      worksheet.getCell('AA39').value = formData.observacoes; // Observações

      // Melhoria Pública
      worksheet.getCell('E42').value = formData.pavimentacaoPublica; // Pavimentação Pública
      worksheet.getCell('V42').value = formData.redeAgua; // Rede de Água
      worksheet.getCell('F43').value = formData.redeEnergia; // Rede de Energia
      worksheet.getCell('W43').value = formData.redeEnergia; // Rede de Energia (mesma célula)
      worksheet.getCell('E43').value = formData.redeGaleriaPluvial; // Rede de Galerias de Águas Pluviais
      worksheet.getCell('Y44').value = formData.redeEsgoto; // Rede de Esgoto Sanitário

      // Informação da Edificação
      worksheet.getCell('F57').value = formData.estrutura; // Estrutura
      worksheet.getCell('J57').value = formData.cobertura; // Cobertura
      worksheet.getCell('N57').value = formData.paredes; // Paredes
      worksheet.getCell('T57').value = formData.piso; // Piso
      worksheet.getCell('AB57').value = formData.esquadrias; // Esquadrias
      worksheet.getCell('AG57').value = formData.forro; // Forro
      worksheet.getCell('F66').value = formData.revestimentoExterno; // Revestimento Externo
      worksheet.getCell('J66').value = formData.revestimentoInterno; // Revestimento Interno
      worksheet.getCell('N66').value = formData.pinturaExterna; // Pintura Externa
      worksheet.getCell('T66').value = formData.pinturaInterna; // Pintura Interna
      worksheet.getCell('AB66').value = formData.cozinha; // Cozinha
      worksheet.getCell('AG66').value = formData.banheiros; // Banheiros
      worksheet.getCell('F77').value = formData.instalacaoAgua; // Instalação de Água
      worksheet.getCell('J77').value = formData.instalacaoEletrica; // Instalação Elétrica
      worksheet.getCell('N77').value = formData.posicao; // Posição
      worksheet.getCell('T77').value = formData.conservacaoEdificacao; // Conservação da Edificação
      worksheet.getCell('AB77').value = formData.caracterizacao; // Caracterização
      worksheet.getCell('AE74').value = formData.areaEdificada; // Área Edificada

      // Situação Fundiária
      worksheet.getCell('N88').value = formData.documentacaoImovel; // Documentação do Imóvel
      worksheet.getCell('K81').value = formData.tituladoNumero; // TITULADO N°
      worksheet.getCell('K82').value = formData.processoNumero; // PROCESSO N°
      worksheet.getCell('K83').value = formData.documentoNumero; // DOCUMENTO N°
      worksheet.getCell('AG88').value = formData.situacaoPosse; // SITUAÇÃO DA POSSE OU PROPRIEDADE

      // Salvar o arquivo Excel preenchido
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Converter o Excel para PDF
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 400]);
      page.drawText('Arquivo gerado a partir do Excel', { x: 50, y: 350, size: 24 });
      const pdfBytes = await pdfDoc.save();

      // Fazer o download do PDF
      const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
      saveAs(pdfBlob, 'formulario.pdf');

      // Limpar o formulário
      setFormData({
        setor: '',
        loteamento: '',
        quadra: '',
        lote: '',
        unidade: '',
        tipoManutencao: 'X',
        setorAnterior: '',
        loteamentoAnterior: '',
        quadraAnterior: '',
        loteAnterior: '',
        unidadeAnterior: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        codigoLogradouro: '',
        nomeProprietario: '',
        cpf: '',
        cnpj: '',
        rgIe: '',
        topografia: 'X',
        nivel: 'X',
        pedologia: 'X',
        situacao: 'X',
        benfeitorias: 'X',
        zona: 'X',
        iluminacao: 'X',
        coletaLixo: 'X',
        pavimentacao: 'X',
        ocupacao: 'X',
        areaTerreno: '',
        frentePrincipal: '',
        fundos: '',
        direita: '',
        esquerda: '',
        observacoes: '',
        pavimentacaoPublica: 'X',
        redeAgua: 'X',
        redeEnergia: 'X',
        redeGaleriaPluvial: 'X',
        redeEsgoto: 'X',
        estrutura: 'X',
        cobertura: 'X',
        paredes: 'X',
        piso: 'X',
        esquadrias: 'X',
        forro: 'X',
        revestimentoExterno: 'X',
        revestimentoInterno: 'X',
        pinturaExterna: 'X',
        pinturaInterna: 'X',
        cozinha: 'X',
        banheiros: 'X',
        instalacaoAgua: 'X',
        instalacaoEletrica: 'X',
        posicao: 'X',
        conservacaoEdificacao: 'X',
        caracterizacao: 'X',
        areaEdificada: '',
        documentacaoImovel: 'X',
        tituladoNumero: '',
        processoNumero: '',
        documentoNumero: '',
        situacaoPosse: 'X',
        observacoes: '',
      });

      alert('Formulário enviado e PDF gerado com sucesso!');
    } catch (error) {
      console.error('Erro ao processar o arquivo Excel:', error);
      alert('Erro ao processar o arquivo Excel. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className="App">
      <h1>Boletim de Cadastro Imobiliário</h1>
      <form>
        <InscricaoCadastral
          abaAberta={abaAberta}
          toggleAba={toggleAba}
          formData={formData}
          onInputChange={handleInputChange}
        />
        <EnderecoImovel
          abaAberta={abaAberta}
          toggleAba={toggleAba}
          formData={formData}
          onInputChange={handleInputChange}
        />
        <IdentificacaoProprietario
          abaAberta={abaAberta}
          toggleAba={toggleAba}
          formData={formData}
          onInputChange={handleInputChange}
        />
        <InformacaoTerreno
          abaAberta={abaAberta}
          toggleAba={toggleAba}
          formData={formData}
          onInputChange={handleInputChange}
        />
        <MelhoriaPublica
          abaAberta={abaAberta}
          toggleAba={toggleAba}
          formData={formData}
          onInputChange={handleInputChange}
        />
        <InformacaoEdificacao
          abaAberta={abaAberta}
          toggleAba={toggleAba}
          formData={formData}
          onInputChange={handleInputChange}
        />
        <SituacaoFundiaria
          abaAberta={abaAberta}
          toggleAba={toggleAba}
          formData={formData}
          onInputChange={handleInputChange}
        />
        <button type="button" onClick={handleSubmit}>
          Cadastrar e Gerar PDF
        </button>
      </form>
    </div>
  );
}

export default App;
