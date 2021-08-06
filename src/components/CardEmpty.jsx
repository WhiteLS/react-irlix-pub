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
          <span className="drink__description">Попробуйте изменить запрос</span>
        </div>
      </div>
    </div>
  );
}

export default CardEmpty;
