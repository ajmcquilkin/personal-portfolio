import Head from "next/head";
import { useRouter } from "next/router";

import Button from "components/Button";
import StoryContent from "components/layout/StoryContent";

import { HEAD_TITLE_BASE, mailtoLink } from "utils";
import { StoryMeta } from "types";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import styles from "./Story.module.scss";

export interface StoryProps {
    meta: StoryMeta;
    content: string;
    path: string;
}

const Story = ({
    meta: {
        title,
        subtitle,
        description,
        descriptionLong,
        partners,
        roles,
        team,
        timeline,
        languages,
        link,
        linkText,
        featuredImage,
        featuredImageAlt,
    },
    content,
}: StoryProps): JSX.Element => {
    const router = useRouter();

    return (
        <main className={styles.container}>
            <Head>
                <title>
                    {title} - {HEAD_TITLE_BASE}
                </title>
            </Head>
            <article>
                <Header
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    colorMode="dark"
                    hideSocials
                >
                    {link && (
                        <Button
                            size="large"
                            onClick={() => window.open(link, "_blank")}
                            className="headerButton"
                            colorMode="dark"
                        >
                            {linkText ?? "view project"}
                        </Button>
                    )}

                    <Button
                        onClick={() => router.push(mailtoLink)}
                        className="headerButton"
                        colorMode="dark"
                    >
                        contact me
                    </Button>
                </Header>

                <section className={styles.overviewContainer}>
                    <h2>Project Overview</h2>
                    <div className={styles.overviewFlexContainer}>
                        {descriptionLong && (
                            <div className={styles.overviewLeft}>
                                <h3>description</h3>
                                <div>
                                    {descriptionLong.map((d) => (
                                        <p key={d}>{d}</p>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className={styles.overviewRight}>
                            {partners && (
                                <div className={styles.overviewRightList}>
                                    <h3>partners</h3>
                                    <ul>
                                        {partners.map((p) => (
                                            <li key={p}>{p}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {roles && (
                                <div className={styles.overviewRightList}>
                                    <h3>role</h3>
                                    <ul>
                                        {roles.map((r) => (
                                            <li key={r}>{r}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {team && (
                                <div className={styles.overviewRightList}>
                                    <h3>team</h3>
                                    <ul>
                                        {team.map((t) => (
                                            <li key={t}>{t}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {timeline && (
                                <div className={styles.overviewRightList}>
                                    <h3>timeline</h3>
                                    <p>{timeline}</p>
                                </div>
                            )}

                            {languages && (
                                <div className={styles.overviewRightList}>
                                    <h3>languages</h3>
                                    <p>{languages}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section>
                    <StoryContent>{content}</StoryContent>
                </section>

                <Footer />
            </article>
        </main>
    );
};
export default Story;
