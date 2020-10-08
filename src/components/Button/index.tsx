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
}: Props) => {
  const width = size === 'lg' ? 400 : 240;
  const height = 60;

  return (
    <div className={`button-container ${size} ${dark ? 'dark' : 'light'} ${className}`}>
      <button
        type="button"
        onClick={onClick}
      >
        <svg width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`}>
          <polyline points={`${width - 1},1 ${width - 1},${height - 1} 1,${height - 1} 1,1 ${width - 1},1`} className="bg-line" />
        </svg>

        {children}
      </button>
    </div>
  );
};

export default Button;
