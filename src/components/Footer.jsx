import React, { useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as SearchIcon } from '../assets/svg/search-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/svg/close-icon.svg';
import Button from './Button';
import { Link } from 'react-router-dom';

function Footer({ searchValue, onChange, buttonLink, buttonValue }) {
  const [search, setSearch] = useState(false);

  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <div className="footer">
      <div
        className={classNames('footer__wrapper', {
          'footer__wrapper--search': search,
        })}>
        {search ? (
          <>
            <input type="text" value={searchValue} onChange={(e) => onChange(e)} />
            <CloseIcon className="icon icon__close" onClick={toggleSearch} />
          </>
        ) : (
          <>
            <Link to={buttonLink}>
              <Button>{buttonValue}</Button>
            </Link>
            <SearchIcon className="icon icon__search" onClick={toggleSearch} />
          </>
        )}
      </div>
    </div>
  );
}

export default Footer;
