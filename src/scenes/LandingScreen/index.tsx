import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import ArrowBox from '../../components/ArrowBox';
import Button from '../../components/Button';
import HeaderNavCard from '../../components/HeaderNavCard';
import NavMenuItem from '../../components/NavMenuItem';

import HomeFeatureImg from '../../assets/images/home_feature.jpg';
import AboutFeatureImg from '../../assets/images/about_feature.jpg';
import FallbackFeatureImg from '../../assets/images/404_feature.jpg';

import './LandingScreen.scss';

interface Props {

}

function getBackgroundImageByURL(url: string) {
  switch (url) {
    case '/':
      return HomeFeatureImg;
    case '/about':
      return AboutFeatureImg;
    default:
      return FallbackFeatureImg;
  }
}

function getDescriptionByURL(url: string) {
  switch (url) {
    case '/':
      return 'Est fugiat eum quo corrupti quae voluptas eaque. Veritatis aut explicabo perferendis.';
    case '/about':
      return 'Est fugiat eum quo corrupti quae voluptas eaque. Veritatis aut explicabo perferendis.';
    default:
      return 'You seem to be lost in the woods. We couldn’t find the page you were looking for, but give these pages a try!';
  }
}

const LandingScreen = () => {
  const { location: { pathname, hash }, push } = useHistory();

  // Always loaded with Home or About
  useEffect(() => {
    if (hash) {
      const hashString = hash.slice(1);
      const element = document.getElementById(hashString);
      // if (element) {
      //   const main = document.getElementById('main');
      //   if (main) {
      //     main.animate({
      //       scrollTop: element. .offset().top
      //     }, 1000);
      //   }
      // }
      if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
    }
  });

  return (
    <div
      className="landing-screen-container"
      style={{ background: `linear-gradient(rgba(54, 54, 54, 0.12), rgba(54, 54, 54, 0.12)), rgba(0, 0, 0, 0) url(${getBackgroundImageByURL(pathname)}) 50% 30%` }}
    >
      <div className="landing-screen-signature">AM</div>
      <div className="landing-screen-signature-shadow" />

      <nav
        className="landing-screen-menu-container"
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
          onClick={() => {}}
          className="landing-screen-menu-item"
        />

        <NavMenuItem
          active={false}
          pageName="contact"
          onClick={() => window.open('mailto:adam.j.mcquilkin.22@dartmouth.edu', '_self')}
          className="landing-screen-menu-item"
        />
      </nav>
      <div className="landing-screen-menu-shadow" />

      <div className="landing-screen-banner-container" role="banner">
        <div className="landing-screen-banner-content">
          <h1>Adam McQuilkin</h1>
          <h2>Developer, Product Designer</h2>
          <div className="landing-screen-banner-content">{getDescriptionByURL(pathname)}</div>
          <div className="landing-screen-button-container">
            <Button className="landing-screen-button" onClick={() => {}} size="sm">contact me</Button>
            <Button className="landing-screen-button" onClick={() => {}} size="lg">download resume</Button>
          </div>
        </div>

        <div className="landing-screen-banner-shadow" />
      </div>

      <nav
        className="landing-screen-cards-container"
        aria-label="Links to filtered site content"
      >
        <HeaderNavCard
          onClick={() => push(`/?${queryString.stringify({ tag: 'development' })}#work-experience-search`)}
          title="development"
          subtitle="software"
          linkText="see work"
          className="landing-screen-nav-card"
        />

        <HeaderNavCard
          onClick={() => push(`/?${queryString.stringify({ tag: 'design' })}#work-experience-search`)}
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
