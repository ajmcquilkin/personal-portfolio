import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../scenes/Home';
import About from '../scenes/About';
import LandingScreen from '../scenes/LandingScreen';

export interface MainProps {

}

const Fallback = () => (
  <div>this shouldn&quot;t happen :\</div>
);

const Main: React.FC<MainProps> = () => (
  <>
    <LandingScreen />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={Fallback} />
    </Switch>
  </>
);

export default Main;
