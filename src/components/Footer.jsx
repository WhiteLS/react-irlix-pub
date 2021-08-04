import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { ReactComponent as SearchIcon } from '../assets/svg/search-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/svg/close-icon.svg';
import Button from './Button';

function Footer() {
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState('');
  // const searchRef = useRef();

  const toggleSearch = () => {
    setSearch(!search);
    setValue('');
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  // search &&
  //   useEffect(() => {
  //     searchRef.current.focus();
  //   }, []);

  return (
    <div className="footer">
      <div
        className={classNames('footer__wrapper', {
          'footer__wrapper--search': search,
        })}>
        {search ? (
          <>
            <input type="text" value={value} onChange={(e) => handleChangeValue(e)} />
            <CloseIcon className="icon icon__close" onClick={toggleSearch} />
          </>
        ) : (
          <>
            <Button>Избранные</Button>
            <SearchIcon className="icon icon__search" onClick={toggleSearch} />
          </>
        )}
      </div>
    </div>
  );
}

export default Footer;
