import React from 'react';
import plus from '../../assets/plus-symbol.svg';
import './style.scss';
import Item from './item';

const Manage = ({ data }) => {
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
      <table className='manage__users'>
        <tr className='manage__row'>
          <th className='col-3 manage__headers'>Selected 2 users</th>
          <th className='col-3 manage__headers'>User ID</th>
          <th className='col-3 manage__headers'>Phone Number</th>
          <th className='col-3 manage__headers'>Email Address</th>
          <th className='col-1 manage__headers'>Account Created</th>
        </tr>
          <Item users={data}/>
      </table>
    </section>
  );
};

export default Manage;
