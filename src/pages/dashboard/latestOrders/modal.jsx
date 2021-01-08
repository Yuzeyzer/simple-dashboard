import React from 'react';
import { BtnGoBack } from '../../../components/btns/index';
import modalRight from '../../../assets/modal-right.png';

const Modal = ({ setActiveModal, activeModal, setUsersData, usersData }) => {
  const [newUser, setNewUser] = React.useState({
    id: '',
    avatar: '',
    fullName: '',
    userID: '',
    email: '',
    phone: '',
    dateOfRegistry: '',
  });
  const currentDate = () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const separator = '/';
    const result = `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`;
    return result;
  };

  const modaRef = React.useRef();
  const modalWrapperRef = React.useRef();

  const handleClickOutside = (event) => {
    if (!event.path.includes(modaRef.current)) {
      setActiveModal(false);
    }
  };

  const saveData = (event) => {
    setNewUser({
      id: event.target.form[0].value,
      avatar: event.target.form[1].value,
      fullName: event.target.form[0].value,
      userID: event.target.form[2].value,
      email: event.target.form[4].value,
      phone: event.target.form[3].value,
      dateOfRegistry: currentDate(),
    });
  };

  const handleSubmit = (event) => {
    setActiveModal(false);
    event.preventDefault();
    setUsersData([...usersData, newUser]);
  };

  React.useEffect(() => {
    if (modalWrapperRef.current) {
      modalWrapperRef.current.addEventListener('click', handleClickOutside);
    }
  }, [activeModal]);

  return (
    <div ref={modalWrapperRef} className='modal__wrapper'>
      <div ref={modaRef} className='modal'>
        <div className='col-6 modal__left'>
          <div onClick={() => setActiveModal(false)}>
            <BtnGoBack />
          </div>
          <h3 className='modal__title'>Create a new user</h3>
          <h6 className='modal__suptitle'>Add main information about user</h6>
          <form className='modal__form' onSubmit={(event) => handleSubmit(event)}>
            <label className='modal__label' htmlFor=''>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newUser.fullName}
                type='text'
                placeholder='Введите Имя Пользователя'
              />
              <p>Имя пользователя</p>
            </label>
            <label htmlFor='' className='modal__label'>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newUser.avatar}
                type='text'
                placeholder='Введите путь к картинке'
              />
              <p>Картинка</p>
            </label>
            <label htmlFor='' className='modal__label'>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newUser.userID}
                type='text'
                placeholder='Введите ID'
              />
              <p>ID</p>
            </label>
            <label htmlFor='' className='modal__label'>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newUser.phone}
                type='text'
                placeholder='Введите номер телефона'
              />
              <p>Номер телефона</p>
            </label>
            <label htmlFor='' className='modal__label'>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newUser.email}
                type='text'
                placeholder='Введите почту пользователя'
              />
              <p>Почта пользователя</p>
            </label>
            <button className='btn-blue form__btn'>Add New User</button>
          </form>
        </div>
        <div className='col-6 text-right'>
          <img className='modal__right' src={modalRight} alt='modalRight' />
        </div>
      </div>
    </div>
  );
};

export default Modal;
