import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import ArrowBox from 'components/ArrowBox';
import ProtectedImage from 'components/image/ProtectedImage';
import Menu from 'components/layout/Menu';
import NavCard from 'components/layout/NavCard';
import ConditionalRenderer from 'components/layout/ConditionalRenderer';

import { mailtoLink } from 'utils';
import { ColorMode } from 'types';

import styles from './Header.module.scss';
import { ConditionalRendererProvider } from '../ConditionalRenderer/context';

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
    src = '', alt = '', colorMode = 'light', hideArrow = false,
}: HeaderProps): JSX.Element => {
    const router = useRouter();
    const useImage = !!src && !!alt;

    return (
        <ConditionalRendererProvider isVisible={useImage}>
            <header className={[styles.container, colorMode === 'light' ? styles.light : styles.dark].join(' ')}>
                {useImage && (
                    <div className={styles.mainFeature}>
                        <ConditionalRenderer><div className={styles.mainFeatureShadow} /></ConditionalRenderer>

                        <ProtectedImage
                            src={src}
                            alt={alt}
                            objectFit="cover"
                            className={styles.mainFeature}
                            backgroundColor="#171e27"
                        />
                    </div>
                )}

                <div className={[styles.line, styles.top].join(' ')} />
                <div className={[styles.line, styles.main].join(' ')} />

                <div className={styles.signature}>
                    <img
                        src={`/logo-${colorMode === 'light' ? 'white' : 'dark'}-transparent.svg`}
                        alt="adam mcquilkin personal logo"
                    />
                </div>

                <ConditionalRenderer><div className={styles.signatureShadow} /></ConditionalRenderer>

                <Menu colorMode={colorMode} className={styles.menuContainer} />
                <ConditionalRenderer><div className={styles.menuShadow} /></ConditionalRenderer>

                <div className={styles.personalLinksContainer}>
                    <Link href="https://www.linkedin.com/in/adam-mcquilkin">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkContainer}
                        >
                            <p>LinkedIn</p>
                            <img src="/icons/brands/linkedin.png" alt="linkedin link" />
                        </a>
                    </Link>

                    <Link href="https://github.com/ajmcquilkin">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkContainer}
                        >
                            <p>GitHub</p>
                            <img src="/icons/brands/github.png" alt="github link" />
                        </a>
                    </Link>

                    {/* <Link href="">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkContainer}
          >
            <p>Coming Soon!</p>
            <img src="/icons/brands/medium.png" alt="medium link" />
          </a>
        </Link> */}

                    <Link href={mailtoLink}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkContainer}
                        >
                            <p>Email</p>
                            <img src="/icons/brands/email.png" alt="mailto link" />
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

                    <ConditionalRenderer><div className={styles.bannerShadow} /></ConditionalRenderer>
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

                <ConditionalRenderer><div className={styles.bottomGradient} /></ConditionalRenderer>
            </header>
        </ConditionalRendererProvider>
    );
};

export default Header;
