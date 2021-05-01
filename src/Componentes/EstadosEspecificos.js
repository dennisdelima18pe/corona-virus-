import React from "react";
import Api from "./Services/Api.js";
import "./Css/Geral.css";

const getEstadoComMaisMortes = (estados) => {
  let maiorEstado = estados.reduce((acc, at) => {
    if (acc.deaths > at.deaths) {
      return acc;
    }
    return at;
  });

  // a variável `maiorEstado` é um objeto contendo os dados do UF selecionado

  return (
    <div>{`Estado com mais mortes: ${maiorEstado.uf}. Mortes: ${maiorEstado.deaths}`}</div>
  );
};

const EstadosEspecificos = () => {
  const [Estado, setEstado] = React.useState([]);
  React.useState(() => {
    Api.get().then((response) => {
      setEstado(response.data.data);
    });
  }, []);

  return (
    <section>{Estado.length > 0 ? getEstadoComMaisMortes(Estado) : ""}</section>
  );
};

export default EstadosEspecificos;
