import React from 'react';

const Dashboard = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newArray = array.filter(item => item % 5 === 0);
  console.log(array, 'Это старый массив')
  console.log(newArray, 'Это новый отфильтрованный массив')
  return (
    <section>
      <div className='section__container'>Это страница Dashboard</div>
    </section>
  );
};

export default Dashboard;
