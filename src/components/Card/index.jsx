import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cn } from '@bem-react/classname';

import './card.scss';

import { FlagIcon } from '../Icons';
import { fetchCocktails, setFavorites } from '../../redux/action';

function Card({ cocktail, toggleNotification }) {
  const bem = cn('card');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCocktails(cocktail.id));
  };

  const handleAddToFavorites = (obj) => {
    dispatch(setFavorites(obj));
    !cocktail.isFavorite && toggleNotification();
  };

  return (
    <div className={bem()}>
      <Link to="/detail" onClick={() => handleClick()} />
      <FlagIcon
        onClick={() => handleAddToFavorites(cocktail)}
        className={classNames('icon icon-favorited', {
          'icon-favorited_active': cocktail.isFavorite,
        })}
      />
      <div className={bem('main')}>
        <div className={bem('header')}>
          <h3>{cocktail.alcohol}%</h3>
          <span>Алкоголь</span>
        </div>
        <div className={bem('footer')}>
          <h3>{cocktail.name}</h3>
          <span className="drinkDescription">{cocktail.comment}</span>
        </div>
      </div>
      <picture>
        <source srcSet={'../react-irlix-pub/assets/img/' + cocktail.photoUrl + '.webp'} />
        <img
          src={'../react-irlix-pub/assets/img/' + cocktail.photoUrl + '.jpg'}
          alt={'Изображение ' + cocktail.name}
        />
      </picture>
    </div>
  );
}

export default Card;
