import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ReactComponent as FlagIcon } from '../../assets/svg/flag-icon.svg';
import { fetchCocktails, setFavorites } from '../../redux/action';

function Card({ cocktail }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCocktails(cocktail.id));
  };

  const handleAddToFavorites = (obj) => {
    dispatch(setFavorites(obj));
  };

  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 48.96%, rgba(14, 13, 19, 0.9) 89.58%), url(${cocktail.photoUrl})`,
      }}>
      <Link to="/detail" onClick={() => handleClick()} />
      <FlagIcon
        onClick={() => handleAddToFavorites(cocktail)}
        className={classNames('icon__favorited', {
          'icon__favorited--active': cocktail.isFavorite,
        })}
      />
      <div className="card__main">
        <div className="card__main__header">
          <h3>{cocktail.alcohol}%</h3>
          <span>Алкоголь</span>
        </div>
        <div className="card__main__footer">
          <h3>{cocktail.name}</h3>
          <span className="drink__description">{cocktail.comment}</span>
        </div>
      </div>
      {/* <img src="src/assets/img/image.png" /> */}
    </div>
  );
}

export default Card;
