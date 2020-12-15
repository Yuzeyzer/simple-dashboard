import React from 'react';
import plus from '../../assets/plus-symbol.svg';
import './style.scss';

const Manage = () => {
  return (
    <section className='manage'>
      <div className='manage__top'>
        <div className='row'>
          <div className='manage__filter'>Filter</div>
          <label className='manage__search'>
            <input type='text' placeholder='Search users by name, id' />
          </label>
        </div>
        <button className='manage__add-user'>
          <img src={plus} alt='plus' />
          ADD USER
        </button>
      </div>
      <table className='manage__users'></table>
    </section>
  );
};

export default Manage;
