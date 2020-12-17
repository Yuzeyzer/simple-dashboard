import React from 'react';
import plus from '../../assets/plus-symbol.svg';
import './style.scss';
import Item from './item';
import { BtnGoBack } from '../../components/btns/index';
import axios from 'axios';

const Manage = () => {
  const [usersData, setUsersData] = React.useState([]);
  const [newUser, setNewUser] = React.useState({
    id: '',
    avatar: '',
    fullName: '',
    userID: '',
    email: '',
    phone: '',
    dateOfRegistry: '',
  });
  const [activeModal, setActiveModal] = React.useState(false);

  const handleClick = () => {
    setActiveModal(activeModal ? false : true);
  };

  const saveData = (event) => {
    setNewUser({
      id: '',
      avatar: event.target.form[1].value,
      fullName: event.target.form[0].value,
      userID: event.target.form[2].value,
      email: event.target.form[4].value,
      phone: event.target.form[3].value,
      dateOfRegistry: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsersData([...usersData, newUser]);
    setNewUser({
      id: '',
      avatar: '',
      fullName: '',
      userID: '',
      email: '',
      phone: '',
      dateOfRegistry: '',
    });
  };

  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response)
      .then(({ data }) => setUsersData(data.users));
  }, []);

  return (
    <section className='manage'>
      {activeModal && (
        <div className='modal'>
          <div>
            <BtnGoBack />
            <h3 className="modal__title">Create a new user</h3>
            <h6 className="modal__suptitle">Add main information about user</h6>
            <form className="modal__form" onSubmit={(event) => handleSubmit(event)}>
              <input
                onChange={(event) => saveData(event)}
                value={newUser.fullName}
                type='text'
                placeholder='Введите Имя Пользователя'
              />
              <input
                onChange={(event) => saveData(event)}
                value={newUser.avatar}
                type='text'
                placeholder='Введите путь к картинке'
              />
              <input
                onChange={(event) => saveData(event)}
                value={newUser.userID}
                type='text'
                placeholder='Введите ID'
              />
              <input
                onChange={(event) => saveData(event)}
                value={newUser.phone}
                type='text'
                placeholder='Введите номер телефона'
              />
              <input
                onChange={(event) => saveData(event)}
                value={newUser.email}
                type='text'
                placeholder='Введите почту пользователя'
              />
              <button>Добавить пользователя</button>
            </form>
          </div>
        </div>
      )}
      <div className='manage__top'>
        <div className='row'>
          <div className='manage__filter'>Filter</div>
          <label className='manage__search'>
            <input type='text' placeholder='Search users by name, id' />
          </label>
        </div>
        <button onClick={handleClick} className='manage__add-user'>
          <img src={plus} alt='plus' />
          ADD USER
        </button>
      </div>
      <table className='manage__users'>
        <tr className='manage__row'>
          <th className='col-3 manage__headers'>Selected 2 users</th>
          <th className='col-3 manage__headers'>User ID</th>
          <th className='col-3 manage__headers'>Phone Number</th>
          <th className='col-3 manage__headers'>Email Address</th>
          <th className='col-1 manage__headers'>Account Created</th>
        </tr>
        <Item users={usersData} />
      </table>
    </section>
  );
};

export default Manage;
