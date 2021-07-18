import Image from 'next/image';
import { useRouter } from 'next/router';

import ArrowBox from 'components/ArrowBox';
import Button from 'components/Button';

import Menu from 'components/layout/Menu';
import StoryContent from 'components/layout/StoryContent';

import { mailtoLink } from 'utils';
import { StoryMeta } from 'types';

import styles from './Story.module.scss';

export interface StoryProps {
  meta: StoryMeta,
  content: string
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
        <header className={styles.headerContainer}>
          <img className={styles.signature} src="/logo-white.svg" alt="" />
          <Menu colorMode="dark" className={styles.menuContainer} />

          <div className={styles.headerFlexContainer}>
            <div className={styles.headerContentContainer}>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <p className={styles.content}>{description}</p>

              <div className={styles.buttonContainer}>
                <Button
                  colorMode="dark"
                  className={styles.contentButton}
                  onClick={() => router.push(link)}
                >
                  view site
                </Button>

                <Button
                  colorMode="dark"
                  className={styles.contentButton}
                  onClick={() => router.push(mailtoLink)}
                >
                  contact me
                </Button>
              </div>
            </div>

            <div className={styles.featuredImageContainer}>
              <Image
                src={featuredImage}
                alt={featuredImageAlt}
                width={600}
                height={400}
                layout="intrinsic"
                objectFit="contain"
              />
            </div>
          </div>

          <ArrowBox colorMode="dark" className={styles.arrowBox} />
        </header>

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
      </article>
    </main>
  );
};
export default Story;
