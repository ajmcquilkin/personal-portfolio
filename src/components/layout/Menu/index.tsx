import NavMenuItem from 'components/layout/NavMenuItem';
import { mailtoLink, resumeFileName } from 'utils';
import { ColorMode } from 'types';

import styles from './Menu.module.scss';

export interface MenuProps {
    colorMode?: ColorMode,
    className?: string
}

const Menu = ({ colorMode = 'light', className = '' }: MenuProps): JSX.Element => (
    <nav className={[styles.container, className].join(' ')}>
        <NavMenuItem className={styles.menuItem} colorMode={colorMode} label="Home" href="/" />
        <NavMenuItem className={styles.menuItem} colorMode={colorMode} label="Stories" href="/stories" />
        <NavMenuItem className={styles.menuItem} colorMode={colorMode} label="About Me" href="/about" />
        <NavMenuItem className={styles.menuItem} colorMode={colorMode} label="My Resume" href={`/${resumeFileName}`} />
        <NavMenuItem className={styles.menuItem} colorMode={colorMode} label="Contact" href={mailtoLink} />
    </nav>
);

export default Menu;
