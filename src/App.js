import React from 'react';
import Estados from './Componentes/Estados.js';
import Brasil from './Componentes/Brasil.js';
import EstadosEspecificos from './Componentes/EstadosEspecificos.js';
import Header from './Componentes/Header.js';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Brasil />
      <EstadosEspecificos />
      <Estados />
    </React.Fragment>
  );
}

export default App;
