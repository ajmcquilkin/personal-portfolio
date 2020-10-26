import React from 'react';
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import queryString from 'query-string';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet';

import Footer from '../FooterScreen';

import Button from '../../components/Button';
import ArrowBox from '../../components/ArrowBox';
import ProjectCard from '../../components/ProjectCard';

import { Project, Type, ProjectsArray } from './projects';
import { storyURLs, metaTitleBase } from '../../constants';

import SearchIcon from '../../assets/icons/search.svg';
import DPlannerImage from '../../assets/images/dplanner.png';
import ICIDImage from '../../assets/images/icid.png';

import { ReactComponent as SlantedBackground } from '../../assets/background.svg';
import { ReactComponent as PatentIcon } from '../../assets/icons/pencil-ruler.svg';
import { ReactComponent as DPlannerIcon } from '../../assets/icons/grad-cap.svg';

import './Home.scss';

/**
 * Filters projects based on given search query and filter type
 * @param search
 * @param type
 */
function getFilteredProjects(search: string, type: Type): Project[] {
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
    if (!searchBool && project.types.some((t) => regexSearch.test(t))) searchBool = true;
    if (!searchBool && project.tags.some((t) => regexSearch.test(t))) searchBool = true;
    if (!searchBool) return false;

    if (type === 'all' || project.types.includes(type)) filterBool = true;
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

interface IHomeProps extends RouteChildrenProps {

}

const Home = ({ history: { push }, location: { search } }:IHomeProps) => {
  const { type: urlType, query: urlQuery } = React.useMemo(() => queryString.parse(search), [search]);

  // TODO: Validate query schema
  const [type, setType] = React.useState<Type>('all');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [searchResults, setSearchResults] = React.useState<Project[]>(ProjectsArray);

  React.useEffect(() => {
    if (urlType) setType(urlType as any);
    if (urlQuery) setType(urlQuery as any);
    if (urlType || urlQuery) setSearchResults(getFilteredProjects(searchQuery, type));
  }, [search, type, searchQuery, urlType, urlQuery]);

  return (
    <main>
      <Helmet>
        <title>{`Home | ${metaTitleBase}`}</title>
      </Helmet>

      <section id="home-achievements">
        <div className="home-achievement-container">
          <button type="button" onClick={() => push(`/story/${storyURLs.icid}`)} className="home-achievements-icon">
            <PatentIcon />
          </button>
          <div className="home-achievements-text-container">
            <div className="h4">US Patent 9,632,952</div>
            <p>Intermediate Computer Interface Device</p>
            <p>Awarded January, 2017</p>
          </div>
        </div>

        <div className="home-achievement-container">
          <button type="button" onClick={() => push(`/story/${storyURLs.dplanner}`)} className="home-achievements-icon">
            <DPlannerIcon />
          </button>
          <div className="home-achievements-text-container">
            <div className="h4">DALI Pitch Competition Winner</div>
            <p>Pitching for D-Planner, LLC</p>
            <p>November, 2018</p>
          </div>
        </div>
      </section>

      <section className="home-featured-project-container padded-section">
        {window.innerWidth < 1275 ? <img className="right" src={DPlannerImage} alt="TEST" /> : null}
        <div className="home-featured-project-text-container">
          <h2>D-Planner, LLC</h2>
          <div className="h4">Co-founder, Product Designer, Developer</div>
          <p>Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.</p>
          <Button dark size="sm" onClick={() => push(`/story/${storyURLs.dplanner}`)}>read more</Button>
        </div>
        {window.innerWidth >= 1275 ? <img className="right" src={DPlannerImage} alt="TEST" /> : null}
      </section>

      <section className="home-featured-project-container padded-section">
        <img className="left" src={ICIDImage} alt="TEST" />
        <div className="home-featured-project-text-container">
          <h2>ICID Embedded System</h2>
          <div className="h4">Sole Inventor, Patent Holder</div>
          <p>Macros are common in software, but only possible when the user is in full control of the target system. The Intermediate Computer Interface Device (ICID) enables human-interface device macros on any valid USB host.</p>
          <Button dark size="sm" onClick={() => push(`/story/${storyURLs.icid}`)}>read more</Button>
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
          <p>I pride myself on bringing my varied experiences to every project. I enjoy leadership, collaboration, and mentorship, and I can draw from my software development, engineering, and product design background to create holistic products and experiences.</p>
        </div>

        <div id="home-skills-types-container">
          <div className="home-skills-type-container">
            <div className="h4">software</div>
            <h3>development</h3>
            <p className="header">My development background includes fields from embedded design to web development. I am self-motivated and passionate, and enjoy learning new programming concepts.</p>

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
                <p>Javascript</p>
                <p>MongoDB</p>
                <p>NodeJS</p>
                <p>Python</p>
                <p>ReactJS</p>
                <p>Typescript</p>
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
              onClick={() => push(`/?${queryString.stringify({ type: 'development' })}#work-experience-search`)}
            >
              see work

            </Button>
          </div>

          <div className="home-skills-type-container">
            <div className="h4">product</div>
            <h3>design</h3>
            <p className="header">I am minoring in human-centered design and have a strong background in user-centric product development. I use thses product design skills in my development and entrepreneurship projects.</p>

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
              onClick={() => push(`/?${queryString.stringify({ type: 'design' })}#work-experience-search`)}
            >
              see work
            </Button>
          </div>
        </div>

      </section>

      <section id="work-experience">
        <div id="work-experience-search">
          <LazyLoadImage
            src={`https://res.cloudinary.com/duq3rhnd2/image/upload/q_70,w_${window.innerWidth},h_${document.getElementById('work-experience-search')?.clientHeight || 800},c_fill/v1602266143/Personal%20Portfolio/mountain_pano_vo7jqt.jpg`}
            alt="Mountain panorama"
            effect="opacity"
            wrapperClassName="work-experience-feature"
          />
          <div id="work-experience-gradient" />
          <h2>My Work Experience</h2>
        </div>

        <div role="search" id="home-work-search-container">
          <div id="home-work-search-button-container">
            <div className="home-work-separator" />
            <button
              className={type === 'all' ? 'active' : ''}
              type="button"
              onClick={() => { setType('all'); setSearchResults(getFilteredProjects(searchQuery, 'all')); }}
            >
              <p>all</p>
            </button>

            <button
              className={type === 'development' ? 'active' : ''}
              type="button"
              onClick={() => { setType('development'); setSearchResults(getFilteredProjects(searchQuery, 'development')); }}
            >
              <p>development</p>
            </button>

            <button
              className={type === 'design' ? 'active' : ''}
              type="button"
              onClick={() => { setType('design'); setSearchResults(getFilteredProjects(searchQuery, 'design')); }}
            >
              <p>design</p>
            </button>

            <div className="home-work-separator" />
          </div>

          <div id="home-work-search-form-container">
            <div className="home-work-separator" />
            <form
              id="home-search-input-container"
              onSubmit={(e) => {
                e.preventDefault();
                setSearchResults(getFilteredProjects(searchQuery, type));
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
                onClick={() => window.open(`/story/${project.projectSubURL}`)}
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
                      setSearchResults(getFilteredProjects('patent', type));
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
                      setSearchResults(getFilteredProjects('typescript', type));
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

export default withRouter(Home);
