import React from 'react';
import classNames from 'classnames';

import { ReactComponent as FlagIcon } from '../assets/svg/flag-icon.svg';

function Card({ favorited }) {
  return (
    <div className="card">
      <FlagIcon
        className={classNames('icon__favorited', {
          'icon__favorited--active': favorited,
        })}
      />
      <div className="card__main">
        <div className="card__main__discount">
          <h3>30%</h3>
          <span>Алкоголь</span>
        </div>
        <div className="card__main__desc">
          <h3>Blackberry</h3>
          <span className="drink__description">Fresh drink</span>
        </div>
      </div>
      {/* <img src="src/assets/img/image.png" /> */}
    </div>
  );
}

export default Card;
