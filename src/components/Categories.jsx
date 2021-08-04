import React from 'react';

function Categories({ items }) {
  return (
    <div className="categories">
      <ul className="categories__list">
        {items.map((item) => {
          return (
            <li key={item} className="categories__list__item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
