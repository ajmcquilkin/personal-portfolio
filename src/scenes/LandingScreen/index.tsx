import React from 'react';
import { withRouter, RouteChildrenProps } from 'react-router-dom';

import ArrowBox from '../../components/ArrowBox';
import Button from '../../components/Button';
import HeaderNavCard from '../../components/HeaderNavCard';
import NavMenuItem from '../../components/NavMenuItem';

import HomeFeatureImg from '../../assets/images/home_feature.jpg';
import AboutFeatureImg from '../../assets/images/about_feature.jpg';
import FallbackFeatureImg from '../../assets/images/404_feature.jpg';

import './LandingScreen.scss';

interface Props extends RouteChildrenProps {

}

interface State {

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

const LandingScreen = ({ history }: Props) => {
  const { pathname } = history.location;

  return (
    <div className="landing-screen-container" style={{ backgroundImage: `url(${getBackgroundImageByURL(pathname)})` }}>
      <div className="landing-screen-signature">AM</div>

      <nav
        className="landing-screen-menu-container"
        aria-label="Main site links"
      >
        <NavMenuItem
          pageName="HOME"
          pageLink="/"
          className="landing-screen-menu-item"
        />

        <NavMenuItem
          pageName="ABOUT ME"
          pageLink="/about"
          className="landing-screen-menu-item"
        />

        <NavMenuItem
          pageName="MY RESUME"
          pageLink="/resume"
          className="landing-screen-menu-item"
        />

        <NavMenuItem
          pageName="CONTACT"
          pageLink="/contact"
          className="landing-screen-menu-item"
        />
      </nav>

      <div className="landing-screen-banner-container" role="banner">
        <h1>Adam McQuilkin</h1>
        <h2>Developer, Product Designer</h2>
        <div className="landing-screen-banner-content">{getDescriptionByURL(pathname)}</div>
        <div className="landing-screen-button-container">
          <Button onClick={() => {}}>contact me</Button>
          <Button onClick={() => {}}>download resume</Button>
        </div>
      </div>

      <nav
        className="landing-screen-cards-container"
        aria-label="Links to filtered site content"
      >
        <HeaderNavCard
          onClick={() => {}}
          title="development"
          subtitle="software"
          linkText="see work"
          className="landing-screen-nav-card"
        />

        <HeaderNavCard
          onClick={() => {}}
          title="design"
          subtitle="product"
          linkText="see work"
          className="landing-screen-nav-card"
        />

        <HeaderNavCard
          onClick={() => {}}
          title="photography"
          subtitle="personal"
          linkText="see work"
          className="landing-screen-nav-card"
        />
      </nav>

      <ArrowBox className="landing-screen-arrow-box" />
    </div>
  );
};

export default withRouter(LandingScreen);
