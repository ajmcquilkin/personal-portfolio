import React from 'react';
import { useHistory, RouteComponentProps } from 'react-router-dom';

import StoryHeader from './StoryHeader';
// import DPlannerStory from './Stories/DPlannerStory';

import { storyURLs } from '../../constants';

export interface MatchProps {
  id: string;
}

export interface IStoryContainerProps extends RouteComponentProps<MatchProps> {

}

export default function StoryContainer({ match }: IStoryContainerProps) {
  const { push } = useHistory();

  switch (match.params.id) {
    case storyURLs.dplanner:
      // return <DPlannerStory />;
      return (
        <StoryHeader
          title="D-Planner, LLC"
          subtitle="Case Study Coming Soon!"
          description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
    case storyURLs.icid:
      return (
        <StoryHeader
          title="US Patent 9,632,952"
          subtitle="Case Study Coming Soon!"
          description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
    case storyURLs.mdc:
      return (
        <StoryHeader
          title="Mini Design Course"
          subtitle="Case Study Coming Soon!"
          description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
    case storyURLs.scheduling:
      return (
        <StoryHeader
          title="Dartmouth Scheduling"
          subtitle="Case Study Coming Soon!"
          description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
    case storyURLs.jest:
      return (
        <StoryHeader
          title="UI Testing Workshop"
          subtitle="Case Study Coming Soon!"
          description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
    case storyURLs.repeater:
      return (
        <StoryHeader
          title="Portable Radio Repeater"
          subtitle="Case Study Coming Soon!"
          description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
    case storyURLs.graniteState:
      return (
        <StoryHeader
          title="Granite State Voluteering"
          subtitle="Case Study Coming Soon!"
          description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
    // case storyURLs.tsStarter:
    //   return (
    //     <StoryHeader
    //       title="ReactJS Typescript Starter"
    //       subtitle="Case Study Coming Soon!"
    //       description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
    //       renderContent={(className) => (<div className={className} />)}
    //       onButtonClick={() => push('/')}
    //       buttonText="go home"
    //       showArrow={false}
    //     />
    //   );
    case storyURLs.crudTemplate:
      return (
        <StoryHeader
          title="Advanced CRUD Starter Pack"
          subtitle="Case Study Coming Soon!"
          description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
    case storyURLs.whiteboard:
      return (
        <StoryHeader
          title="Whiteboard Productivity"
          subtitle="Case Study Coming Soon!"
          description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
    case storyURLs.mindsquare:
      return (
        <StoryHeader
          title="Mindsquare Mindfulness"
          subtitle="Case Study Coming Soon!"
          description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
    default:
      return (
        <StoryHeader
          title="404"
          subtitle="Sorry, I couldn't find that story!"
          description="It looks like the story you searched for doesn't exist. Check theck that you typed the URL correctly, or click the button below to explore more of my work."
          renderContent={(className) => (<div className={className} />)}
          onButtonClick={() => push('/')}
          buttonText="go home"
          showArrow={false}
        />
      );
  }
}
