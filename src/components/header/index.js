import React from 'react';
import Items from './items';
import Logo from './logo';
import './style.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <Logo />
          <div className='header__nav'>
            <Items />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
