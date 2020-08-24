import React from 'react';
import './Button.scss';

interface Props {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  className?: string;
  size?: 'lg' | 'sm';
  dark?: boolean;
}

const Button = ({
  children,
  onClick,
  className = '',
  size = 'sm',
  dark = false,
}: Props) => (
  <button
    type="button"
    onClick={onClick}
    className={`button-container ${size} ${dark ? 'dark' : 'light'} ${className}`}
  >
    {children}
  </button>
);

export default Button;
