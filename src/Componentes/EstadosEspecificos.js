import React from 'react';
import Api from './Services/Api.js';
import './Css/Geral.css';
const EstadosEspecificos = () => {
  const [Estado, setEstado] = React.useState([]);
  React.useState(() => {
    Api.get().then((response) => {
      setEstado(response.data.data);
    });
  }, []);

  return (
    <section>
      {Estado.reduce((acumulador, atual) => {
        if (acumulador > atual.deaths) {
          <div>{acumulador}</div>;
        }
        return atual.deaths;
      }, 0)}
    </section>
  );
};

export default EstadosEspecificos;
