import React from 'react';
import { navNames, navIcons } from './const';

const Nav = () => {
  return (
    <nav className='sidebar__nav'>
      <ul>
        {navNames.map((item, index) => {
          return (
            <li className='sidebar__item'>
              <a className='sidebar__link' href='#'>
                <img src={navIcons[index]} alt='nav-icon' />
                <span>{item}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
