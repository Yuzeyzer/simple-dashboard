import React from 'react';
import axios from 'axios';
import TableData from './tableData';
import SearchBar from './searchBar'
import {PrimaryBtn} from '../../components/btns';
import './style.scss';

export default function Manage() {
  const [usersData, setUsersData] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response)
      .then(({ data }) => setUsersData(data.users));
  }, []);
  return (
    <div className='manage'>
    <div className='manage__top'>
    <SearchBar style={{borderRadius: '4px'}}/>
      <PrimaryBtn text={'Add user'} />
    </div>
      <div style={{ height: 450, width: '100%', background: 'white', borderRadius: '4px'}}>
        <TableData ayday={usersData}/>
      </div>
    </div>
    
  );
}

// import plus from '../../assets/plus-symbol.svg';
// import './style.scss';
// import Item from './item';
// import { BtnGoBack } from '../../components/btns/index';
// import modalRight from '../../assets/modal-right.png';
// import axios from 'axios';

// const Manage = () => {
// const [usersData, setUsersData] = React.useState([]);
//   const [newUser, setNewUser] = React.useState({
//     id: '',
//     avatar: '',
//     fullName: '',
//     userID: '',
//     email: '',
//     phone: '',
//     dateOfRegistry: '',
//   });
//   const [activeModal, setActiveModal] = React.useState(false);

//   const modaRef = React.useRef();
//   const modalWrapperRef = React.useRef();

//   const handleClickOutside = (event) => {
//     if (!event.path.includes(modaRef.current)) {
//       setActiveModal(false);
//     }
//   };

//   const saveData = (event) => {
//     setNewUser({
//       id: '',
//       avatar: event.target.form[1].value,
//       fullName: event.target.form[0].value,
//       userID: event.target.form[2].value,
//       email: event.target.form[4].value,
//       phone: event.target.form[3].value,
//       dateOfRegistry: '',
//     });
//   };

//   const handleSubmit = (event) => {
//     setActiveModal(false)
//     event.preventDefault();
//     setUsersData([...usersData, newUser]);
//     setNewUser({
//       id: '',
//       avatar: '',
//       fullName: '',
//       userID: '',
//       email: '',
//       phone: '',
//       dateOfRegistry: '',
//     });
//   };

// React.useEffect(async () => {
//   await axios
//     .get(`http://localhost:3001/database.json`)
//     .then((response) => response)
//     .then(({ data }) => setUsersData(data.users));
// }, []);

//   React.useEffect(() => {
//     if (modalWrapperRef.current) {
//       modalWrapperRef.current.addEventListener('click', handleClickOutside);
//     }
//   }, [activeModal]);

//   const handleClick = () => {
//     setActiveModal(true);
//   };

//   return (
//     <section className='manage'>
//       {activeModal && (
//         <div ref={modalWrapperRef} className='modal__wrapper'>
//           <div ref={modaRef} className='modal'>
//             <div className='col-6 modal__left'>
//               <div onClick={() => setActiveModal(false)}>
//                 <BtnGoBack />
//               </div>
//               <h3 className='modal__title'>Create a new user</h3>
//               <h6 className='modal__suptitle'>Add main information about user</h6>
//               <form className='modal__form' onSubmit={(event) => handleSubmit(event)}>
//                 <label className='modal__label' htmlFor=''>
//                   <input
//                     required
//                     onChange={(event) => saveData(event)}
//                     value={newUser.fullName}
//                     type='text'
//                     placeholder='Введите Имя Пользователя'
//                   />
//                   <p>Имя пользователя</p>
//                 </label>
//                 <label htmlFor='' className='modal__label'>
//                   <input
//                     required
//                     onChange={(event) => saveData(event)}
//                     value={newUser.avatar}
//                     type='text'
//                     placeholder='Введите путь к картинке'
//                   />
//                   <p>Картинка</p>
//                 </label>
//                 <label htmlFor='' className='modal__label'>
//                   <input
//                     required
//                     onChange={(event) => saveData(event)}
//                     value={newUser.userID}
//                     type='text'
//                     placeholder='Введите ID'
//                   />
//                   <p>ID</p>
//                 </label>
//                 <label htmlFor='' className='modal__label'>
//                   <input
//                     required
//                     onChange={(event) => saveData(event)}
//                     value={newUser.phone}
//                     type='text'
//                     placeholder='Введите номер телефона'
//                   />
//                   <p>Номер телефона</p>
//                 </label>
//                 <label htmlFor='' className='modal__label'>
//                   <input
//                     required
//                     onChange={(event) => saveData(event)}
//                     value={newUser.email}
//                     type='text'
//                     placeholder='Введите почту пользователя'
//                   />
//                   <p>Почта пользователя</p>
//                 </label>
//                 <button className='btn-blue form__btn'>Add New User</button>
//               </form>
//             </div>
//             <div className='col-6 text-right'>
//               <img className='modal__right' src={modalRight} alt='modalRight' />
//             </div>
//           </div>
//         </div>
//       )}
//       <div className='manage__top'>
//         <div className='row'>
//           <div className='manage__filter'>Filter</div>
//           <label className='manage__search'>
//             <input type='text' placeholder='Search users by name, id' />
//           </label>
//         </div>
//         <button onClick={handleClick} className='manage__add-user'>
//           <img src={plus} alt='plus' />
//           ADD USER
//         </button>
//       </div>
//       <table className='manage__users'>
//         <tr className='manage__row'>
//           <th className='col-3 manage__headers'>Selected 2 users</th>
//           <th className='col-3 manage__headers'>User ID</th>
//           <th className='col-3 manage__headers'>Phone Number</th>
//           <th className='col-3 manage__headers'>Email Address</th>
//           <th className='col-1 manage__headers'>Account Created</th>
//         </tr>
//         <Item users={usersData} />
//       </table>
//     </section>
//   );
// };

// export default Manage;
