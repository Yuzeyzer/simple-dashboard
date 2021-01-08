import React from 'react';
import { Bar } from '@reactchartjs/react-chart.js';
import { chartData } from '../const';
import DaysPopUp from '../components/daysPopUp';
const VerticalBar = () => {
  const [arrayOfData, setArrayOfData] = React.useState(chartData[0]);

  const data = {
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 Aug'],
    datasets: [
      {
        barThickness: 25,
        maxBarThickness: 100,
        minBarLength: 10,
        label: ' ',
        data: arrayOfData,
        backgroundColor: '#1665D8',
      },
      {
        barThickness: 25,
        maxBarThickness: 100,
        minBarLength: 10,
        label: '',
        data: [15, 25, 20, 5, 10, 4, 10],
        backgroundColor: '#EDF0F2',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <div className='column__row'>
        <h3 className='column__title'>Users by device</h3>
        <DaysPopUp setArrayOfData={setArrayOfData} chartData={chartData} />
      </div>
      <Bar
        data={data}
        options={options}
        width={50}
        height={20}
        options={{ maintainAspectRatio: false }}
      />
    </>
  );
};

export default VerticalBar;
