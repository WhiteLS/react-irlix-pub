import React from 'react';
import { cn } from '@bem-react/classname';

import './cardEmpty.scss';

function CardEmpty() {
  const bem = cn('card');

  return (
    <div className={bem({ empty: true })}>
      <div className={bem('main')}>
        <div className={bem('header', { empty: true })}>
          <h3>Нет результатов</h3>
        </div>
        <div className={bem('footer')}>
          <h3>Пусто</h3>
          <span className="drinkDescription">Попробуйте изменить запрос</span>
        </div>
      </div>
      <picture>
        <source srcSet="./assets/img/card-empty.webp" />
        <img src="./assets/img/card-empty.jpg" alt="Пустой результат" />
      </picture>
    </div>
  );
}

export default CardEmpty;
