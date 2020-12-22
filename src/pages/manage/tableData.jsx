import React from 'react';
import Time from 'react-time';
import { DataGrid } from '@material-ui/data-grid';
import { columns } from './const';

const TableData = ({ ayday }) => {
  console.log(ayday);
  let now = new Date();
  return (
    <React.Fragment>
      <DataGrid rows={ayday} columns={columns} pageSize={6} checkboxSelection />
      {/* {users.map((item, index) => {
        let wasDate = new Date(`${item.dateOfRegistry}`);
        return (
          <tr className='manage__row'>
            <td className='col-3 user__row'>
              <img className='user__avatar' src={item.avatar} alt='А картинки нет, ай ай' />
              <span className='user__name'>{item.fullName}</span>
            </td>
            <td className='col-3 manage__headers'>{item.userID}</td>
            <td className='col-3 manage__headers'>{item.phone}</td>
            <td className='col-3 manage__headers'>{item.email}</td>
            <td className='col-1 manage__headers user__date'>
              {users[index].dateOfRegistry.length !== 0 ? (
                <Time value={wasDate} format='YYYY/MM/DD' />
              ) : (
                <Time value={now} format='YYYY/MM/DD' />
              )}
            </td>
          </tr>
        );
      })} */}
    </React.Fragment>
  );
};

export default TableData;
