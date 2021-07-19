import { useRouter } from 'next/router';

import Button from 'components/Button';

import styles from './CaseStudyCard.module.scss';

export interface CaseStudyCardProps {
    title: string,
    subtitle: string,
    description: string,
    imageSrc: string,
    imageAlt: string
    link: string
}

const CaseStudyCard = ({
    title, subtitle, description,
    imageSrc, imageAlt, link
}: CaseStudyCardProps): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <img src={imageSrc} alt={imageAlt} />
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
