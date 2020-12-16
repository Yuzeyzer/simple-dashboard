import React from 'react';
import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div className='logo'>
      <a className='logo__link' href='index.html'>
        <img src={logo} alt='' />
        <span>Devias</span>
      </a>
    </div>
  );
};

export default Logo;
