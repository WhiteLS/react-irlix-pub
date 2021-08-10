import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { cn } from '@bem-react/classname';

import './detailedCard.scss';

import { Notification } from '../../components';
import { BackIcon, FlagIcon } from '../../components/Icons';
import { setFavorites } from '../../redux/action';

function DetailedCard() {
  const bem = cn('detailedCard');
  const dispatch = useDispatch();
  const detailedCocktail = useSelector(({ detailedCocktail }) => detailedCocktail);
  const isLoaded = useSelector(({ isLoaded }) => isLoaded);
  const [ntf, setNtf] = useState(false);

  const toggleNotification = () => {
    setNtf(true);

    setTimeout(() => {
      setNtf(false);
    }, 1500);
  };

  const handleAddToFavorites = (obj) => {
    dispatch(setFavorites(obj));
    !detailedCocktail.isFavorite && toggleNotification();
  };

  return (
    <div className={bem()}>
      <Link to="../react-irlix-pub/" className={bem('button')}>
        <BackIcon />
      </Link>
      <Notification ntf={ntf} />
      {isLoaded ? (
        <div className={bem('wrapper')}>
          <div className={bem('header')}>
            <FlagIcon
              onClick={() => handleAddToFavorites(detailedCocktail)}
              className={classNames('icon icon-favorited', {
                'icon-favorited_active': detailedCocktail.isFavorite,
              })}
            />
            <div className={bem('title')}>
              <h3>{detailedCocktail.name}</h3>
              <span className="drinkDescription">{detailedCocktail.comment}</span>
            </div>
            <div className={bem('ingredients')}>
              <h4>Ингредиенты</h4>
              <ul>
                {detailedCocktail.ingredients &&
                  detailedCocktail.ingredients.map((item, i) => {
                    return (
                      <li key={i}>
                        <span>{item.name}</span>
                        <span className="divider"></span>
                        <span>{item.amount}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className={bem('footer')}>
            <h4>Как готовить</h4>
            <ul>
              {detailedCocktail.recipe.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      ) : (
        'Loading'
      )}
      <picture>
        <source srcSet={'../react-irlix-pub/assets/img/' + detailedCocktail.photoUrl + '.webp'} />
        <img
          src={'../react-irlix-pub/assets/img/' + detailedCocktail.photoUrl + '.jpg'}
          alt={'Изображение ' + detailedCocktail.name}
        />
      </picture>
    </div>
  );
}

export default DetailedCard;
