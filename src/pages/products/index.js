import React from 'react';
import './style.scss';
import ProductHeader from './productHeader';
import ProductItem from './productItem';
import SearchBar from './searchBar';
import axios from 'axios';
import { GreenBtn } from '../../components/btns';
import Modal from '../manage/modal';

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [modalActive, setModalActive] = React.useState(false);
  const [searchValue,setSearchValue] = React.useState('');
  const array = ['BOGDAN', 'aYdAy', 'EraLY'];
  const newArray = array.map(item => item.toLowerCase())

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/database.json')
      .then((response) => response.data.products)
      .then((item) => setProducts(item));
  }, []);
  return (
    <section className='products'>
      {modalActive && <Modal setActiveModal={setModalActive} />}
      <div className='container section__container'>
        <ProductHeader />
        <div className='d-flex-between'>
          <SearchBar setSearchValue={setSearchValue}/>
          <div onClick={() => setModalActive(true)}>
            <GreenBtn text={'New product'} />
          </div>
        </div>
        <div className='row products__wrapper'>
         {products.filter(item => {
            if(searchValue === '')
            return item
            else if(item.productName.toLowerCase().includes(searchValue.toLowerCase())){
            return item
        }
         }).map(item => <ProductItem item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;


// {products.map((item) => {
//   Array.from(item.productName).filter(item => {
//      if (item.toLowerCase() === searchValue.toLowerCase()) {
//        return <ProductItem item={item} />
//      }

//    })
//    if (item.productName.toLowerCase() === searchValue.toLowerCase()) {
//      return <ProductItem item={item} />
//    }
//    else if (searchValue === '') {
//      return <ProductItem item={item} />
//    }
//  })}
