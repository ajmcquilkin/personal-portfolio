import React from 'react';
import { withRouter, NavLink, RouteComponentProps } from 'react-router-dom';
import './NavMenuItem.scss';

interface Props extends RouteComponentProps {
  pageName: string;
  pageLink: string;

  className?: string;
  dark?: boolean;
}

const NavMenuItem = ({
  pageName,
  pageLink,
  history,
  className = '',
  dark = false,
}: Props) => (
  <div className={`nav-menu-container${dark ? ' dark' : ' light'} ${className}`}>
    <div className={`nav-menu-container-bar left${history.location.pathname === pageLink ? ' active' : ''}${dark ? ' dark' : ' light'}`} />
    <NavLink exact className={dark ? 'dark' : 'light'} to={pageLink}>{pageName}</NavLink>
    <div className={`nav-menu-container-bar right${history.location.pathname === pageLink ? ' active' : ''}${dark ? ' dark' : ' light'}`} />
  </div>
);

export default withRouter(NavMenuItem);
