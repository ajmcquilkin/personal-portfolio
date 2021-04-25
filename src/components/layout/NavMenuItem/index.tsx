import Link from 'next/link';
import { useRouter } from 'next/router';
import { ColorMode } from 'types';

import styles from './NavMenuItem.module.scss';

export interface NavMenuItemProps {
  href: string,
  label: string,

  className?: string,
  colorMode?: ColorMode
}

const NavMenuItem = ({
  label, href, className = '', colorMode = 'light'
}: NavMenuItemProps): JSX.Element => {
  const router = useRouter();
  const isActive = href === router.pathname;
  const colorStyle = colorMode === 'light' ? styles.light : styles.dark;

  return (
    <div className={[styles.container, colorStyle, className].join(' ')}>
      <div className={[styles.bar, styles.left, colorStyle, isActive ? styles.active : ''].join(' ')} />
      <Link href={href}>
        <a className={[colorStyle, isActive ? styles.active : ''].join(' ')}>{label}</a>
      </Link>
      <div className={[styles.bar, styles.right, colorStyle, isActive ? styles.active : ''].join(' ')} />
    </div>
  );
};

export default NavMenuItem;
