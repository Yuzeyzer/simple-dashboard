import React from 'react';
import bigImg from '../../assets/product-background.png';
import productLogo from '../../assets/product__logo.svg';

const ProductHeader = () => {
  return (
    <div className='products__header'>
      <img className='products__background' src={bigImg} alt='background image' />
      <div className='row products__row'>
        <div className='products__logo'>
          <img src={productLogo} alt='logo of the company' />
        </div>
        <div className='products__info'>
          <span>PRODUCTS</span>
          <h3 className='products__author'>Devias Products</h3>
        </div>
      </div>
    </div>
	);
};

export default ProductHeader;
