import React from 'react';
import TopCards from './topCards';
import VerticalBar from './verticalBar';
import CircleChart from './circle';
import LatesProducts from './latestProducts';
import './style.scss';
const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='section__container'>
        <div className='row dashboard__row'>
          <div className='col-12 dashboard__column'>
            <div className=''>
              <TopCards />
            </div>
          </div>
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
          <div className='col-3 dashboard__column'>
            <div className='dashboard__item'>
              <LatesProducts />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
