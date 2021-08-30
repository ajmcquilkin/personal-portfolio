import { useRouter } from 'next/router';

import Button from 'components/Button';
import CaseStudyCard from 'components/CaseStudyCard';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import { StoryProps } from 'components/pages/Story';

import { mailtoLink, resumeFileName } from 'utils';

import styles from './Stories.module.scss';

export interface StoriesProps {
    stories: StoryProps[]
}

const Stories = ({ stories }: StoriesProps): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Header
                title="My Stories"
                subtitle="Case Studies I’m Proud Of"
                description="Sed dolor sed pellentesque sem ullamcorper venenatis. Diam in commodo vel sed a blandit sed hac imperdiet. Fermentum."
                colorMode="dark"
                hideSocials
            >
                <Button
                    onClick={() => router.push(mailtoLink)}
                    className="headerButton"
                    colorMode="dark"
                >
                    contact me
                </Button>

                <Button
                    size="large"
                    onClick={() => router.push(resumeFileName)}
                    className="headerButton"
                    colorMode="dark"
                >
                    download resume
                </Button>
            </Header>

            <main className={styles.mainContainer}>
                <h2>Case Studies</h2>
                <hr />
                <div className={styles.storiesListContainer}>
                    {stories.map(({ meta: { title, subtitle, description }, path }) => (
                        <div key={path}>
                            <CaseStudyCard
                                title={title}
                                subtitle={subtitle}
                                description={description}
                                imageSrc="/icons/dartmouth-dark.svg"
                                imageAlt=""
                                link={path}
                            />
                        </div>
                    ))}

                </div>
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
};

export default Stories;
