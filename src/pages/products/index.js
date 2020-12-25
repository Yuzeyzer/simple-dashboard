import React from 'react';
import './style.scss';
import ProductHeader from './productHeader';
import ProductItem from './productItem';
import SearchBar from './searchBar';
import axios from 'axios';
import { GreenBtn } from '../../components/btns';
import Modal from './modal';

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [modalActive, setModalActive] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/database.json')
      .then((response) => response.data.products)
      .then((item) => setProducts(item));
  }, []);
  return (
    <section className='products'>
      {modalActive && <Modal setProducts={setProducts} products={products} setActiveModal={setModalActive} />}
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
           if (searchValue === '') {
             return item
           }
           else if (item.productName.toLowerCase().includes(searchValue.toLowerCase())) {
             return item
           }
         }).map(item => <ProductItem item={item}/>)}
        </div>
      </div>
    </section>
  );
};

export default Products;