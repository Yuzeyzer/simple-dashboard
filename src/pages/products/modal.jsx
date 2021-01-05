import React from 'react';
import { BtnGoBack } from '../../components/btns/index';
import modalRight from '../../assets/modal-right.png';


const Modal = ({ setActiveModal, activeModal, setProducts, products }) => {
  const [newProduct, setNewProduct] = React.useState({
    id: '',
    productLogo: '',
    productName: '',
    productDescription: '',
    updatedTime: '',
    downloads: '',
  });

  const modaRef = React.useRef();
  const modalWrapperRef = React.useRef();

  const handleClickOutside = (event) => {
    if (!event.path.includes(modaRef.current)) {
      setActiveModal(false);
    }
  };

  const saveData = (event) => {
    setNewProduct({
      id: '1',
      productLogo: event.target.form[1].value,
      productName: event.target.form[0].value,
      productDescription: event.target.form[2].value,
      updatedTime: new Date(),
      downloads: event.target.form[3].value,
    });
  };

  const handleSubmit = (event) => {
    setActiveModal(false);
    event.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({
    id: '',
    productLogo: '',
    productName: '',
    productDescription: '',
    updatedTime: '',
    downloads: '',
    });
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
          <h3 className='modal__title'>Create a new product</h3>
          <h6 className='modal__suptitle'>Add main information about product</h6>
          <form className='modal__form' onSubmit={(event) => handleSubmit(event)}>
            <label className='modal__label' htmlFor=''>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newProduct.productName}
                type='text'
                placeholder='Type Product Name'
              />
              <p>Product Name</p>
            </label>
            <label htmlFor='' className='modal__label'>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newProduct.productLogo}
                type='text'
                placeholder='Type Url To Image'
              />
              <p>Image</p>
            </label>
            <label htmlFor='' className='modal__label'>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newProduct.productDescription}
                type='text'
                placeholder='Type Product Description'
              />
              <p>Product Description</p>
            </label>
            <label htmlFor='' className='modal__label'>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newProduct.downloads}
                type='text'
                placeholder='Type Downloads'
              />
              <p>Downloads</p>
            </label>
            <button className='btn-blue form__btn'>Add New Product</button>
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
