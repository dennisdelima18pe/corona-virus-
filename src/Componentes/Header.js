import React from 'react';
import Logo from './Imagens/logo.png';
import './Css/Header.css';
import './Css/Geral.css';

const Header = () => {
  return (
    <header>
      <div className="container header">
        <img src={Logo} />
      </div>
    </header>
  );
};

export default Header;
