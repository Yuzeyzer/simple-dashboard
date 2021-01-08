import React from 'react';
import ProfileNav from './profileNav';
import AccountTab from './accountTab';
import ProfileTab from './profileTab';
import PricePlansTab from './pricePlansTab';
import './style.scss';
const Profile = () => {
  const [activeBlock, setActiveBlock] = React.useState(0);
  const tabs = [<ProfileTab />, <AccountTab />, <PricePlansTab />];
  return (
    <div>
      <div className='section__container'>
        <ProfileNav setActiveBlock={setActiveBlock} />
        <div className='row'>
          {tabs.map((item, index) => {
            return (
              index === activeBlock && (
                <div className='col-4'>
                  <div className='profile__item'>
                    <div className='item__top'>{item}</div>
                    <div className='item__footer'></div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
