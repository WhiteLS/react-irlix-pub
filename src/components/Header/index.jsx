import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';

import './header.scss';

import { Categories } from '..';
import { LogoIcon } from '../Icons';
import { fetchCocktails, setCategory } from '../../redux/action';

function Header({ children }) {
  const bem = cn('header');
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
    <div className={bem()}>
      <div className={bem('wrapper')}>
        <div className={bem('title')}>
          <h1>{children}</h1>
          <span>{`${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`}</span>
        </div>
        <div className={bem('logo')}>
          <Link to="/react-irlix-pub/">
            <LogoIcon className="icon" />
          </Link>

          <span>pub</span>
        </div>
      </div>
      <Categories category={category} onSelectCategory={onSelectCategory} items={categoryTypes} />
    </div>
  );
}

export default Header;
