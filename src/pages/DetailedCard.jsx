import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cn } from '@bem-react/classname';

import { ReactComponent as BackIcon } from '../assets/svg/back-icon.svg';

function DetailedCard() {
  const bem = cn('detailedCard');
  const detailedCocktail = useSelector(({ detailedCocktail }) => detailedCocktail);
  const isLoaded = useSelector(({ isLoaded }) => isLoaded);

  return (
    <div className="detailedCard">
      <Link to="../react-irlix-pub/" className="detailedCard-button">
        <BackIcon />
      </Link>
      {isLoaded ? (
        <div className="detailedCard-wrapper">
          <div className="detailedCard-header">
            <div className="detailedCard-header-title">
              <h3>{detailedCocktail.name}</h3>
              <span className="drinkDescription">{detailedCocktail.comment}</span>
            </div>
            <div className="detailedCard-header-ingredients">
              <h4>Ингредиенты</h4>
              <ul
              // className="detailedCard-header-ingredients-list"
              >
                {detailedCocktail.ingredients &&
                  detailedCocktail.ingredients.map((item, i) => {
                    return (
                      <li
                        key={i}
                        // className="detailedCard-header-ingredients-list-item"
                      >
                        <span className="ingredient-name">{item.name}</span>
                        <span className="divider"></span>
                        <span className="ingredient-amount">{item.amount}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="detailedCard-footer">
            <h4>Как готовить</h4>
            <ul className="detailedCard-footer-recipe">
              {detailedCocktail.recipe.map((item, i) => {
                return (
                  <li key={i} className="detailedCard-footer-recipe-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        'Loading'
      )}
      <picture>
        <source srcSet={'/src/assets/img/' + detailedCocktail.photoUrl + '.webp'} />
        <img
          src={'/src/assets/img/' + detailedCocktail.photoUrl + '.jpg'}
          alt={'Изображение ' + detailedCocktail.name}
        />
      </picture>
    </div>
  );
}

export default DetailedCard;
