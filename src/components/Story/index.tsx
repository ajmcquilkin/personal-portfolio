import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import DPlannerStory from './Stories/DPlannerStory';

export interface MatchProps {
  id: string;
}

export interface IStoryContainerProps extends RouteComponentProps<MatchProps> {

}

export default function StoryContainer({ match }: IStoryContainerProps) {
  switch (match.params.id) {
    case 'dplanner':
      return <DPlannerStory />;
    case 'two':
      return <div>Two</div>;
    case 'three':
      return <div>Three</div>;
    default:
      return (
        <div>
          {JSON.stringify(match)}
        </div>
      );
  }
}
