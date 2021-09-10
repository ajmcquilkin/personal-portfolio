import { useRouter } from 'next/router';

import Button from 'components/Button';
import { ColorMode } from 'types';

import styles from './CaseStudyCard.module.scss';

const IMAGE_LOCATION = '/icons';
const DARK_MODIFIER = '-dark';
const IMAGE_FORMAT = '.svg';

export interface CaseStudyCardProps {
    title: string,
    subtitle: string,
    description: string,
    link: string

    colorMode?: ColorMode,
    imageSrc?: string,
    imageAlt?: string
}

const CaseStudyCard = ({
    title, subtitle, description, link,
    colorMode = 'dark', imageSrc = 'git', imageAlt = 'git logo'
}: CaseStudyCardProps): JSX.Element => {
    const router = useRouter();

    const imageLocation = `${IMAGE_LOCATION}/${imageSrc}${colorMode === 'dark' ? DARK_MODIFIER : ''}${IMAGE_FORMAT}`;

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <img src={imageLocation} alt={imageAlt} />
                <div className={styles.titleContainer}>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
            </div>

            <p className={styles.content}>{description}</p>
            <Button colorMode="dark" onClick={() => router.push(link)}>read more</Button>
        </div>
    );
};

export default CaseStudyCard;
