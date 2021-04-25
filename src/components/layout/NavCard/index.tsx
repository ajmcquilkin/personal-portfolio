import { ColorMode } from 'types';
import styles from './NavCard.module.scss';

export interface NavCardProps {
  title: string,
  subtitle: string,
  linkText: string,
  onClick: () => void,

  className?: string,
  colorMode?: ColorMode
}

const HeaderNavCard = ({
  title, subtitle, linkText, onClick,
  className = '', colorMode = 'light'
}: NavCardProps): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className={[styles.container, colorMode === 'light' ? styles.light : styles.dark, className].join(' ')}
  >
    <div className={styles.flexContainer}>
      <div className={styles.left}>
        <p className={styles.title}>{title}</p>
        <p>{subtitle}</p>
      </div>
      <p>{linkText}</p>
    </div>
  </button>
);

export default HeaderNavCard;
