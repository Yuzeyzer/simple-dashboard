import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import DaysPopUp from './daysPopUp';

const CircleChart = () => {
  const testObject = [
    {
      desktop: 25,
      tablet: 55,
      mobile: 20,
    },
    { desktop: 65, tablet: 25, mobile: 15 },
    { desktop: 15, tablet: 45, mobile: 30 },
  ];
  const [percent, setPercent] = React.useState(testObject[0]);

  return (
    <>
      <PieChart
        className='circle__chart'
        data={[
          { title: 'One', value: percent.desktop, color: '#1070CA' },
          { title: 'Two', value: percent.tablet, color: '#F7D154' },
          { title: 'Three', value: percent.mobile, color: '#EC4C47' },
        ]}
      />
      <div className='row circle__row'>
        <div className='col-4'>
          <div className='circle__item'>
            <svg
              width='26'
              height='23'
              viewBox='0 0 26 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M23.8333 0C24.4352 0 24.9468 0.206597 25.3681 0.619792C25.7894 1.03299 26 1.53472 26 2.125V14.875C26 15.4653 25.7894 15.967 25.3681 16.3802C24.9468 16.7934 24.4352 17 23.8333 17H2.16667C1.56482 17 1.05324 16.7934 0.631944 16.3802C0.210648 15.967 0 15.4653 0 14.875V2.125C0 1.53472 0.210648 1.03299 0.631944 0.619792C1.05324 0.206597 1.56482 0 2.16667 0H23.8333ZM23.725 15C23.7861 15 23.8472 14.9699 23.9083 14.9097C23.9694 14.8495 24 14.7894 24 14.7292V2.27083C24 2.21065 23.9694 2.15046 23.9083 2.09028C23.8472 2.03009 23.7861 2 23.725 2H2.275C2.21389 2 2.15278 2.03009 2.09167 2.09028C2.03056 2.15046 2 2.21065 2 2.27083V14.7292C2 14.7894 2.03056 14.8495 2.09167 14.9097C2.15278 14.9699 2.21389 15 2.275 15H23.725ZM20.6901 22.6875C20.8967 22.4792 21 22.2262 21 21.9286C21 21.631 20.8967 21.378 20.6901 21.1696C20.4835 20.9613 20.2326 20.8571 19.9375 20.8571H15.5547L14.7578 18.3571C14.6693 18.119 14.4922 18 14.2266 18H10.7734C10.5078 18 10.3307 18.119 10.2422 18.3571L9.44531 20.8571H5.0625C4.76736 20.8571 4.51649 20.9613 4.3099 21.1696C4.1033 21.378 4 21.631 4 21.9286C4 22.2262 4.1033 22.4792 4.3099 22.6875C4.51649 22.8958 4.76736 23 5.0625 23H19.9375C20.2326 23 20.4835 22.8958 20.6901 22.6875Z'
                fill='#A6B1BB'
              />
            </svg>
            <h6 className='circle__title'>Desktop</h6>
            <span className='circle__percent blue'>{percent.desktop}%</span>
          </div>
        </div>
        <div className='col-4'>
          <div className='circle__item'>
            <svg
              width='20'
              height='23'
              viewBox='0 0 20 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M20 2.15625V20.8438C20 21.4427 19.7917 21.9518 19.375 22.3711C18.9583 22.7904 18.4524 23 17.8571 23H2.14286C1.54762 23 1.04167 22.7904 0.625 22.3711C0.208334 21.9518 0 21.4427 0 20.8438V2.15625C0 1.55729 0.208334 1.04818 0.625 0.628906C1.04167 0.209636 1.54762 0 2.14286 0H17.8571C18.4524 0 18.9583 0.209636 19.375 0.628906C19.7917 1.04818 20 1.55729 20 2.15625ZM12 18.5C12 18.9062 11.8516 19.2578 11.5547 19.5547C11.2578 19.8516 10.9062 20 10.5 20C10.0938 20 9.74219 19.8516 9.44531 19.5547C9.14844 19.2578 9 18.8906 9 18.4531C9 18.0156 9.14062 17.6641 9.42188 17.3984C9.70312 17.1328 10.0547 17 10.4766 17C10.8984 17 11.2578 17.1484 11.5547 17.4453C11.8516 17.7422 12 18.0938 12 18.5ZM18 2.27404V20.726C18 20.7869 17.9697 20.8478 17.9091 20.9087C17.8485 20.9696 17.7879 21 17.7273 21H2.27273C2.21212 21 2.15152 20.9696 2.09091 20.9087C2.0303 20.8478 2 20.7869 2 20.726V2.27404C2 2.21314 2.0303 2.15224 2.09091 2.09135C2.15152 2.03045 2.21212 2 2.27273 2H17.7273C17.7879 2 17.8485 2.03045 17.9091 2.09135C17.9697 2.15224 18 2.21314 18 2.27404Z'
                fill='#A6B1BB'
              />
            </svg>
            <h6 className='circle__title'>Tablet</h6>
            <span className='circle__percent yellow'>{percent.tablet}%</span>
          </div>
        </div>
        <div className='col-4'>
          <div className='circle__item'>
            <svg
              width='14'
              height='23'
              viewBox='0 0 14 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M14 2.15625V20.8438C14 21.4427 13.7958 21.9518 13.3875 22.3711C12.9792 22.7904 12.4833 23 11.9 23H2.1C1.51667 23 1.02083 22.7904 0.6125 22.3711C0.204167 21.9518 0 21.4427 0 20.8438V2.15625C0 1.55729 0.204167 1.04818 0.6125 0.628906C1.02083 0.209636 1.51667 0 2.1 0H11.9C12.4833 0 12.9792 0.209636 13.3875 0.628906C13.7958 1.04818 14 1.55729 14 2.15625ZM9 18.5C9 18.9062 8.85156 19.2578 8.55469 19.5547C8.25781 19.8516 7.90625 20 7.5 20C7.09375 20 6.74219 19.8516 6.44531 19.5547C6.14844 19.2578 6 18.9062 6 18.5C6 18.0938 6.14844 17.7422 6.44531 17.4453C6.74219 17.1484 7.09375 17 7.5 17C7.90625 17 8.25781 17.1484 8.55469 17.4453C8.85156 17.7422 9 18.0938 9 18.5ZM12 2.27404V20.726C12 20.7869 11.9702 20.8478 11.9107 20.9087C11.8512 20.9696 11.7917 21 11.7321 21H2.26786C2.20833 21 2.14881 20.9696 2.08929 20.9087C2.02976 20.8478 2 20.7869 2 20.726V2.27404C2 2.21314 2.02976 2.15224 2.08929 2.09135C2.14881 2.03045 2.20833 2 2.26786 2H11.7321C11.7917 2 11.8512 2.03045 11.9107 2.09135C11.9702 2.15224 12 2.21314 12 2.27404Z'
                fill='#A6B1BB'
              />
            </svg>
            <h6 className='circle__title'>Mobile</h6>
            <span className='circle__percent red'>{percent.mobile}%</span>
          </div>
        </div>
      </div>
      <div className='circle__footer'>
        <DaysPopUp setPercent={setPercent} testObject={testObject} />
        <a href=''>Audience Devices</a>
      </div>
    </>
  );
};

export default CircleChart;
