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
// import {
//     ProjectFrameworksArray, ProjectLanguagesArray, ProjectTagsArray,
//     AllProjectTags
// } from 'types/projects';

import styles from './Home.module.scss';

import { HomeAchievementsCardContent, HomeExperienceCardContent, HomeSkillsCardContent } from './homeCardInformation';
import { HomePassionsImages } from './homeFeaturedImages';
import { HomeFeaturedProjects } from './homeFeaturedProjects';
// import { ProjectsArray } from './projects';

const Home = (): JSX.Element => {
    const router = useRouter();

    const [featuredProject, setFeaturedProject] = useState(0);
    const [passionsImage, setPassionsImage] = useState(0);
    // const [filteredProjects, setFilteredProjects] = useState(ProjectsArray);
    // const [selectedTags, setSelectedTags] = useState(new Set());

    // const handleTagSelect = (tag: AllProjectTags, selected: boolean) => {
    //     const updatedState = new Set(selectedTags);
    //     if (selected) updatedState.add(tag);
    //     else updatedState.delete(tag);
    //     setSelectedTags(updatedState);
    // };

    // const handleFilterProjects = () => {
    //     if (selectedTags.size) setFilteredProjects(ProjectsArray.filter((project) => !!project.tags?.some((tag) => selectedTags.has(tag))));
    //     else setFilteredProjects(ProjectsArray);
    // };

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
                    <div className={styles.backgroundWidthContainer}>
                        {/* <div className={styles.backgroundLine} /> */}

                        <TextSection
                            title="my background"
                            subtitle="Computer Science and Engineering Student at Dartmouth College."
                            context="about me"
                            colorMode="light"
                            className={styles.backgroundTextContainer}
                        >
                            <TextSectionParagraph>
                                I have a varied background in computer science, engineering, and product design, with both industry and theoretical experience.
                                I&apos;m passionate about creating immersive user experiences in everything I do, and I believe this shows in my work.
                                I&apos;ve compiled a summary of what I&apos;ve done, what I&apos;ve earned, and what I can do.
                            </TextSectionParagraph>

                            {/* <TextSectionCTA>
                                <Button colorMode="light" onClick={() => router.push('/about')}>
                                    more about me
                                </Button>
                            </TextSectionCTA> */}
                        </TextSection>

                        <div className={styles.backgroundTilesContainer}>
                            <div className={styles.backgroundTile}>
                                <div className={styles.backgroundTileHeader}>
                                    <h3>experience</h3>
                                    <a href="#experience">see more</a>
                                </div>
                                <p>A summary of my work experience, including both personal projects and professional roles.</p>
                            </div>

                            <div className={styles.backgroundTile}>
                                <div className={styles.backgroundTileHeader}>
                                    <h3>achievements</h3>
                                    <a href="#achievements">see more</a>
                                </div>
                                <p>Accolades that I&apos;ve earned from exceptional work and personal endeavors.</p>
                            </div>

                            <div className={styles.backgroundTile}>
                                <div className={styles.backgroundTileHeader}>
                                    <h3>skills</h3>
                                    <a href="#skills">see more</a>
                                </div>
                                <p>Relevant skills that I&apos;ve learned during my work and personal research.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects Section */}

                <section className={[styles.flexSection, styles.featuredProjectContainer].join(' ')}>
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

                    <div className={styles.featuredProjectImageContainer}>
                        <Carousel
                            position={featuredProject}
                            className={styles.featuredProjectImageCarousel}
                        >
                            {HomeFeaturedProjects.map(({ featuredImageSrc, featuredImageAlt, caption }) => (
                                <>
                                    <div className={styles.featuredProjectImage}>
                                        <ProtectedImage
                                            src={featuredImageSrc}
                                            alt={featuredImageAlt}
                                            objectFit="contain"
                                        />
                                    </div>
                                    <p>{caption}</p>
                                </>
                            ))}
                        </Carousel>
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

                    <div className={styles.passionsContent}>
                        <TextSection
                            title="my passions"
                            subtitle="Part-time professional phographer, specializing landscape and travel."
                            context="about me"
                            colorMode="light"
                            className={styles.passionsText}
                        >
                            <TextSectionParagraph>
                                When I&apos;m not working or studying, you can often find me enjoying the great oudoors. I love to hike and mountain
                                bike, and I dabble in landscape and adventure photography. I also enjoy tinkering with electronics and 3D printing.
                                I&apos;ve compiled a few photos from my adventures here!
                            </TextSectionParagraph>

                            {/*
                            <TextSectionCTA>
                                <Button colorMode="light" onClick={() => router.push('/about')}>
                                    more about me
                                </Button>
                            </TextSectionCTA> */}
                        </TextSection>
                    </div>
                </section>

                {/* Resume Section */}

                <section className={styles.resumeContainer}>
                    <div className={[styles.resumeSection, styles.resumeExperienceContainer].join(' ')}>
                        <div id="experience" />

                        <TextSection
                            title="my experience"
                            subtitle="My employments and personal projects."
                            context="resume"
                            colorMode="light"
                            className={styles.resumeTextContainer}
                        >
                            <TextSectionParagraph>
                                I pride myself on my ability to draw from my experiences to improve my work. Here is a selection of my
                                previous and current positions, and what I brought to each of these roles.
                            </TextSectionParagraph>

                            <TextSectionCTA>
                                <Button colorMode="light" onClick={() => router.push(mailtoLink)}>
                                    contact me
                                </Button>
                            </TextSectionCTA>
                        </TextSection>

                        <HomeInformationCard
                            title="experience"
                            rightText="what I've done"
                            content={HomeExperienceCardContent}
                            className={styles.resumeListContent}
                        />
                    </div>

                    <div className={[styles.resumeSection, styles.resumeAchievementsContainer].join(' ')}>
                        <div id="achievements" />

                        <TextSection
                            title="my achievements"
                            subtitle="What I've done that I'm proud of."
                            context="resume"
                            colorMode="light"
                            className={styles.resumeTextContainer}
                        >
                            <TextSectionParagraph>
                                I strive to be the best I can be in all that I do, both personally and professionally. Here are my proudest
                                achievements, and relevant background information on each.
                            </TextSectionParagraph>

                            <TextSectionCTA>
                                <Button colorMode="light" onClick={() => router.push(mailtoLink)}>
                                    contact me
                                </Button>
                            </TextSectionCTA>
                        </TextSection>

                        <HomeInformationCard
                            title="acheivements"
                            rightText="what I've earned"
                            content={HomeAchievementsCardContent}
                            className={styles.resumeListContent}
                        />
                    </div>

                    <div className={[styles.resumeSection, styles.resumeSkillsContainer].join(' ')}>
                        <div id="skills" />

                        <TextSection
                            title="my skills"
                            subtitle="What I'm good at, and what I love doing."
                            context="resume"
                            colorMode="light"
                            className={styles.resumeTextContainer}
                        >
                            <TextSectionParagraph>
                                Over the course of my professional life I&apos;ve been exposed to many different fields. Here are my strongest
                                fields, and information on what I can do within each.
                            </TextSectionParagraph>

                            <TextSectionCTA>
                                <Button colorMode="light" onClick={() => router.push(mailtoLink)}>
                                    contact me
                                </Button>
                            </TextSectionCTA>
                        </TextSection>

                        <HomeInformationCard
                            title="skills"
                            rightText="what I've learned"
                            content={HomeSkillsCardContent}
                            className={styles.resumeListContent}
                        />
                    </div>
                </section>

                {/* Past Projects Container (WIP) */}

                {/* <section className={styles.projectsContainer}>
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
                            subtitle="Explore my stories by topic, or scroll down to view them all."
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
                                    filter stories
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
                </section> */}
            </main>

            <div className={styles.footerContainer}><Footer /></div>
        </div>
    );
};

export default Home;
