import React from 'react';

function CardEmpty() {
  return (
    <div className="card card--empty">
      <div className="card__main">
        <div className="card__main__header">
          <h3>Нет результатов</h3>
        </div>
        <div className="card__main__footer">
          <h3>Пусто</h3>
          <span className="drinkDescription">Попробуйте изменить запрос</span>
        </div>
      </div>
      <picture>
        <source srcSet="src/assets/img/card-empty.webp" />
        <img src="src/assets/img/card-empty.jpg" alt="Пустой результат" />
      </picture>
    </div>
  );
}

export default CardEmpty;
