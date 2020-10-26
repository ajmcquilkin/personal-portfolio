import React from 'react';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import StoryHeader from './StoryHeader';
// import DPlannerStory from './Stories/DPlannerStory';

import { storyURLs, metaTitleBase } from '../../constants';

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
        <>
          <Helmet>
            <title>{`D-Planner, LLC | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="D-Planner, LLC"
            subtitle="Case Study Coming Soon!"
            description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
      );
    case storyURLs.icid:
      return (
        <>
          <Helmet>
            <title>{`ICID | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="US Patent 9,632,952"
            subtitle="Case Study Coming Soon!"
            description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
      );
    case storyURLs.mdc:
      return (
        <>
          <Helmet>
            <title>{`Dartmouth Mini Design Course | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="Dartmouth Mini Design Course"
            subtitle="Case Study Coming Soon!"
            description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
      );
    case storyURLs.scheduling:
      return (
        <>
          <Helmet>
            <title>{`Dartmouth Term Scheduling | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="Dartmouth Term Scheduling"
            subtitle="Case Study Coming Soon!"
            description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
      );
    case storyURLs.jest:
      return (
        <>
          <Helmet>
            <title>{`UI Unit Testing Workshop | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="UI Unit Testing Workshop"
            subtitle="Case Study Coming Soon!"
            description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
      );
    case storyURLs.repeater:
      return (
        <>
          <Helmet>
            <title>{`Portable Radio Repeater | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="Portable Radio Repeater"
            subtitle="Case Study Coming Soon!"
            description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
      );
    case storyURLs.graniteState:
      return (
        <>
          <Helmet>
            <title>{`D-Planner, LLC | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="Granite State Voluteering"
            subtitle="Case Study Coming Soon!"
            description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
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
        <>
          <Helmet>
            <title>{`Advanced CRUD Starter Pack | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="Advanced CRUD Starter Pack"
            subtitle="Case Study Coming Soon!"
            description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
      );
    case storyURLs.whiteboard:
      return (
        <>
          <Helmet>
            <title>{`Whiteboard Productivity | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="Whiteboard Productivity"
            subtitle="Case Study Coming Soon!"
            description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
      );
    case storyURLs.mindsquare:
      return (
        <>
          <Helmet>
            <title>{`Mindsquare Mindfulness | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="Mindsquare Mindfulness"
            subtitle="Case Study Coming Soon!"
            description="The writeup for this project is coming soon. If you just can't wait to hear about this project, let me know by clicking the button below."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
      );
    default:
      return (
        <>
          <Helmet>
            <title>{`Story Not Found | ${metaTitleBase}`}</title>
          </Helmet>

          <StoryHeader
            title="404"
            subtitle="Sorry, I couldn't find that story!"
            description="It looks like the story you searched for doesn't exist. Check theck that you typed the URL correctly, or click the button below to explore more of my work."
            renderContent={(className) => (<div className={className} />)}
            onButtonClick={() => push('/')}
            buttonText="go home"
            showArrow={false}
          />
        </>
      );
  }
}
