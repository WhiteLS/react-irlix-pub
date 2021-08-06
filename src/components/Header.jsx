import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories } from './';
import { ReactComponent as LogoIcon } from '../assets/svg/logo-icon.svg';
import { fetchCocktails, setCategory } from '../redux/action';

function Header({ children }) {
  const categoryTypes = [
    { name: 'Все', category: '' },
    { name: 'Новинки', category: 'isNew' },
    { name: 'Сладкие', category: 'isSweet' },
    { name: 'Хит', category: 'isTop' },
    { name: 'Лонг', category: 'isLong' },
  ];
  const month = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const date = new Date();

  const dispatch = useDispatch();
  const category = useSelector(({ category }) => category);

  const onSelectCategory = (catN) => {
    dispatch(fetchCocktails(false, catN));
    dispatch(setCategory(catN));
  };

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__title">
          <h1>{children}</h1>
          <span className="header__top__title__date">
            {`${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`}
          </span>
        </div>
        <div className="header__top__logo">
          <LogoIcon className="icon" />
          <span>pub</span>
        </div>
      </div>
      <Categories category={category} onSelectCategory={onSelectCategory} items={categoryTypes} />
    </div>
  );
}

export default Header;
