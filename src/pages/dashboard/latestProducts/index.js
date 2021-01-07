import React from 'react';
import distanseInWordsToNow from 'date-fns/distance_in_words_to_now';
import enLocale from 'date-fns/locale/en';
import { Link } from 'react-router-dom';
const LatesProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3000/database.json`)
      .then((response) => response.json())
      .then((data) => data.products)
      .then((item) => setProducts(item));
  }, []);
  return (
    <>
      <div className='column__row'>
        <h3 className='column__title'>Latest Products</h3>
        <span className='latest__total'>5 in total</span>
      </div>
      {products.map((item, index) => {
        if (index < 5) {
          return (
            <div className='latest__item'>
              <img className='latest__img' src={item.productLogo} alt='product logo' />
              <div>
                <h5 className='latest__title'>{item.productName}</h5>
                <span className='latest__time'>
                  Updated{' '}
                  {distanseInWordsToNow(item.updatedTime, {
                    addSuffix: true,
                    locale: enLocale,
                    includeSeconds: true,
                  })}
                </span>
              </div>
            </div>
          );
        }
      })}
      <div className='column__footer'>
        <Link className='latest__view' to='/products'>
          View all
        </Link>
      </div>
    </>
  );
};

export default LatesProducts;
