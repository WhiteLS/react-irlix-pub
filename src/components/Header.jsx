import React from 'react';

import { Categories } from './';
import { ReactComponent as LogoIcon } from '../assets/svg/logo-icon.svg';

function Header() {
  const categoryTypes = ['Новинки', 'Сладкие', 'Хит', 'Крепкие', 'Лонг', 'Шот'];

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__title">
          <h1>Главная</h1>
          <span className="header__top__title__date">17 июля 2021</span>
        </div>
        <div className="header__top__logo">
          <LogoIcon className="icon" />
          <span>pub</span>
        </div>
      </div>
      <Categories items={categoryTypes} />
    </div>
  );
}

export default Header;
