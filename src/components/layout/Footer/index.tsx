import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from 'components/Button';
import { mailtoLink, resumeFileName } from 'utils';

import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  const router = useRouter();

  return (
    <footer className={styles.container}>
      <div className={styles.backgroundImageContainer}>
        <div className={styles.backgroundImageOpacity} />
        <Image
          src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1618620573/Personal%20Portfolio/DSC_8692_a24ay8.jpg"
          alt="Footer background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.contentContainer}>
        <h2>Want to chat? Let me know!</h2>

        <div className={styles.buttonContainer}>
          <Button
            onClick={() => router.push(mailtoLink)}
            className={styles.button}
          >
            contact me
          </Button>

          <Button
            size="large"
            onClick={() => router.push(resumeFileName)}
            className={styles.button}
          >
            download resume
          </Button>
        </div>
      </div>

      <div className={styles.textContainer}>
        <p>designed and coded with love</p>
        <p>•</p>
        <p>
          © Adam McQuilkin,
          {' '}
          {new Date().getFullYear()}
        </p>
      </div>

      <div className={styles.bottomGradient} />
    </footer>
  );
};

export default Footer;
