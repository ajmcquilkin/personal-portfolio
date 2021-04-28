import { useRouter } from 'next/router';

import TextSection, { TextSectionCTA, TextSectionParagraph } from 'components/TextSection';

import Button from 'components/Button';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import { mailtoLink, resumeFileName } from 'utils';

import CarouselSelector from 'components/CarouselSelector';
import { useState } from 'react';
import HomeInformationCard from 'components/layout/HomeInformationCard';
import { ProjectFrameworksArray, ProjectLanguagesArray, ProjectTagsArray } from 'types/projects';
import styles from './Home.module.scss';
import { HomeAchievementsCardContent, HomeExperienceCardContent, HomeSkillsCardContent } from './homeCardInformation';

const Home = (): JSX.Element => {
  const router = useRouter();

  const [featuredProject, setFeaturedProject] = useState(0);
  const [passionsImage, setPassionsImage] = useState(0);

  return (
    <div className={styles.container}>
      <Header
        title="Adam McQuilkin"
        subtitle="Developer, Product Designer"
        description="A passionate Dartmouth College computer science and design student, specializing in web and application development."
        src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602538908/Personal%20Portfolio/home_feature_2_crop_yeg97j.jpg"
        alt="Montana mountains"
      >
        <Button
          onClick={() => router.push(mailtoLink)}
          className="headerButton"
        >
          contact me
        </Button>

        <Button
          size="large"
          onClick={() => router.push(resumeFileName)}
          className="headerButton"
        >
          download resume
        </Button>
      </Header>

      <main className={styles.mainContainer}>
        <section className={[styles.flexSection, styles.backgroundContainer].join(' ')}>
          <div className={styles.backgroundLine} />

          <div className={styles.backgroundTilesContainer}>
            <div className={styles.backgroundTile}>
              <div className={styles.backgroundTileHeader}>
                <h3>education</h3>
                <p>see more</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim nascetur ultrices massa blandit.</p>
            </div>

            <div className={styles.backgroundTile}>
              <div className={styles.backgroundTileHeader}>
                <h3>work</h3>
                <p>see more</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim nascetur ultrices massa blandit.</p>
            </div>

            <div className={styles.backgroundTile}>
              <div className={styles.backgroundTileHeader}>
                <h3>achievements</h3>
                <p>see more</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim nascetur ultrices massa blandit.</p>
            </div>
          </div>

          <TextSection
            title="my background"
            subtitle="Currently working at Microsoft as a Software Engineering Intern on the Power BI team"
            context="about me"
            colorMode="light"
            className={styles.backgroundTextContainer}
          >
            <TextSectionParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim nascetur
              ultrices massa blandit. Odio tincidunt imperdiet suspendisse venenatis diam ac faucibus. Urna, nullam tincidunt
              pretium viverra pretium pulvinar. Rhoncus imperdiet ut imperdiet id. Erat tellus molestie vitae sed ac orci
              scelerisque interdum sit.
            </TextSectionParagraph>

            <TextSectionCTA>
              <Button colorMode="light" onClick={() => router.push('/about')}>
                more about me
              </Button>
            </TextSectionCTA>
          </TextSection>
        </section>

        <section className={[styles.flexSection, styles.featuredProjectContainer].join(' ')}>
          <div className={styles.featuredProjectImage}>
            <div>image container</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim.</p>
          </div>

          <div className={styles.featuredProjectContent}>
            <TextSection
              title="ICID: USPTO 9,632,952"
              subtitle="Physical USB Human Interface Device (HID)-class signal interceptor and repeater "
              context="personal project"
              className={styles.featuredProjectContent}
            >
              <TextSectionParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim nascetur
                ultrices massa blandit. Odio tincidunt imperdiet suspendisse venenatis diam ac faucibus. Urna, nullam tincidunt
                pretium viverra pretium pulvinar. Rhoncus imperdiet ut imperdiet id. Erat tellus molestie vitae sed ac orci
                scelerisque interdum sit.
              </TextSectionParagraph>

              <TextSectionCTA>
                <Button colorMode="dark" onClick={() => router.push('/about')}>
                  more about me
                </Button>
              </TextSectionCTA>
            </TextSection>

            <CarouselSelector
              numOptions={3}
              currentPos={featuredProject}
              onSelect={(idx) => setFeaturedProject(idx)}
            />
          </div>
        </section>

        <section className={[styles.flexSection, styles.passionsContainer].join(' ')}>
          <div className={styles.passionsImage}>
            <div>image container</div>
            <CarouselSelector
              numOptions={3}
              currentPos={passionsImage}
              onSelect={(idx) => setPassionsImage(idx)}
              colorMode="light"
              className={styles.passionsImageSelector}
            />
          </div>

          <TextSection
            title="my passions"
            subtitle="I’m a part time professional phographer, specializing in landscapes and adventures"
            context="about me"
            colorMode="light"
            className={styles.passionsContent}
          >
            <TextSectionParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim nascetur
              ultrices massa blandit. Odio tincidunt imperdiet suspendisse venenatis diam ac faucibus. Urna, nullam tincidunt
              pretium viverra pretium pulvinar. Rhoncus imperdiet ut imperdiet id. Erat tellus molestie vitae sed ac orci
              scelerisque interdum sit.
            </TextSectionParagraph>

            <TextSectionCTA>
              <Button colorMode="light" onClick={() => router.push('/about')}>
                more about me
              </Button>
            </TextSectionCTA>
          </TextSection>
        </section>

        <section className={styles.resumeContainer}>
          <div className={[styles.flexSection, styles.resumeExperienceContainer].join(' ')}>
            <TextSection
              title="my experience"
              subtitle="I’m a part time professional phographer, specializing in landscapes and adventures"
              context="resume"
              colorMode="light"
              className={styles.resumeExperienceText}
            >
              <TextSectionParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim nascetur
                ultrices massa blandit. Odio tincidunt imperdiet suspendisse venenatis diam ac faucibus. Urna, nullam tincidunt
                pretium viverra pretium pulvinar. Rhoncus imperdiet ut imperdiet id. Erat tellus molestie vitae sed ac orci
                scelerisque interdum sit.
              </TextSectionParagraph>

              <TextSectionCTA>
                <Button colorMode="light" onClick={() => router.push('/about')}>
                  more about me
                </Button>
              </TextSectionCTA>
            </TextSection>

            <HomeInformationCard
              title="experience"
              rightText="what I've done"
              content={HomeExperienceCardContent}
              className={styles.resumeExperienceContent}
            />
          </div>

          <div className={[styles.flexSection, styles.resumeAchievementsContainer].join(' ')}>
            <HomeInformationCard
              title="acheivements"
              rightText="what I've earned"
              content={HomeAchievementsCardContent}
              className={styles.resumeAchievementsContent}
            />

            <TextSection
              title="my achievements"
              subtitle="I’m a part time professional phographer, specializing in landscapes and adventures"
              context="resume"
              colorMode="light"
              className={styles.resumeAchievementsText}
            >
              <TextSectionParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim nascetur
                ultrices massa blandit. Odio tincidunt imperdiet suspendisse venenatis diam ac faucibus. Urna, nullam tincidunt
                pretium viverra pretium pulvinar. Rhoncus imperdiet ut imperdiet id. Erat tellus molestie vitae sed ac orci
                scelerisque interdum sit.
              </TextSectionParagraph>

              <TextSectionCTA>
                <Button colorMode="light" onClick={() => router.push('/about')}>
                  more about me
                </Button>
              </TextSectionCTA>
            </TextSection>
          </div>

          <div className={[styles.flexSection, styles.resumeSkillsContainer].join(' ')}>
            <TextSection
              title="my skills"
              subtitle="I’m a part time professional phographer, specializing in landscapes and adventures"
              context="resume"
              colorMode="light"
              className={styles.resumeSkillsText}
            >
              <TextSectionParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim nascetur
                ultrices massa blandit. Odio tincidunt imperdiet suspendisse venenatis diam ac faucibus. Urna, nullam tincidunt
                pretium viverra pretium pulvinar. Rhoncus imperdiet ut imperdiet id. Erat tellus molestie vitae sed ac orci
                scelerisque interdum sit.
              </TextSectionParagraph>

              <TextSectionCTA>
                <Button colorMode="light" onClick={() => router.push('/about')}>
                  more about me
                </Button>
              </TextSectionCTA>
            </TextSection>

            <HomeInformationCard
              title="skills"
              rightText="what I've learned"
              content={HomeSkillsCardContent}
              className={styles.resumeSkillsContent}
            />
          </div>
        </section>

        <section className={styles.projectsContainer}>
          <div className={[styles.flexSection, styles.projectsIntroContainer].join(' ')}>
            <div className={styles.projectsIntroImage}>image</div>

            <TextSection
              title="my projects"
              subtitle="Explore my professional experiences by topic, or view all of my stories below"
              context="my work"
              colorMode="light"
              className={styles.projectIntroText}
            >
              <div className={styles.projectsIntroTagsContainer}>
                <p className={styles.projectsIntroTagLabel}>tags</p>
                <div className={styles.projectIntroButtonList}>
                  {ProjectTagsArray.map((tag) => (
                    <div className={styles.projectIntroButton} key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.projectsIntroTagsContainer}>
                <p className={styles.projectsIntroTagLabel}>languages</p>
                <div className={styles.projectIntroButtonList}>
                  {ProjectLanguagesArray.map((language) => (
                    <div className={styles.projectIntroButton} key={language}>
                      {language}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.projectsIntroTagsContainer}>
                <p className={styles.projectsIntroTagLabel}>frameworks</p>
                <div className={styles.projectIntroButtonList}>
                  {ProjectFrameworksArray.map((framework) => (
                    <div className={styles.projectIntroButton} key={framework}>
                      {framework}
                    </div>
                  ))}
                </div>
              </div>

              <TextSectionCTA>
                <Button colorMode="light" onClick={() => router.push('/about')}>
                  find projects
                </Button>
              </TextSectionCTA>
            </TextSection>
          </div>

          <div className={styles.projectsListContainer}>
            {[{
              title: 'D-Planner, LLC',
              subtitle: 'Entrepreneurship',
              context: 'Co-founder, Project Designer, Developer',
              description:
                `Academic planning is difficult for students, especially when information 
              is fragmented and hard to find. D-Planner is a better way of planning out your time at college. 
              Winner of the 2018 DALI Pitch Competition.`,
              imageUrl: 'https://www.google.com/logos/doodles/2021/anne-mclarens-94th-birthday-6753651837108913.5-l.png'
            },
            {
              title: 'D-Planner, LLC',
              subtitle: 'Entrepreneurship',
              context: 'Co-founder, Project Designer, Developer',
              description:
                `Academic planning is difficult for students, especially when information 
              is fragmented and hard to find. D-Planner is a better way of planning out your time at college. 
              Winner of the 2018 DALI Pitch Competition.`,
              imageUrl: 'https://www.google.com/logos/doodles/2021/anne-mclarens-94th-birthday-6753651837108913.5-l.png'
            },
            {
              title: 'D-Planner, LLC',
              subtitle: 'Entrepreneurship',
              context: 'Co-founder, Project Designer, Developer',
              description:
                `Academic planning is difficult for students, especially when information 
              is fragmented and hard to find. D-Planner is a better way of planning out your time at college. 
              Winner of the 2018 DALI Pitch Competition.`,
              imageUrl: 'https://www.google.com/logos/doodles/2021/anne-mclarens-94th-birthday-6753651837108913.5-l.png'
            }
            ].map(({
              title, subtitle, context,
              description, imageUrl
            }, idx) => (
              <div className={[styles.flexSection, styles.projectContainer, idx % 2 ? styles.inverted : ''].join(' ')} key={title}>
                <div className={styles.projectFeaturedImage}><img src={imageUrl} alt="" /></div>

                <div className={styles.projectContentContainer}>
                  <div>logo</div>
                  <TextSection
                    title={title}
                    subtitle={subtitle}
                    context={context}
                  >
                    <TextSectionParagraph>
                      {description}
                    </TextSectionParagraph>

                    <TextSectionCTA>
                      <Button colorMode="dark" onClick={() => router.push('/about')}>
                        read more
                      </Button>
                    </TextSectionCTA>
                  </TextSection>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
