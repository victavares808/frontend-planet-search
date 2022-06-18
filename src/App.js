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
