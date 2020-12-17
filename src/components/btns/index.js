import React from 'react';
import './style.scss';

export const BtnGoBack = () => {
  return (
    <button className="btn-back">
      <svg
        width='18'
        height='14'
        viewBox='0 0 18 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.290001 7.71L6.29 13.71C6.47 13.89 6.72 14 7 14C7.55 14 8 13.55 8 13C8 12.72 7.89 12.47 7.71 12.29L3.41 8L17 8C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6L3.41 6L7.7 1.71C7.89 1.53 8 1.28 8 1C8 0.45 7.55 0 7 0C6.72 0 6.47 0.11 6.29 0.29L0.290001 6.29C0.110001 6.47 0 6.72 0 7C0 7.28 0.110001 7.53 0.290001 7.71Z'
          fill='#9EA0A5'
        />
      </svg>
      <span>Go Back</span>
    </button>
  );
};

export const btn = () => {};
