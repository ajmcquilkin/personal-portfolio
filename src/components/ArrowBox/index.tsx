import React from 'react';
import './ArrowBox.scss';

interface Props {
  orientation?: 'up' | 'down' | 'left' | 'right';
  dark?: boolean;
}

const ArrowBox = ({ orientation = 'up', dark = false }: Props) => (
  <div className={`arrow-box-container ${orientation} ${dark ? 'dark' : 'light'}`}>
    <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0V21.5M7 21.5L13 15.5M7 21.5L1 15.5" />
    </svg>
  </div>
);

export default ArrowBox;
