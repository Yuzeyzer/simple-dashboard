import React from 'react';
import { navItems } from './const';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [itemActive, setItemActive] = React.useState(0);

  const handleClick = (index) => {
    setItemActive(index);
  };

  return (
    <nav className='sidebar__nav'>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li
              onClick={() => handleClick(index)}
              className={`sidebar__item ${itemActive === index ? 'is-active' : ''}`}>
              <Link className='sidebar__link' to={item.link}>
                {item.icon}
                <span>{item.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
