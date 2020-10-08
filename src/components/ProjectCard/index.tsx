import React from 'react';
import SVG from 'react-inlinesvg';

import Button from '../Button';
import './ProjectCard.scss';

interface Props {
  title: string;
  subtitle: string;
  // headerIcon: (className: string) => JSX.Element;
  headerIconURL: string;
  headerIconAlt: string;
  contentText: string;

  buttonText: string;
  onClick: () => void;

  bottomText: string;
  // bottomIcon?: (className: string) => JSX.Element;
  bottomIconURL?: string;
  bottomIconAlt?: string;

  backgroundStyling: string;
  className?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  headerIconURL,
  headerIconAlt,
  contentText,

  buttonText,
  onClick,

  bottomText,
  bottomIconURL,
  bottomIconAlt,

  backgroundStyling,
  className = '',
}: Props) => (
  <div
    className={`project-card-container ${className}`}
    style={{ background: backgroundStyling }}
  >
    <div className="project-card-header-container">
      <SVG
        src={headerIconURL}
        title={headerIconAlt}
        className="project-card-header-icon"
      />
      <div className="project-card-header-text-container">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>

    <p>{contentText}</p>
    <Button onClick={onClick}>{buttonText}</Button>

    <div className="project-card-bottom-container">
      <div className="project-card-bottom-text">{bottomText}</div>
      {bottomIconURL && bottomIconAlt ? (
        <SVG
          src={bottomIconURL}
          title={bottomIconAlt}
          className="project-card-bottom-icon"
        />
      ) : null}
    </div>
  </div>
);

export default ProjectCard;
