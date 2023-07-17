import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TabelaTransferencias from '../components/TabelaTransferencias';

const FetchTransferenciasComponent = () => {
  const [transferencias, setTransferencias] = useState([]);

  useEffect(() => {
    fetchTransferencias();
  }, []);

  const fetchTransferencias = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/transferencias', {
        params: { page: '1', size: '3' },
      });
      setTransferencias(response.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  return <TabelaTransferencias transferencias={transferencias} />;
};

export default FetchTransferenciasComponent;
