import React from 'react';

import { ReactComponent as SearchIcon } from '../assets/svg/search-icon.svg';
import Button from './Button';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <Button />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Footer;
