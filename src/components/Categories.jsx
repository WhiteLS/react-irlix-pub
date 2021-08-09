import React from 'react';
import classNames from 'classnames';

function Categories({ category, onSelectCategory, items }) {
  return (
    <div className="categories">
      <ul className="categories__list">
        {items.map((item) => {
          return (
            <li
              key={item.name}
              onClick={() => onSelectCategory(item.category)}
              className={classNames('categories__list__item', {
                'categories__list__item--active': item.category === category,
              })}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
