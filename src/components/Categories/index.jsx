import React from 'react';
import classNames from 'classnames';
import { cn } from '@bem-react/classname';

import './categories.scss';

function Categories({ category, onSelectCategory, items }) {
  const bem = cn('categories');
  return (
    <div className={bem()}>
      <ul className="categories-list">
        {items.map((item) => {
          return (
            <li
              key={item.name}
              onClick={() => onSelectCategory(item.category)}
              className={classNames('categories-item', {
                'categories-item_active': item.category === category,
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
