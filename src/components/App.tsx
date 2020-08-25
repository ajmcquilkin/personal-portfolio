import * as React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

import DPlannerIcon from '../assets/d-planner.svg';
import usptoIcon from '../assets/uspto.svg';

import ProjectCard from './ProjectCard';

/**
 * This history is loaded from the redux state in src/index.ts
 * When the URL location within the app changes, this will be logged to redux
 */
interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => (
  <ConnectedRouter history={history}>
    <div id="app-container">
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <ProjectCard
          title="D-Planner, LLC"
          subtitle="Entrepreneurship"
          headerIcon={(className) => <img className={className} src={DPlannerIcon} alt="D-Planner logo" />}
          contentText="Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition."

          buttonText="read more"
          onClick={() => {}}

          bottomText="Co-founder, Project Designer, Developer"
          bottomIcon={(className) => <img className={className} src={usptoIcon} alt="USPTO logo" />}
        />

        <ProjectCard
          title="D-Planner, LLC"
          subtitle="Entrepreneurship"
          headerIcon={(className) => <img className={className} src={DPlannerIcon} alt="D-Planner logo" />}
          contentText="Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition."

          buttonText="read more"
          onClick={() => {}}

          bottomText="Co-founder, Project Designer, Developer"
          bottomIcon={(className) => <img className={className} src={usptoIcon} alt="USPTO logo" />}
        />

        <ProjectCard
          title="D-Planner, LLC"
          subtitle="Entrepreneurship"
          headerIcon={(className) => <img className={className} src={DPlannerIcon} alt="D-Planner logo" />}
          contentText="Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition."

          buttonText="read more"
          onClick={() => {}}

          bottomText="Co-founder, Project Designer, Developer"
          bottomIcon={(className) => <img className={className} src={usptoIcon} alt="USPTO logo" />}
        />

        <ProjectCard
          title="D-Planner, LLC"
          subtitle="Entrepreneurship"
          headerIcon={(className) => <img className={className} src={DPlannerIcon} alt="D-Planner logo" />}
          contentText="Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition."

          buttonText="read more"
          onClick={() => {}}

          bottomText="Co-founder, Project Designer, Developer"
          bottomIcon={(className) => <img className={className} src={usptoIcon} alt="USPTO logo" />}
        />

        <ProjectCard
          title="D-Planner, LLC"
          subtitle="Entrepreneurship"
          headerIcon={(className) => <img className={className} src={DPlannerIcon} alt="D-Planner logo" />}
          contentText="Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition."

          buttonText="read more"
          onClick={() => {}}

          bottomText="Co-founder, Project Designer, Developer"
          bottomIcon={(className) => <img className={className} src={usptoIcon} alt="USPTO logo" />}
        />

        <ProjectCard
          title="D-Planner, LLC"
          subtitle="Entrepreneurship"
          headerIcon={(className) => <img className={className} src={DPlannerIcon} alt="D-Planner logo" />}
          contentText="Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition."

          buttonText="read more"
          onClick={() => {}}

          bottomText="Co-founder, Project Designer, Developer"
          bottomIcon={(className) => <img className={className} src={usptoIcon} alt="USPTO logo" />}
        />
      </div>

      {/* <Switch>
        <Route exact path="/" component={WelcomeRedux} />
        <Route path="/test" render={() => <Test testString="Test String" />} />
        <Route component={Fallback} />
      </Switch> */}
    </div>
  </ConnectedRouter>
);

export default App;
