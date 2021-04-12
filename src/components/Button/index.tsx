import { ReactNode } from 'react';
import { useResizeDetector } from 'react-resize-detector';

import { ButtonSize, ColorMode } from 'types';

import styles from './Button.module.scss';

export interface ButtonProps {
  colorMode?: ColorMode;
  size?: ButtonSize;
  className?: string;

  children: ReactNode,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({
  children, onClick,
  colorMode = 'light', size = 'small', className = ''
}: ButtonProps): JSX.Element => {
  const { width = 0, height = 0, ref } = useResizeDetector();

  return (
    <div
      className={[
        styles.buttonContainer,
        colorMode === 'light' ? styles.light : styles.dark,
        size === 'small' ? styles.sm : styles.lg,
        className
      ].join(' ')}
      ref={ref}
    >
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
