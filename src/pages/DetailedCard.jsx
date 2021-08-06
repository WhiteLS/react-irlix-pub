import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as BackIcon } from '../assets/svg/back-icon.svg';

function DetailedCard() {
  const detailedCocktail = useSelector(({ detailedCocktail }) => detailedCocktail);
  const isLoaded = useSelector(({ isLoaded }) => isLoaded);

  return (
    <div
      className="detailed__card"
      style={{ backgroundImage: `url(${detailedCocktail.photoUrl})` }}>
      <Link to="/" className="detailed__card__button">
        <BackIcon />
      </Link>
      {isLoaded ? (
        <div className="detailed__card__wrapper">
          <div className="detailed__card__header">
            <div className="detailed__card__header__title">
              <h3>{detailedCocktail.name}</h3>
              <span className="drink__description">{detailedCocktail.comment}</span>
            </div>
            <div className="detailed__card__header__ingredients">
              <h4>Ингредиенты</h4>
              <ul className="detailed__card__header__ingredients__list">
                {detailedCocktail.ingredients &&
                  detailedCocktail.ingredients.map((item, i) => {
                    return (
                      <li key={i} className="detailed__card__header__ingredients__list__item">
                        <span className="ingredient__name">{item.name}</span>
                        <span className="divider"></span>
                        <span className="ingredient__amount">{item.amount}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="detailed__card__footer">
            <h4>Как готовить</h4>
            <ul className="detailed__card__footer__recipe">
              {detailedCocktail.recipe.map((item, i) => {
                return (
                  <li key={i} className="detailed__card__footer__recipe__item">
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
      {/* <img src="src/assets/img/image.png" /> */}
      {/* <img className="bigImg" src="src/assets/img/image1600x900.png" /> */}
    </div>
  );
}

export default DetailedCard;
