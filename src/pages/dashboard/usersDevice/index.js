import React from 'react';
import VerticalBar from './verticalBar';
import CircleChart from './circle';
const UsersDevice = () => {
  return (
    <>
      <div className='row'>
        <div className='col-9 dashboard__column'>
          <div className='dashboard__item'>
            <VerticalBar />
          </div>
        </div>
        <div className='col-3 dashboard__column'>
          <div className='dashboard__item'>
            <CircleChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersDevice;
