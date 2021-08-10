import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import './footer.scss';

import { SearchIcon, CloseIcon } from '../Icons';
import Button from '../Button';

function Footer({ searchValue, onChange, buttonLink, buttonValue }) {
  const bem = cn('footer');
  const [search, setSearch] = useState(false);

  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <div className={bem()}>
      <div className={bem('wrapper')}>
        {search ? (
          <>
            <input type="text" value={searchValue} onChange={(e) => onChange(e)} />
            <CloseIcon className="icon icon-close" onClick={toggleSearch} />
          </>
        ) : (
          <>
            <Link to={buttonLink}>
              <Button>{buttonValue}</Button>
            </Link>
            <SearchIcon className="icon icon-search" onClick={toggleSearch} />
          </>
        )}
      </div>
    </div>
  );
}

export default Footer;
