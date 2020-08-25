import React, { useEffect } from 'react';

import Footer from '../FooterScreen';

import Button from '../../components/Button';
import ArrowBox from '../../components/ArrowBox';
import ProjectCard from '../../components/ProjectCard';

import SearchIcon from '../../assets/icons/search.svg';

import TestImage from '../../assets/images/test_project_image.png';
import MountainPanorama from '../../assets/images/mountain_pano.jpg';

import { Project, Tag, ProjectsArray } from './projects';

import './Home.scss';

/**
 * A function to enable sticky scrolling for project search menu
 */
function enableSticky(): void {
  const navbar = document.getElementById('home-work-search-container');
  if (window.pageYOffset > (navbar ? navbar.getBoundingClientRect().top + document.documentElement.scrollTop : 999999)) {
    navbar?.classList.add('sticky');
  } else {
    navbar?.classList.remove('sticky');
  }
}

/**
 * Filters projects based on given search query and filter tag
 * @param search
 * @param tag
 */
function getFilteredProjects(search: string, tag: Tag): Project[] {
  return ProjectsArray.filter((project) => {
    let searchBool = false;
    let filterBool = false;

    const regexSearch = new RegExp(search, 'i');
    if (!searchBool && regexSearch.test(project.title)) searchBool = true;
    if (!searchBool && regexSearch.test(project.subtitle)) searchBool = true;
    if (!searchBool && regexSearch.test(project.headerIconAlt)) searchBool = true;
    if (!searchBool && regexSearch.test(project.contentText)) searchBool = true;
    if (!searchBool && regexSearch.test(project.buttonText)) searchBool = true;
    if (!searchBool && regexSearch.test(project.projectSubURL)) searchBool = true;
    if (!searchBool && regexSearch.test(project.bottomText)) searchBool = true;
    if (!searchBool && regexSearch.test(project.bottomIconAlt)) searchBool = true;
    if (!searchBool && project.tags.some((t) => regexSearch.test(t))) searchBool = true;
    if (!searchBool) return false;

    if (tag === 'all' || project.tags.includes(tag)) filterBool = true;
    return searchBool && filterBool;
  });
}

