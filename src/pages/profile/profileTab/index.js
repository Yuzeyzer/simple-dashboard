import React from 'react';

const ProfileTab = () => {
  return (
    <div className='profile__info'>
      <div>
        {' '}
        <h3 className='profile__name'>Adrian Stefan</h3>
        <span className='profile__address'>Rm. Valcea, Romania</span>{' '}
        <span className='profile__gmt'>4:32PM (GMT-4)</span>
      </div>
      <img
        className='profile__image'
        src='https://instagram.ffru8-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/132282645_135395904907875_8952833876786670444_n.jpg?_nc_ht=instagram.ffru8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=mlYZK8vt_-0AX-16DqZ&tp=1&oh=85ad415ea43185283c70d4b81f2c28b7&oe=6022227A'
        alt='Photo by Babur Tolbaev on December 22, 2020. На изображении может находиться: 2 человека, люди стоят, небо, облако, снег и на улице.'
      />
    </div>
  );
};

export default ProfileTab;
