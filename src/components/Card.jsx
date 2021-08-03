import React from 'react';

function Card() {
  return (
    <div className="card">
      <div className="card__main">
        <div className="card__main__discount">
          <h3>30%</h3>
          <span>Алкоголь</span>
        </div>
        <div className="card__main__desc">
          <h3>Blackberry</h3>
          <span>Fresh drink</span>
        </div>
      </div>
      <img src="src/assets/img/image.png" />
    </div>
  );
}

export default Card;
