import React from 'react';
import Cards from './cards';
import UsersDevice from './usersDevice';
import LatestProducts from './latestProducts';
import LatestOrders from './latestOrders';
import './style.scss';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='section__container'>
        <div className='row dashboard__row'>
          <div className='col-12 dashboard__column'>
            <div className=''>
              <Cards />
            </div>
          </div>
          <div className='col-12'>
            <UsersDevice />
          </div>
          {/* <div className='col-9 dashboard__column'>
            <div className='dashboard__item'>
              <VerticalBar />
            </div>
          </div>
          <div className='col-3 dashboard__column'>
            <div className='dashboard__item'>
              <CircleChart />
            </div>
          </div> */}
          <div className='col-3 dashboard__column'>
            <div className='dashboard__item'>
              <LatestProducts />
            </div>
          </div>
          <div className='col-9 dashboard__column'>
            <div className='dashboard__item'>
              <LatestOrders />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
