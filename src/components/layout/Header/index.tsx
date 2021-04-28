import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import ArrowBox from 'components/ArrowBox';
import Button from 'components/Button';
import Menu from 'components/layout/Menu';
import NavCard from 'components/layout/NavCard';

import { mailtoLink, resumeFileName } from 'utils';
import { ColorMode } from 'types';

import Link from 'next/link';
import styles from './Header.module.scss';

export interface HeaderProps {
  title: string,
  subtitle: string,
  description: string,
  children: ReactNode,

  src?: string,
  alt?: string,

  colorMode?: ColorMode,
  hideArrow?: boolean
}

const Header = ({
  title, subtitle, description, children,
  src, alt, colorMode = 'light', hideArrow = false,
}: HeaderProps): JSX.Element => {
  const router = useRouter();

  return (
    <header className={[styles.container, colorMode === 'light' ? styles.light : styles.dark].join(' ')}>
      {src && alt && (
        <div className={styles.mainFeature}>
          <div className={styles.mainFeatureShadow} />
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className={styles.mainFeature}
          />
        </div>
      )}

      <div className={[styles.line, styles.top].join(' ')} />
      <div className={[styles.line, styles.main].join(' ')} />

      <div className={styles.signature}><img src="/logo-white-transparent.svg" alt="adam mcquilkin personal logo" /></div>
      <div className={styles.signatureShadow} />

      <Menu colorMode={colorMode} className={styles.menuContainer} />
      <div className={styles.menuShadow} />

      <div className={styles.personalLinksContainer}>
        <Link href="">
          <a className={styles.linkContainer}>
            <p>LinkedIn</p>
            <img src="/icons/github.svg" alt="linkedin link" />
          </a>
        </Link>

        <Link href="">
          <a className={styles.linkContainer}>
            <p>GitHub</p>
            <img src="/icons/github.svg" alt="github link" />
          </a>
        </Link>

        <Link href="">
          <a className={styles.linkContainer}>
            <p>Medium</p>
            <img src="/icons/github.svg" alt="medium link" />
          </a>
        </Link>

        <Link href="">
          <a className={styles.linkContainer}>
            <p>Email</p>
            <img src="/icons/github.svg" alt="mailto link" />
          </a>
        </Link>
      </div>

      <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>

          <div className={styles.buttonContainer}>
            {children}
          </div>
        </div>

        <div className={styles.bannerShadow} />
      </div>

      <nav className={styles.cardsContainer}>
        <NavCard
          title="development"
          subtitle="software"
          linkText="see work"
          colorMode={colorMode}
          onClick={() => { router.push('/?tag=development#work-experience-search'); }}
          className={styles.navCard}
        />

        <NavCard
          title="design"
          subtitle="product"
          linkText="see work"
          colorMode={colorMode}
          onClick={() => { router.push('/?tag=design#work-experience-search'); }}
          className={styles.navCard}
        />

        <NavCard
          title="photography"
          subtitle="personal"
          linkText="see work"
          colorMode={colorMode}
          onClick={() => { router.push('/about#main-photo-gallery'); }}
          className={styles.navCard}
        />
      </nav>

      {!hideArrow && <ArrowBox colorMode={colorMode} className={styles.arrowBox} />}

      <div className={styles.bottomGradient} />
    </header>
  );
};

export default Header;
