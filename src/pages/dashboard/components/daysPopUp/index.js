import React from 'react';
import { days } from '../../const';

const DaysPopUp = ({ setArrayOfData, chartData, setPercent, testObject }) => {
  const [listItem, setListItem] = React.useState(0);
  const [list, setList] = React.useState(false);
  const popUpRef = React.useRef();
  const handleClickActive = () => {
    setList(list ? false : true);
  };
  const handleClickItem = (i) => {
    console.log(popUpRef.current);
    setListItem(i);
    if (chartData) {
      setArrayOfData(chartData[i]);
    }
    if (testObject) {
      setPercent(testObject[i]);
    }
  };

  const handleClickOutside = (event) => {
    if (!event.path.includes(popUpRef.current)) {
      setList(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  }, []);
  return (
    <div
      ref={popUpRef}
      onClick={handleClickActive}
      className={`column__filter circle__percent ${
        list ? 'column__filter--up' : 'column__filter--down'
      }`}>
      <span>{days[listItem]} ago</span>
      {list && (
        <ul className='circle__list'>
          {days.map((item, index) => (
            <li onClick={() => handleClickItem(index)}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DaysPopUp;
