import React from 'react';

const ProfileNav = ({ setActiveBlock }) => {
  const NavItems = ['Profile', 'Account', 'Price Plans'];
  const [itemActive, setItemActive] = React.useState(0);
  return (
    <div className='profile__nav'>
      <ul className='profile__list'>
        {NavItems.map((item, index) => {
          return (
            <li
              onClick={() => {
                setItemActive(index);
                setActiveBlock(index);
              }}
              className={`${index === itemActive ? 'is-active' : ''}`}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileNav;
