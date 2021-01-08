import React from 'react';
import { navItems } from './const';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [itemActive, setItemActive] = React.useState(0);

  const handleClick = (index) => {
    setItemActive(index);
  };

  const handleWindowClick = (event) => {
    if (event.path[0].pathname === '/products') {
      const array = navItems.map((item) => item.link);
      const result = array.indexOf(event.path[0].pathname);
      setItemActive(result);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleWindowClick);
  }, []);

  return (
    <nav className='sidebar__nav'>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li
              key={item + index}
              onClick={() => {
                handleClick(index);
              }}
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

// Я изучала HTML(язык гипертектекстовой разметки текста) и CSS(язык каскадных стилей)
// Будучи в школьном возврасте преподавала людям английский язык который также необходим для программиста
// Получила отличительную оцену от преподавателя 