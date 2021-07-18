import Image from 'next/image';
import { useRouter } from 'next/router';

import ArrowBox from 'components/ArrowBox';
import Button from 'components/Button';

import Menu from 'components/layout/Menu';
import StoryContent from 'components/layout/StoryContent';

import { mailtoLink, resumeFileName } from 'utils';
import { StoryMeta } from 'types';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import styles from './Story.module.scss';

export interface StoryProps {
    meta: StoryMeta,
    content: string,
    path: string
}

const Story = ({
    meta: {
        title, subtitle, description,
        descriptionLong, roles, team, timeline, languages,
        link, featuredImage, featuredImageAlt
    }, content
}: StoryProps): JSX.Element => {
    const router = useRouter();

    return (
        <main className={styles.container}>
            <article>
                <Header
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    colorMode="dark"
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

                <section className={styles.overviewContainer}>
                    <h2>Project Overview</h2>
                    <div className={styles.overviewFlexContainer}>
                        <div className={styles.overviewLeft}>
                            <h3>description</h3>
                            <div>{descriptionLong.map((d) => <p key={d}>{d}</p>)}</div>
                        </div>

                        <div className={styles.overviewRight}>
                            <div className={styles.overviewRightList}>
                                <h3>role</h3>
                                <ul>{roles.map((r) => <li key={r}>{r}</li>)}</ul>
                            </div>

                            <div className={styles.overviewRightList}>
                                <h3>team</h3>
                                <ul>{team.map((t) => <li key={t}>{t}</li>)}</ul>
                            </div>

                            <div className={styles.overviewRightList}>
                                <h3>timeline</h3>
                                <p>{timeline}</p>
                            </div>

                            <div className={styles.overviewRightList}>
                                <h3>languages</h3>
                                <p>{languages}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section><StoryContent>{content}</StoryContent></section>

                <Footer />
            </article>
        </main>
    );
};
export default Story;
