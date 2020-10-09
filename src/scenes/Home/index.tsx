import React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Footer from '../FooterScreen';

import Button from '../../components/Button';
import ArrowBox from '../../components/ArrowBox';
import ProjectCard from '../../components/ProjectCard';

import SearchIcon from '../../assets/icons/search.svg';

import TestImage from '../../assets/images/test_project_image.png';
import MountainPanorama from '../../assets/images/mountain_pano.jpg';

import { Project, Tag, ProjectsArray } from './projects';
import { ReactComponent as SlantedBackground } from '../../assets/background.svg';

import './Home.scss';

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

const imgCache: { [key:string]: string } = {};

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach((key) => {
    imgCache[key] = r(key);
  });
}

importAll(require.context('../../assets/icons', false, /\.svg$/));

const Home = () => {
  const { location, push } = useHistory();
  const parsedQuery = queryString.parse(location.search);

  // TODO: Validate JSON schema
  const [tag, setTag] = React.useState<Tag>(parsedQuery.tag as any || 'all');
  const [searchQuery, setSearchQuery] = React.useState<string>(parsedQuery.query as any || '');
  const [searchResults, setSearchResults] = React.useState<Project[]>(getFilteredProjects(searchQuery, tag));

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
          <Button dark size="lg" onClick={() => push('/story/dplanner')}>read more</Button>
        </div>
        <img className="right" src={TestImage} alt="TEST" />
      </section>

      <section className="home-featured-project-container">
        <img className="left" src={TestImage} alt="TEST" />
        <div className="home-featured-project-text-container">
          <h2>D-Planner, LLC</h2>
          <div className="h4">Co-founder, Product Designer, Developer</div>
          <p>Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.</p>
          <Button dark size="lg" onClick={() => push('/story/dplanner')}>read more</Button>
        </div>
      </section>

      <div className="home-more-work-container">
        <p>see more of my work</p>
        <ArrowBox dark className="home-more-work-arrow" />
      </div>

      <section id="home-skills">
        <div id="home-skills-skew"><SlantedBackground /></div>
        <div className="home-skills-text-container">
          <h2>What I can do</h2>
          <p>I love to work on projects that can bring positive change to the lives of others. From my school to search and rescue teams in the mountains, I want to do good in my communities.</p>
        </div>

        <div id="home-skills-types-container">
          <div className="home-skills-type-container">
            <div className="h4">software</div>
            <h3>development</h3>
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

          <div className="home-skills-type-container">
            <div className="h4">product</div>
            <h3>design</h3>
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
        </div>

      </section>

      <section id="work-experience">
        <div id="work-experience-search">
          <LazyLoadImage
            src={`https://res.cloudinary.com/duq3rhnd2/image/upload/q_70,w_${window.innerWidth}/v1602266143/Personal%20Portfolio/mountain_pano_vo7jqt.jpg`}
            alt="Mountain panorama"
            effect="opacity"
            wrapperClassName="work-experience-feature"
          />
          <div id="work-experience-gradient" />
          <h2>My Work Experience</h2>
        </div>

        <div role="search" id="home-work-search-container">
          <div className="home-work-separator" />

          <button
            className={tag === 'all' ? 'active' : ''}
            type="button"
            onClick={() => { setTag('all'); setSearchResults(getFilteredProjects(searchQuery, 'all')); }}
          >
            <p>all</p>
          </button>

          <button
            className={tag === 'development' ? 'active' : ''}
            type="button"
            onClick={() => { setTag('development'); setSearchResults(getFilteredProjects(searchQuery, 'development')); }}
          >
            <p>development</p>
          </button>

          <button
            className={tag === 'design' ? 'active' : ''}
            type="button"
            onClick={() => { setTag('design'); setSearchResults(getFilteredProjects(searchQuery, 'design')); }}
          >
            <p>design</p>
          </button>

          <div className="home-work-separator" />
          <form
            id="home-search-input-container"
            onSubmit={(e) => {
              e.preventDefault();
              setSearchResults(getFilteredProjects(searchQuery, tag));
            }}
          >
            <input
              className="p"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="search for keywords"
            />

            <button type="submit"><img src={SearchIcon} alt="search" /></button>
          </form>
          <div className="home-work-separator" />
        </div>

        <div id="work-experience-results">
          {searchResults.length > 0
            ? searchResults.map((project: Project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                headerIconURL={imgCache[project.headerIconSrc] || ''}
                headerIconAlt={project.headerIconAlt}
                contentText={project.contentText}
                buttonText={project.buttonText}
                onClick={() => push(`/story/${project.projectSubURL}`)}
                bottomText={project.bottomText}
                backgroundStyling={project.backgroundStyling}
                className="work-experience-project-card"
              />
            ))
            : (
              <div className="work-experience-fallback">
                <h2>Uh oh!</h2>
                <p>
                  I couldn&apos;t find what you were looking for! Try searching for
                  {' '}
                  <button
                    type="button"
                    className="p"
                    onClick={() => {
                      setSearchResults(getFilteredProjects('patent', tag));
                      setSearchQuery('patent');
                    }}
                  >
                    patent
                  </button>
                  {' '}
                  or
                  {' '}
                  <button
                    type="button"
                    className="p"
                    onClick={() => {
                      setSearchResults(getFilteredProjects('typescript', tag));
                      setSearchQuery('typescript');
                    }}
                  >
                    typescript
                  </button>
                  {' '}
                  if you need some ideas.
                </p>
              </div>
            )}
        </div>
      </section>

      <Footer className="home-footer" />
    </main>
  );
};

export default Home;
