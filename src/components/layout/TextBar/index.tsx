import { ReactNode } from 'react';
import styles from './TextBar.module.scss';

export interface TextBarProps {
  children: ReactNode,
  className?: string
}

const TextBar = ({ children, className = '' }: TextBarProps): JSX.Element => (
  <div className={[styles.container, className].join(' ')}>
    {children}
  </div>
);

export default TextBar;
