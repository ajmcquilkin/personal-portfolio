import React from 'react';
import './HeaderNavCard.scss';

interface Props {
  onClick: () => void;
  title: string;
  subtitle: string;
  linkText: string;

  className?: string;
  dark?: boolean;
}

const ArrowBox = ({
  onClick,
  title,
  subtitle,
  linkText,

  className = '',
  dark = false,
}: Props) => (
  <div
    role="button"
    tabIndex={0}
    onClick={() => onClick()}
    className={`header-nav-card-container ${dark ? 'dark' : 'light'} ${className}`}
    onKeyPress={(e) => { if (e.key === 'Enter') onClick(); }}
  >
    <div className="header-nav-card-flex-container">
      <div className="header-nav-card-left">
        <p>{subtitle}</p>
        <div className="header-nav-card-title">{title}</div>
      </div>
      <p>{linkText}</p>
    </div>
  </div>
);

export default ArrowBox;
