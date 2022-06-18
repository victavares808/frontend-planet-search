import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;

/* Projeto StarWars desenvolvido em pair programming com Luiz Tharik - 20 A */
/* Table.js - tabela e orientações sobre useState/useEffect feitos conforme orientações da monitoria de Luá Octaviano no dia 07/06  */
/* Table.js - linha 53
          -filtragem dos dados dos planetas com método filter.
          -mapeamento dos nomes dos planetas com método map.
          -verificação das strings dos nomes dos planetas por meio do método includes */
