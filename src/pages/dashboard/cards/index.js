import React from 'react';
import { cardsData } from '../const';

const Cards = () => {
  return (
    <div className='top-cards row top-cards__row'>
      {cardsData.map((item) => {
        return (
          <div className='col-3 top-cards__column'>
            <div className='top-cards__item'>
              <div className='top-cards__flex'>
                <div>
                  <span className='top-cards__suptitle'>{item.suptitle}</span>
                  <h3 className='top-cards__title'>{item.title}</h3>
                </div>
                <div className='top-cards__icon'>{item.icon}</div>
              </div>
              <div className='top-cards__details'>
                {item.progressBar ? (
                  <span className='top-cards__progressBar'></span>
                ) : (
                  <div>
                    <span
                      className={`top-cards__percent ${
                        item.income ? 'top-cards__percent--up' : 'top-cards__percent--down'
                      }`}>
                      {item.percent}%
                    </span>
                    <span className='top-cards__month'>Since last month</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
