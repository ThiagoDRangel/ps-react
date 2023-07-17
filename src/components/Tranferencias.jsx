import React, { useState } from 'react';
import FetchTransferenciasComponent from '../helpers/FetchTransferencias';
import '../styles/Tranferencias.css';

const Transferencias = () => {
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [nomeOperadorTransacao, setNomeOperadorTransacao] = useState('');
  const [exibirDados, setExibirDados] = useState(false);

  const handleBuscar = () => {
    setExibirDados(true);
  };

  return (
    <section className="principal">
      <h1>Lista de Transferências</h1>
      <section className="secundaria">
        <label>Data de Início:</label>
        <input
          type="date"
          value={dataInicial}
          onChange={(e) => setDataInicial(e.target.value)}
        />
        <label>Data de Fim:</label>
        <input
          type="date"
          value={dataFinal}
          onChange={(e) => setDataFinal(e.target.value)}
        />
        <label>Nome do Operador:</label>
        <input
          type="text"
          value={nomeOperadorTransacao}
          onChange={(e) => setNomeOperadorTransacao(e.target.value)}
        />
        <button onClick={handleBuscar}>Buscar</button>
      </section>
      {exibirDados && <FetchTransferenciasComponent />}
    </section>
  );
};

export default Transferencias;
