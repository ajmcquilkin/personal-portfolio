import React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ArrowBox from '../../components/ArrowBox';
import Button from '../../components/Button';
import HeaderNavCard from '../../components/HeaderNavCard';
import NavMenuItem from '../../components/NavMenuItem';

import { mailtoLink, resumeFileName } from '../../constants';

import './LandingScreen.scss';

function getBackgroundImageByURL(url: string) {
  switch (url) {
    case '/':
      return `https://res.cloudinary.com/duq3rhnd2/image/upload/q_70,w_${window.innerWidth},h_${Math.ceil(window.innerHeight * 1.15)},c_fill/v1602521762/Personal%20Portfolio/home_feature_2_crop_yeg97j.jpg`;
    default:
      return `https://res.cloudinary.com/duq3rhnd2/image/upload/q_70,w_${window.innerWidth},h_${Math.ceil(window.innerHeight * 1.15)},c_fill/v1602266143/Personal%20Portfolio/about_feature_dzmlth.jpg`;
  }
}

const LandingScreen = () => {
  const { location: { pathname, hash }, push } = useHistory();

  // Always loaded with Home or About
  React.useEffect(() => {
    if (hash) {
      const hashString = hash.slice(1);
      const element = document.getElementById(hashString);
      if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
    }
  });

  return (
    <div className="landing-screen-container">
      <LazyLoadImage
        src={getBackgroundImageByURL(pathname)}
        alt="Main landing feature (about)"
        effect="opacity"
        wrapperClassName="landing-main-feature"
      />

      <div id="landing-screen-signature">AM</div>
      <div id="landing-screen-signature-shadow" />

      <nav
        id="landing-screen-menu-container"
        aria-label="Main site links"
      >
        <NavMenuItem
          active={pathname === '/'}
          pageName="home"
          onClick={() => push('/')}
          className="landing-screen-menu-item"
        />

        <NavMenuItem
          active={pathname === '/about'}
          pageName="about me"
          onClick={() => push('/about')}
          className="landing-screen-menu-item"
        />

        <NavMenuItem
          active={false}
          pageName="my resume"
          onClick={() => window.open(`/${resumeFileName}`)}
          className="landing-screen-menu-item"
        />

        <NavMenuItem
          active={false}
          pageName="contact"
          onClick={() => window.open(mailtoLink, '_self')}
          className="landing-screen-menu-item"
        />
      </nav>
      <div id="landing-screen-menu-shadow" />

      <div className="landing-screen-banner-container" role="banner">
        <div className="landing-screen-banner-content">
          <h1>Adam McQuilkin</h1>
          <h2>Developer, Product Designer</h2>
          {/* <div className="landing-screen-banner-content">Est fugiat eum quo corrupti quae voluptas eaque. Veritatis aut explicabo perferendis.</div> */}
          <div className="landing-screen-banner-content">A passionate Dartmouth College computer science and design student, specializing in web and application development.</div>
          <div className="landing-screen-button-container">
            <Button className="landing-screen-button" onClick={() => window.open(mailtoLink, '_self')} size="sm">contact me</Button>
            <Button className="landing-screen-button" onClick={() => window.open(resumeFileName)} size="lg">download resume</Button>
          </div>
        </div>

        <div id="landing-screen-banner-shadow" />
      </div>

      <nav
        className="landing-screen-cards-container"
        aria-label="Links to filtered site content"
      >
        <HeaderNavCard
          onClick={() => push(`/?${queryString.stringify({ type: 'development' })}#work-experience-search`)}
          title="development"
          subtitle="software"
          linkText="see work"
          className="landing-screen-nav-card"
        />

        <HeaderNavCard
          onClick={() => push(`/?${queryString.stringify({ type: 'design' })}#work-experience-search`)}
          title="design"
          subtitle="product"
          linkText="see work"
          className="landing-screen-nav-card"
        />

        <HeaderNavCard
          onClick={() => push('/about#main-photo-gallery')}
          title="photography"
          subtitle="personal"
          linkText="see work"
          className="landing-screen-nav-card"
        />
      </nav>

      <ArrowBox className="landing-screen-arrow-box" />

      <div className="landing-screen-bottom-gradient" />
    </div>
  );
};

export default LandingScreen;
