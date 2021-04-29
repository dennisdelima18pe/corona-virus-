import React from 'react';
import Api from './Services/Api.js';
import './Css/Geral.css';
import './Css/Estados.css';
const Estados = () => {
  const [Estado, setEstado] = React.useState([]);

  React.useEffect(() => {
    Api.get().then((response) => {
      setEstado(response.data.data);
    });
  }, []);
  return (
    <section className="container sessao-estados">
      <div className="header-estados ">
        <h2>Estado</h2>
        <h2>Casos</h2>
        <h2>Mortês</h2>
      </div>
      {Estado.map((estado) => {
        return (
          <div key={estado.uid} className="casos-estados">
            <h3 key={estado.state}>
              <span>{estado.state}</span>
            </h3>
            <h3 key={estado.cases}>
              <span>{estado.cases}</span>
            </h3>
            <h3 key={estado.deaths}>
              <span>{estado.deaths}</span>
            </h3>
          </div>
        );
      })}
    </section>
  );
};

export default Estados;
