import React from 'react';
import './style.scss';
import ProductHeader from './productHeader';
import ProductItem from './productItem';
import SearchBar from '../manage/searchBar';
import axios from 'axios';
import {GreenBtn} from '../../components/btns'
import Modal from '../manage/modal'

const Products = () => {
	const [products, setProducts] = React.useState([]);
	const [modalActive, setModalActive] = React.useState(false)
  React.useEffect(() => {
    axios
      .get('http://localhost:3001/database.json')
      .then((response) => response.data.products)
      .then((item) => setProducts(item));
  }, []);
  return (
    <section className='products'>
			{modalActive && <Modal setActiveModal={setModalActive} />}
      <div className='container section__container'>
        <ProductHeader />
        <div className="d-flex-between">
				   <SearchBar />
				<div onClick={() => setModalActive(true)}>
           <GreenBtn text={'New product'}/>
				</div>
				</div>
        <div className='row products__wrapper'>{products.map((item) => <ProductItem item={item}/>)}</div>
      </div>
    </section>
  );
};

export default Products;
