import React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import Button from '../../components/Button';
import HeaderNavCard from '../../components/HeaderNavCard';
import NavMenuItem from '../../components/NavMenuItem';

import { mailtoLink } from '../../constants';

import './FallbackScreen.scss';

interface Props {

}

const FallbackScreen = () => {
  const { push } = useHistory();

  return (
    <div className="fallback-screen-container">
      <div className="fallback-screen-signature">AM</div>
      <div className="fallback-screen-signature-shadow" />

      <nav
        className="fallback-screen-menu-container"
        aria-label="Main site links"
      >
        <NavMenuItem
          active={false}
          pageName="home"
          onClick={() => push('/')}
          className="fallback-screen-menu-item"
        />

        <NavMenuItem
          active={false}
          pageName="about me"
          onClick={() => push('/about')}
          className="fallback-screen-menu-item"
        />

        <NavMenuItem
          active={false}
          pageName="my resume"
          onClick={() => window.open('/Adam_McQuilkin_Resume.pdf')}
          className="fallback-screen-menu-item"
        />

        <NavMenuItem
          active={false}
          pageName="contact"
          onClick={() => window.open(mailtoLink, '_self')}
          className="fallback-screen-menu-item"
        />
      </nav>
      <div className="fallback-screen-menu-shadow" />

      <div className="fallback-screen-banner-container" role="banner">
        <div className="fallback-screen-banner-content">
          <h1>404</h1>
          <h2>You seem to be lost!</h2>
          <div className="fallback-screen-banner-content">It looks like this page doesn&apos;t exist. Try checking out some of my work or click the button below to go home!</div>
          <div className="fallback-screen-button-container">
            <Button className="fallback-screen-button" onClick={() => push('/')} size="lg">go home</Button>
          </div>
        </div>

        <div className="fallback-screen-banner-shadow" />
      </div>

      <nav
        className="fallback-screen-cards-container"
        aria-label="Links to filtered site content"
      >
        <HeaderNavCard
          onClick={() => push(`/?${queryString.stringify({ tag: 'development' })}#work-experience-search`)}
          title="development"
          subtitle="software"
          linkText="see work"
          className="fallback-screen-nav-card"
        />

        <HeaderNavCard
          onClick={() => push(`/?${queryString.stringify({ tag: 'design' })}#work-experience-search`)}
          title="design"
          subtitle="product"
          linkText="see work"
          className="fallback-screen-nav-card"
        />

        <HeaderNavCard
          onClick={() => push('/about#main-photo-gallery')}
          title="photography"
          subtitle="personal"
          linkText="see work"
          className="fallback-screen-nav-card"
        />
      </nav>
      <div className="fallback-screen-bottom-gradient" />
    </div>
  );
};

export default FallbackScreen;
