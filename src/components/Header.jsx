import React from 'react';

import { ReactComponent as LogoIcon } from '../assets/svg/logo-icon.svg';

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <h1>Главная</h1>
        <span className="header__title__date">17 июля 2021</span>
      </div>
      <div className="header__logo">
        <LogoIcon />
        <span>pub</span>
      </div>
    </div>
  );
}

export default Header;
