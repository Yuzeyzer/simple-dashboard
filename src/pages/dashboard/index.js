import React from 'react';
import TopCards from './topCards';
import './style.scss';
const Dashboard = () => {
  return (
    <section>
      <div className='section__container'>
        <TopCards />
      </div>
    </section>
  );
};

export default Dashboard;
