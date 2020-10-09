import React from 'react';
import './NavMenuItem.scss';

interface Props {
  active: boolean;
  pageName: string;
  onClick: (e: React.SyntheticEvent) => void;

  className?: string;
  dark?: boolean;
}

const NavMenuItem = ({
  active,
  pageName,
  onClick,

  className = '',
  dark = false,
}: Props) => (
  <div className={`nav-menu-container${dark ? ' dark' : ' light'} ${className}`} role="button">
    <div className={`nav-menu-container-bar left${active ? ' active' : ''}${dark ? ' dark' : ' light'}`} />
    <button className={`${dark ? 'dark' : 'light'}${active ? ' active' : ''}`} onClick={onClick} type="button">{pageName}</button>
    <div className={`nav-menu-container-bar right${active ? ' active' : ''}${dark ? ' dark' : ' light'}`} />
  </div>
);

export default NavMenuItem;
