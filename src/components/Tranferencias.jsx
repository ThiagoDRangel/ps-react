import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Tranferencias.css';

const Transferencias = () => {
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [nomeOperadorTransacao, setNomeOperadorTransacao] = useState('');
  const [transferencias, setTransferencias] = useState([]);
  const [exibirDados, setExibirDados] = useState(false);

  const fetchTransferencias = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/transferencias',
      {
        params: { page: "1", size: "3" },
      });
      setTransferencias(response.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTransferencias();
  }, []);

  const handleBuscar = () => {
    fetchTransferencias();
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
        {exibirDados && (
          <table className="retorno-tabela">
            <thead>
              <tr>
                <th>ID</th>
                <th>Origem</th>
                <th>Destino</th>
                <th>Data</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {transferencias.map(({ id, origem, destino, data, valor }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{origem}</td>
                  <td>{destino}</td>
                  <td>{data}</td>
                  <td>{valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
      )}
    </section>
  );
};

export default Transferencias;