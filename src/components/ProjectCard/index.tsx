import React from 'react';
import './ProjectCard.scss';
import Button from '../Button';

interface Props {
  title: string;
  subtitle: string;
  headerIcon: (className: string) => JSX.Element;
  contentText: string;

  buttonText: string;
  onClick: () => void;

  bottomText: string;
  bottomIcon?: (className: string) => JSX.Element;
  className?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  headerIcon,
  contentText,

  buttonText,
  onClick,

  bottomText,
  bottomIcon,

  className = '',
}: Props) => (
  <div
    className={`project-card-container ${className}`}
  >
    <div className="project-card-header-container">
      {headerIcon('project-card-header-icon')}
      <div className="project-card-header-text-container">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>

    <p>{contentText}</p>
    <Button onClick={onClick}>{buttonText}</Button>

    <div className="project-card-bottom-container">
      <div className="project-card-bottom-text">{bottomText}</div>
      {bottomIcon ? bottomIcon('project-card-bottom-icon') : null}
    </div>
  </div>
);

export default ProjectCard;
