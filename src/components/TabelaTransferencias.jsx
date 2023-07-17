import React from 'react';

const TabelaTransferencias = ({ transferencias }) => {
  return (
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
  );
};

export default TabelaTransferencias;
