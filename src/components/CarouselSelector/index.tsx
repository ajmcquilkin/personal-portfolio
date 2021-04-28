import { ColorMode } from 'types';
import styles from './CarouselSelector.module.scss';

export interface CarouselSelectorProps {
  numOptions: number,
  currentPos: number,
  onSelect: (pos: number) => void,

  colorMode?: ColorMode,
  className?: string
}

const CarouselSelector = ({
  numOptions, currentPos, onSelect,
  colorMode = 'dark', className = ''
}: CarouselSelectorProps): JSX.Element => {
  const handleSelect = (nextPos: number) => {
    if (nextPos < 0) return onSelect(numOptions - 1);
    if (nextPos >= numOptions) return onSelect(0);
    return onSelect(nextPos);
  };

  const colorClassSelector = colorMode === 'dark' ? styles.dark : styles.light;

  return (
    <div className={[styles.container, colorClassSelector, className].join(' ')}>
      <button
        className={styles.selector}
        type="button"
        onClick={() => handleSelect(currentPos - 1)}
      >
        <svg className={colorClassSelector} xmlns="http://www.w3.org/2000/svg" width="28" height="7" viewBox="0 0 28 7" fill="none">
          <path d="M2 3.5L8 1V3.5V6L2 3.5Z" />
          <path d="M28 3.5H2M2 3.5L8 1V6L2 3.5Z" />
        </svg>

        <p className={colorClassSelector}>view previous</p>
      </button>

      <div className={styles.dotsContainer}>
        {[...Array(numOptions)].map((_value, idx) => (
          <button
            type="button"
            onClick={() => onSelect(idx)}
            className={[styles.dot, colorClassSelector, idx === currentPos ? styles.active : ''].join(' ')}
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
          >
            <p>
              dot selector
              {' '}
              {idx}
            </p>
          </button>
        ))}
      </div>

      <button
        className={styles.selector}
        type="button"
        onClick={() => handleSelect(currentPos + 1)}
      >
        <p className={colorClassSelector}>view next</p>

        <svg className={colorClassSelector} xmlns="http://www.w3.org/2000/svg" width="28" height="7" viewBox="0 0 28 7" fill="none">
          <path d="M26 3.5L20 6V3.5V1L26 3.5Z" />
          <path d="M0 3.5L26 3.5M26 3.5L20 6V1L26 3.5Z" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselSelector;
