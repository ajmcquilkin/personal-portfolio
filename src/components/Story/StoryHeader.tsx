import React from 'react';
import { useHistory } from 'react-router-dom';

import ArrowBox from '../ArrowBox';
import Button from '../Button';
import NavMenuItem from '../NavMenuItem';

import { mailtoLink } from '../../constants/constants';

import './StoryHeader.scss';

interface StoryHeaderProps {
  title: string;
  subtitle: string;
  description: string;

  buttonLink: string;
  buttonText?: string;
  showButton?: boolean;
  renderContent: (className: string) => void;
}

const LandingScreen = ({
  title, subtitle, description,
  buttonText, buttonLink, showButton, renderContent
}: StoryHeaderProps) => {
  const { push } = useHistory();

  return (
    <div className="story-header-container">
      <div className="story-header-signature">AM</div>

      <nav
        className="story-header-menu-container"
        aria-label="Main site links"
      >
        <NavMenuItem
          active={false}
          pageName="home"
          onClick={() => push('/')}
          className="story-header-menu-item"
          dark
        />

        <NavMenuItem
          active={false}
          pageName="about me"
          onClick={() => push('/about')}
          className="story-header-menu-item"
          dark
        />

        <NavMenuItem
          active={false}
          pageName="my resume"
          onClick={() => {}}
          className="story-header-menu-item"
          dark
        />

        <NavMenuItem
          active={false}
          pageName="contact"
          onClick={() => window.open(mailtoLink, '_self')}
          className="story-header-menu-item"
          dark
        />
      </nav>

      <div className="story-header-banner-container" role="banner">
        <div className="story-header-banner-content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <div className="story-header-banner-content">{description}</div>
          <div className="story-header-button-container">
            {showButton === false ? null : <Button className="story-header-button" onClick={() => window.open(buttonLink)} size="lg" dark>{buttonText || 'visit deployed site'}</Button>}
            <Button className="story-header-button" onClick={() => {}} size="sm" dark>contact me</Button>
          </div>
        </div>

        {renderContent('story-header-content-container')}
      </div>

      <ArrowBox dark className="story-header-arrow-box" />
    </div>
  );
};

export default LandingScreen;
