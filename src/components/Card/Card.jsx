import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { ReactComponent as FlagIcon } from '../../assets/svg/flag-icon.svg';
import { fetchCocktails, setFavorite, toggleFavorite } from '../../redux/action';
import { toggleFavorites } from './../../redux/action';

function Card({ cocktail }) {
  const dispatch = useDispatch();
  // const [favorite, setToggle] = useState(cocktail.isFavorite);

  const handleClick = () => {
    dispatch(fetchCocktails(cocktail.id));
  };

  const handleAddToFavorites = (obj) => {
    // setToggle(!favorite);
    // dispatch(toggleFavorite(obj));

    // dispatch(setFavorite(obj));
    // axios.put(`https://610bb9122b6add0017cb3a45.mockapi.io/api/v1/cocktail/${obj.id}`, {
    //   isFavorite: !cocktail.isFavorite,
    // });
    // dispatch(fetchCocktails());

    dispatch(toggleFavorites(obj));
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
