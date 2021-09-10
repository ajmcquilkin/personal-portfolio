import { useRouter } from 'next/router';

import Button from 'components/Button';
import TextSection, { TextSectionCTA } from 'components/TextSection';

import { ColorMode } from 'types';
import { mailtoLink, resumeFileName } from 'utils';

import styles from './FooterInner.module.scss';

export interface FooterInnerProps {
    colorMode?: ColorMode,
    className?: string
}

const FooterInner = ({ colorMode = 'light', className = '' }: FooterInnerProps): JSX.Element => {
    const router = useRouter();

    return (
        <div className={[styles.container, className].join(' ')}>
            <img
                src={`/logo-${colorMode === 'light' ? 'white' : 'dark'}.svg`}
                alt="adam mcquilkin personal logo"
                className={styles.logo}
            />

            <TextSection
                title="contact me"
                subtitle="Thanks for stopping by!"
                context="reach out"
                colorMode={colorMode}
                className={styles.textContainer}
            >
                <TextSectionCTA className={styles.buttonContainer}>
                    <Button
                        colorMode={colorMode}
                        onClick={() => router.push(mailtoLink)}
                        className={styles.button}
                    >
                        contact me
                    </Button>

                    <Button
                        colorMode={colorMode}
                        onClick={() => router.push(resumeFileName)}
                        className={styles.button}
                    >
                        download resume
                    </Button>
                </TextSectionCTA>
            </TextSection>
        </div>
    );
};

export default FooterInner;
