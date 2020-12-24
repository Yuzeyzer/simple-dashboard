import React from 'react';
import timeIcon from '../../assets/time-icon.svg';
import downloadIcon from '../../assets/download-icon.svg';

const ProductItem = ({item}) => {


  return (
    <div className='col-4 products__column'>
      <div className='products__item'>
        <div className='products__icon'>
          <img
            src={item.productLogo}
            alt='product__logo'
          />
        </div>
        <h3 className='products__title'>{item.productName}</h3>
        <p className='products__description'>
         {item.productDescription}
        </p>
        <hr />
        <div className='products__footer row'>
          <div>
            <img src={timeIcon} alt='time icon' />
            <span>Updated {item.updatedTime} hr ago</span>
          </div>
          <div>
						<a href="https://slack.com/ssb/download-win">
						<img src={downloadIcon} alt="download icon"/>
						</a>
            <span>{item.downloads} downloads</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
