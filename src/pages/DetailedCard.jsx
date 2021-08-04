import React from 'react';

import { ReactComponent as BackIcon } from '../assets/svg/back-icon.svg';

function DetailedCard() {
  return (
    <div className="detailed__card">
      <div className="detailed__card__button">
        <BackIcon />
      </div>
      <div className="detailed__card__wrapper">
        <div className="detailed__card__header">
          <div className="detailed__card__header__title">
            <h3>Blackberry</h3>
            <span className="drink__description">Fresh drink</span>
          </div>
          <div className="detailed__card__header__ingredients">
            <h4>Ингредиенты</h4>
            <ul className="detailed__card__header__ingredients__list">
              <li className="detailed__card__header__ingredients__list__item">
                <span className="ingredient__name">Джин</span>
                <span className="divider"></span>
                <span className="ingredient__amount">40 мл</span>
              </li>
              <li className="detailed__card__header__ingredients__list__item">
                <span className="ingredient__name">Шнапс яблоко</span>
                <span className="divider"></span>
                <span className="ingredient__amount">40 мл</span>
              </li>
              <li className="detailed__card__header__ingredients__list__item">
                <span className="ingredient__name">Ликёр кассис</span>
                <span className="divider"></span>
                <span className="ingredient__amount">40 мл</span>
              </li>
              <li className="detailed__card__header__ingredients__list__item">
                <span className="ingredient__name">Сок лимона</span>
                <span className="divider"></span>
                <span className="ingredient__amount">40 мл</span>
              </li>
              <li className="detailed__card__header__ingredients__list__item">
                <span className="ingredient__name">Жасмин лемонграсс</span>
                <span className="divider"></span>
                <span className="ingredient__amount">40 мл</span>
              </li>
              <li className="detailed__card__header__ingredients__list__item">
                <span className="ingredient__name">Ежевика свежая</span>
                <span className="divider"></span>
                <span className="ingredient__amount">2 шт</span>
              </li>
              <li className="detailed__card__header__ingredients__list__item">
                <span className="ingredient__name">Белок</span>
                <span className="divider"></span>
                <span className="ingredient__amount">40 мл</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="detailed__card__footer">
          <h4>Как готовить</h4>
          <ul className="detailed__card__footer__recipe">
            <li className="detailed__card__footer__recipe__item">
              Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            </li>
            <li className="detailed__card__footer__recipe__item">
              Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
            </li>
            <li className="detailed__card__footer__recipe__item">
              Тщательно взбить и процедить в бокал.
            </li>
            <li className="detailed__card__footer__recipe__item">Украсить ежевикой.</li>
            <li className="detailed__card__footer__recipe__item">
              Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            </li>
            <li className="detailed__card__footer__recipe__item">
              Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
            </li>
            <li className="detailed__card__footer__recipe__item">
              Тщательно взбить и процедить в бокал.
            </li>
            <li className="detailed__card__footer__recipe__item">Украсить ежевикой.</li>
            <li className="detailed__card__footer__recipe__item">
              Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            </li>
            <li className="detailed__card__footer__recipe__item">
              Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
            </li>
          </ul>
        </div>
      </div>
      <img src="src/assets/img/image.png" />
    </div>
  );
}

export default DetailedCard;
