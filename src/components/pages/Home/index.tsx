import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from 'components/Button';
import TextSection, { TextSectionCTA, TextSectionParagraph } from 'components/TextSection';

import Carousel from 'components/carousel/Carousel';
import CarouselSelector from 'components/carousel/CarouselSelector';
import ProtectedImage from 'components/image/ProtectedImage';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import HomeInformationCard from 'components/layout/HomeInformationCard';

import { mailtoLink, resumeFileName } from 'utils';
import {
  ProjectFrameworksArray, ProjectLanguagesArray, ProjectTagsArray,
  AllProjectTags
} from 'types/projects';

import styles from './Home.module.scss';

import { HomeAchievementsCardContent, HomeExperienceCardContent, HomeSkillsCardContent } from './homeCardInformation';
import { HomePassionsImages } from './homeFeaturedImages';
import { HomeFeaturedProjects } from './homeFeaturedProjects';
import { ProjectsArray } from './projects';

const Home = (): JSX.Element => {
  const router = useRouter();

  const [featuredProject, setFeaturedProject] = useState(0);
  const [passionsImage, setPassionsImage] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState(ProjectsArray);
  const [selectedTags, setSelectedTags] = useState(new Set());

  const handleTagSelect = (tag: AllProjectTags, selected: boolean) => {
    const updatedState = new Set(selectedTags);
    if (selected) updatedState.add(tag);
    else updatedState.delete(tag);
    setSelectedTags(updatedState);
  };

  const handleFilterProjects = () => {
    if (selectedTags.size) setFilteredProjects(ProjectsArray.filter((project) => !!project.tags?.some((tag) => selectedTags.has(tag))));
    else setFilteredProjects(ProjectsArray);
  };

  return (
    <div className={styles.container}>
      <Header
        title="Adam McQuilkin"
        subtitle="Developer, Product Designer"
        description="A passionate Dartmouth College computer science and design student, specializing in web and application development."
        src="/v1618616789/Personal%20Portfolio/DSC_8321_crop_dlipoe.jpg"
        alt="Utah road at sunset with travelling cars"
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
        {/* Personal Background Section */}

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

        {/* Featured Projects Section */}

        <section className={[styles.flexSection, styles.featuredProjectContainer].join(' ')}>
          <div className={styles.featuredProjectImageContainer}>
            <Carousel
              position={featuredProject}
              className={styles.featuredProjectImageCarousel}
            >
              {HomeFeaturedProjects.map(({ featuredImageSrc, featuredImageAlt, caption }) => (
                <>
                  <div className={styles.featuredProjectImage}>
                    <Image
                      src={featuredImageSrc}
                      alt={featuredImageAlt}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p>{caption}</p>
                </>
              ))}
            </Carousel>
          </div>

          <div className={styles.featuredProjectContentContainer}>
            <Carousel position={featuredProject}>
              {HomeFeaturedProjects.map(({
                title, subtitle, context,
                description, storyUrl
              }) => (
                <TextSection
                  title={title}
                  subtitle={subtitle}
                  context={context}
                  className={styles.featuredProjectContent}
                  key={title}
                >
                  <TextSectionParagraph>{description}</TextSectionParagraph>

                  <TextSectionCTA>
                    <Button colorMode="dark" onClick={() => router.push(storyUrl || '/story')}>
                      learn more
                    </Button>
                  </TextSectionCTA>
                </TextSection>
              ))}
            </Carousel>

            <CarouselSelector
              numOptions={HomeFeaturedProjects.length}
              currentPos={featuredProject}
              onSelect={(idx) => setFeaturedProject(idx)}
            />
          </div>
        </section>

        {/* Personal Passions Section */}

        <section className={[styles.flexSection, styles.passionsContainer].join(' ')}>
          <div className={styles.passionsImageContainer}>
            <Carousel position={passionsImage} className={styles.passionsImageCarousel}>
              {HomePassionsImages.map(({ src, alt }) => (
                <div className={styles.passionsImage} key={src}>
                  <ProtectedImage
                    src={src}
                    alt={alt}
                    objectFit="cover"
                  />
                </div>
              ))}
            </Carousel>

            <CarouselSelector
              numOptions={HomePassionsImages.length}
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

        {/* Resume Section */}

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

        {/* Past Projects Container */}

        <section className={styles.projectsContainer}>
          <div className={[styles.flexSection, styles.projectsIntroContainer].join(' ')}>
            <div className={styles.projectsIntroImageContainer}>
              <div className={styles.projectsIntroImage}>
                <ProtectedImage
                  src="/v1619975016/Personal%20Portfolio/DSC_9251_fapzdo.jpg"
                  alt="image alt text"
                  objectFit="cover"
                />
              </div>
            </div>

            <TextSection
              title="my projects"
              subtitle="Explore my professional experiences by topic, or view all of my stories below"
              context="my work"
              colorMode="light"
              className={styles.projectsIntroText}
            >
              <div className={styles.projectsIntroTagsContainer}>
                <p className={styles.projectsIntroTagLabel}>tags</p>
                <div className={styles.projectIntroButtonList}>
                  {ProjectTagsArray.map((tag) => {
                    const isSelected = selectedTags.has(tag);
                    return (
                      <button
                        type="button"
                        onClick={() => handleTagSelect(tag, !isSelected)}
                        className={[styles.projectIntroButton, isSelected ? styles.selected : ''].join(' ')}
                        key={tag}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.projectsIntroTagsContainer}>
                <p className={styles.projectsIntroTagLabel}>languages</p>
                <div className={styles.projectIntroButtonList}>
                  {ProjectLanguagesArray.map((language) => {
                    const isSelected = selectedTags.has(language);
                    return (
                      <button
                        type="button"
                        onClick={() => handleTagSelect(language, !isSelected)}
                        className={[styles.projectIntroButton, isSelected ? styles.selected : ''].join(' ')}
                        key={language}
                      >
                        {language}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.projectsIntroTagsContainer}>
                <p className={styles.projectsIntroTagLabel}>frameworks</p>
                <div className={styles.projectIntroButtonList}>
                  {ProjectFrameworksArray.map((framework) => {
                    const isSelected = selectedTags.has(framework);
                    return (
                      <button
                        type="button"
                        onClick={() => handleTagSelect(framework, !isSelected)}
                        className={[styles.projectIntroButton, isSelected ? styles.selected : ''].join(' ')}
                        key={framework}
                      >
                        {framework}
                      </button>
                    );
                  })}
                </div>
              </div>

              <TextSectionCTA>
                <Button colorMode="light" onClick={handleFilterProjects}>
                  find projects
                </Button>
              </TextSectionCTA>
            </TextSection>
          </div>

          <div className={styles.projectsListContainer}>
            {filteredProjects.map(({
              title, subtitle, context, description,
              featuredImageSrc, featuredImageAlt, featuredLogoSrc, featuredLogoAlt,
              backgroundStyling, storyUrl
            }, idx) => (
              <div style={{ background: backgroundStyling }} className={[styles.flexSection, styles.projectContainer, idx % 2 ? styles.inverted : ''].join(' ')} key={title}>
                <div className={styles.projectFeaturedImage}><img src={featuredImageSrc} alt={featuredImageAlt} /></div>

                <div className={styles.projectContentContainer}>
                  <img className={styles.projectIcon} src={featuredLogoSrc} alt={featuredLogoAlt} />

                  <TextSection
                    title={title}
                    subtitle={subtitle}
                    context={context}
                    colorMode="light"
                  >
                    <TextSectionParagraph>
                      {description}
                    </TextSectionParagraph>

                    <TextSectionCTA>
                      <Button colorMode="light" onClick={() => router.push(storyUrl || '/story')}>
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
