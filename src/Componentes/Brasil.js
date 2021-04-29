import React from 'react';
import Api from './Services/Api.js';
import './Css/Geral.css';
import './Css/Brasil.css';
import Casos from './Imagens/casos-brasil.png';
import Recuperados from './Imagens/recuperados-brasil.png';
import Mortes from './Imagens/mortes-brasil.png';

const Brasil = () => {
  const [brasil, setBrasil] = React.useState([]);
  React.useEffect(() => {
    Api.get('/brazil').then((response) => {
      setBrasil(response.data.data);
    });
  }, []);

  return (
    <section className="container sessao-brasil">
      <div className="casos-brasil">
        <h4>
          <img src={Casos} alt="" />
          Casos no Brasil
        </h4>
        <h2>{brasil.confirmed}</h2>
      </div>
      <div className="casos-brasil">
        <h4>
          <img src={Recuperados} alt="" />
          Recuperados
        </h4>
        <h2>{brasil.recovered}</h2>
      </div>
      <div className="casos-brasil">
        <h4>
          <img src={Mortes} alt="" />
          Mortês
        </h4>
        <h2>{brasil.deaths}</h2>
      </div>
    </section>
  );
};

export default Brasil;
