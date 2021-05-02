import { useRouter } from 'next/router';

import Button from 'components/Button';
import ProtectedImage from 'components/image/ProtectedImage';
import TextSection, { TextSectionCTA } from 'components/TextSection';

import { mailtoLink, resumeFileName } from 'utils';

import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  const router = useRouter();

  return (
    <footer className={styles.container}>
      <ProtectedImage
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc"
        alt="test mountain image"
        objectFit="cover"
      />

      <div className={styles.topGradient} />
      <div className={styles.bottomGradient} />

      <div className={styles.contentContainer}>
        <img
          src="/logo-white.svg"
          alt="adam mcquilkin personal logo"
          className={styles.logo}
        />

        <TextSection
          title="contact me"
          subtitle="Thanks for stopping by! Always feel free to drop a line if you want to chat :)"
          context="reach out"
          colorMode="light"
          className={styles.textContainer}
        >
          <TextSectionCTA className={styles.buttonContainer}>
            <Button
              colorMode="light"
              onClick={() => router.push(mailtoLink)}
              className={styles.button}
            >
              contact me
            </Button>

            <Button
              colorMode="light"
              onClick={() => router.push(resumeFileName)}
              className={styles.button}
            >
              download resume
            </Button>
          </TextSectionCTA>
        </TextSection>
      </div>
    </footer>
  );
};

export default Footer;
