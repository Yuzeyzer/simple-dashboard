import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { columns } from './const';
import { WhiteBtn } from '../../../components/btns';
import Modal from './modal';
import axios from 'axios';

import './style.scss';

const LatestOrders = () => {
  const [usersData, setUsersData] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState(false);
  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response)
      .then(({ data }) => setUsersData(data.users));
  }, []);

  const handleClickModal = () => {
    setActiveModal(true);
  };

  return (
    <>
      {activeModal && (
        <Modal
          usersData={usersData}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          setUsersData={setUsersData}
        />
      )}
      <div className='latest-orders__header'>
        <div className='row'>
          <h3 className='column__title latest-orders__title'>Latest Orders</h3>
          <span className='latest__total'>3200 total</span>
        </div>
        <div className='row'>
          <div className='column__filter circle__percent column__filter--down latest-orders__sort'>
            Sort by: Newest
          </div>
          <WhiteBtn handleClickModal={handleClickModal} text={'NEW ENTRY'} />
        </div>
      </div>
      <div style={{ height: '400px' }}>
        <DataGrid rows={usersData} columns={columns} pageSize={5} />
      </div>
    </>
  );
};

export default LatestOrders;