const Home = () => {
  const [tag, setTag] = React.useState<Tag>('all');
  const [search, setSearch] = React.useState<string>('');
  const [searchResults, setSearchResults] = React.useState<Project[]>(ProjectsArray);

  useEffect(() => {
    document.addEventListener('scroll', enableSticky);
    return function removeListener() {
      window.removeEventListener('scroll', enableSticky);
    };
  });

  return (
    <main>
      <section id="home-achievements">
        <div className="home-achievement-container">
          <img />
          <div className="home-achievements-text-container">
            <div className="h4">US Patent 9,632,952</div>
            <p>Intermediate Computer Interface Device</p>
            <p>Awarded January, 2017</p>
          </div>
        </div>

        <div className="home-achievement-container">
          <img />
          <div className="home-achievements-text-container">
            <div className="h4">DALI Pitch Competition Winner</div>
            <p>Pitching for D-Planner, LLC</p>
            <p>November, 2018</p>
          </div>
        </div>
      </section>

      <section className="home-featured-project-container">
        <div className="home-featured-project-text-container">
          <h2>D-Planner, LLC</h2>
          <div className="h4">Co-founder, Product Designer, Developer</div>
          <p>Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.</p>
          <Button dark size="lg" onClick={() => {}}>read more</Button>
        </div>
        <img className="right" src={TestImage} alt="TEST" />
      </section>

      <section className="home-featured-project-container">
        <img className="left" src={TestImage} alt="TEST" />
        <div className="home-featured-project-text-container">
          <h2>D-Planner, LLC</h2>
          <div className="h4">Co-founder, Product Designer, Developer</div>
          <p>Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.</p>
          <Button dark size="lg" onClick={() => {}}>read more</Button>
        </div>
      </section>

      <div className="home-more-work-container">
        <p>see more of my work</p>
        <ArrowBox dark className="home-more-work-arrow" />
      </div>

      <section id="home-skills">
        <div id="home-skills-skew" />
        <div className="home-skills-text-container">
          <h2>What I can do</h2>
          <p>I love to work on projects that can bring positive change to the lives of others. From my school to search and rescue teams in the mountains, I want to do good in my communities.</p>
        </div>

        <div id="home-skills-types-container">
          <div className="home-skills-type-container">
            <div className="h4">software</div>
            <h3>development</h3>
            <p className="header">Est fugiat eum quo corrupti quae voluptas eaque. Veritatis aut explicabo perferendis. Quia recusandae quia voluptates id hic sed hic.</p>

            <h4>experience with</h4>
            <div className="home-skills-list-container">
              <p>Animation</p>
              <p>Graphic Design</p>
              <p>Mobile Design</p>
              <p>UI Design</p>
              <p>UX Design</p>
              <p>Web Design</p>
            </div>

            <h4>design tools</h4>
            <div className="home-skills-list-container">
              <p>Adobe After Effects</p>
              <p>Adobe Illustrator</p>
              <p>Adobe Photoshop</p>
              <p>Adobe Premiere Pro</p>
              <p>Figma</p>
              <p>Zeplin</p>
            </div>

            <Button
              className="home-skills-button"
              dark
              onClick={() => {}}
            >
              see work
            </Button>
          </div>

          <div className="home-skills-type-container">
            <div className="h4">product</div>
            <h3>design</h3>
            <p className="header">Est fugiat eum quo corrupti quae voluptas eaque. Veritatis aut explicabo perferendis. Quia recusandae quia voluptates id hic sed hic.</p>

            <h4>languages</h4>
            <div className="home-skills-list-column-container">
              <div className="home-skills-list-container">
                <p>Arduino</p>
                <p>Bash</p>
                <p>C / C++</p>
                <p>CSS / Sass</p>
                <p>HTML</p>
                <p>Java</p>
              </div>

              <div className="home-skills-list-container">
                <p>Arduino</p>
                <p>Bash</p>
                <p>C / C++</p>
                <p>CSS / Sass</p>
                <p>HTML</p>
                <p>Java</p>
              </div>
            </div>

            <h4>dev tools</h4>
            <div className="home-skills-list-container">
              <p>Codepen</p>
              <p>Eclipse IDE</p>
              <p>Git / Github / Zenhub</p>
              <p>Terminal</p>
              <p>VS Code</p>
              <p>Xilinx ISE</p>
            </div>

            <Button
              className="home-skills-button"
              dark
              onClick={() => {}}
            >
              see work

            </Button>
          </div>
        </div>
      </section>

      <section id="work-experience">
        <div id="work-experience-search" style={{ backgroundImage: `linear-gradient(180deg, rgba(23, 30, 39, 0) 82.29%, #171E27 100%), url(${MountainPanorama})` }}>
          <h2>My Work Experience</h2>
        </div>

        <div id="home-work-search-container">
          <div className="home-work-separator" />

          <button type="button" onClick={() => { setTag('all'); setSearchResults(getFilteredProjects(search, 'all')); }}>
            <p className={tag === 'all' ? 'active' : ''}>all</p>
          </button>

          <button type="button" onClick={() => { setTag('development'); setSearchResults(getFilteredProjects(search, 'development')); }}>
            <p className={tag === 'development' ? 'active' : ''}>development</p>
          </button>

          <button type="button" onClick={() => { setTag('design'); setSearchResults(getFilteredProjects(search, 'design')); }}>
            <p className={tag === 'design' ? 'active' : ''}>design</p>
          </button>

          <div className="home-work-separator" />
          <form
            id="home-search-input-container"
            onSubmit={(e) => {
              e.preventDefault();
              setSearchResults(getFilteredProjects(search, tag));
            }}
          >
            <input
              className="p"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search here for “Patent”, “Typescript”, “Entrepreneurship”, etc..."
            />

            <button type="submit"><img src={SearchIcon} alt="search" /></button>
          </form>
          <div className="home-work-separator" />
        </div>

        <div id="work-experience-results">
          {searchResults.map((project: Project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              headerIcon={(className) => (<img className={className} src={project.headerIconSrc} alt={project.headerIconAlt} />)}
              contentText={project.contentText}
              buttonText={project.buttonText}
              onClick={() => {}}
              bottomText={project.bottomText}
              bottomIcon={(className) => (<img className={className} src={project.bottomIconSrc} alt={project.bottomIconAlt} />)}
              backgroundStyling={project.backgroundStyling}
              className="work-experience-project-card"
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
