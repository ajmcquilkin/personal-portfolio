import React from 'react';
import throttle from 'lodash.throttle';
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
  const [vw, setVW] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
    const throttledHandleResize = throttle(() => {
      setVW(window.innerWidth);
    }, 200, { leading: true });

    window.addEventListener('resize', throttledHandleResize);
    return () => { window.removeEventListener('resize', throttledHandleResize); };
  });

  const width = size === 'lg' ? (0.16 * vw + 240) : (0.09 * vw + 120);
  const height = (0.02 * vw + 30);

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
