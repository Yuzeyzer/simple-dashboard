import React from 'react';

const Item = ({ users }) => {
  console.log(users);
  return (
    <React.Fragment>
      {users.map((item) => {
        return (
          <tr className='manage__row'>
            <td className='col-3 user__row'>
              <img className='user__avatar' src={item.avatar} alt='avatar' />
              <span className='user__name'>{item.fullName}</span>
            </td>
            <td className='col-3 manage__headers'>{item.userID}</td>
            <td className='col-3 manage__headers'>{item.phone}</td>
            <td className='col-3 manage__headers'>{item.email}</td>
            <td className='col-1 manage__headers user__date'>{item.dateOfRegistry}</td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default Item;
