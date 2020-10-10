import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import ArrowBox from '../ArrowBox';
import Button from '../Button';
import NavMenuItem from '../NavMenuItem';

import { mailtoLink } from '../../constants';

import './StoryHeader.scss';

interface StoryHeaderProps {
  title: string;
  subtitle: string;
  description: string;

  onButtonClick: (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  buttonText?: string;
  showButton?: boolean;
  showArrow?: boolean;
  renderContent: (className: string) => void;
}

const LandingScreen = ({
  title, subtitle, description, showArrow,
  buttonText, onButtonClick, showButton, renderContent,
}: StoryHeaderProps) => {
  const { push } = useHistory();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          onClick={() => window.open('/Adam_McQuilkin_Resume.pdf')}
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
            {showButton === false ? null : <Button className="story-header-button" onClick={onButtonClick} size="lg" dark>{buttonText || 'visit deployed site'}</Button>}
            <Button className="story-header-button" onClick={() => window.open(mailtoLink, '_self')} size="sm" dark>contact me</Button>
          </div>
        </div>

        {renderContent('story-header-content-container')}
      </div>

      {showArrow === false ? null : <ArrowBox dark className="story-header-arrow-box" />}
    </div>
  );
};

export default LandingScreen;
