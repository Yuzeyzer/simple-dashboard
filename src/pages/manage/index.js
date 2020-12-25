import React from 'react';
import axios from 'axios';
import TableData from './tableData';
import SearchBar from './searchBar';
import { PrimaryBtn } from '../../components/btns';
import Modal from './modal';
import './style.scss';

export default function Manage() {
  const [usersData, setUsersData] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const handleClickModal = () => {
    setActiveModal(true);
  };

  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response)
      .then(({ data }) => setUsersData(data.users));
  }, []);
  return (
    <div className='manage'>
      {activeModal && (
        <Modal
          usersData={usersData}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          setUsersData={setUsersData}
        />
      )}

      <div className='manage__top'>
        <SearchBar setSearchValue={setSearchValue} style={{ borderRadius: '4px' }} />
        <PrimaryBtn handleClickModal={handleClickModal} text={'Add user'} />
      </div>
      <div style={{ height: 450, width: '100%', background: 'white', borderRadius: '4px' }}>
        <TableData
          users={usersData.filter((item) => {
            if (searchValue === '') {
              return item;
            } else if (item.fullName.toLowerCase().includes(searchValue.toLowerCase())) {
              return item;
            }
          })}
        />
      </div>
    </div>
  );
}
