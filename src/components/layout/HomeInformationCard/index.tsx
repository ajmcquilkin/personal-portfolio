import { HomeInformationCardEntry } from 'types/cards';
import styles from './HomeInformationCard.module.scss';

export interface HomeInformationCardProps {
  title: string,
  rightText: string,
  content: HomeInformationCardEntry[],
  className?: string
}

const HomeInformationCard = ({
    title, rightText, content,
    className = ''
}: HomeInformationCardProps): JSX.Element => (
    <div className={[styles.container, className].join(' ')}>
        <div className={styles.header}>
            <h3>{title}</h3>
            <p>{rightText}</p>
        </div>

        <div className={styles.content}>
            <div className={styles.sideLine} />

            <div className={styles.entriesContainer}>
                {content.map((element) => (
                    <div className={styles.entry} key={title}>
                        <div className={styles.entryDot} />

                        <div className={styles.entryHeader}>
                            <h4>{element.title}</h4>
                            <p>{element.rightText}</p>
                        </div>

                        <p className={styles.subtitle}>{element.subtitle}</p>

                        <p className={styles.entryDescription}>{element.description}</p>

                        <div className={styles.addlLinesContainer}>
                            {element.addlLines.map((line) => (
                                <div className={styles.addlLine} key={line.label}>
                                    <p className={styles.label}>
                                        {line.label}
                                        :
                                    </p>
                                    <p>{line.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default HomeInformationCard;
