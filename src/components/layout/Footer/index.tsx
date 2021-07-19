import ProtectedImage from 'components/image/ProtectedImage';
import FooterInner from 'components/layout/FooterInner';

import styles from './Footer.module.scss';

const Footer = (): JSX.Element => (
    <footer className={styles.container}>
        <ProtectedImage
            src="/v1602266186/Personal%20Portfolio/gallery/franc_2_qtcjjv.jpg"
            alt="test mountain image"
            objectFit="cover"
        />

        <div className={styles.topGradient} />
        <div className={styles.bottomGradient} />

        <div className={styles.contentContainer}><FooterInner /></div>
    </footer>
);

export default Footer;
