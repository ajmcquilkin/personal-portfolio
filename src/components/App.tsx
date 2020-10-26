import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from './Main';
import StoryContainer from './Story';
import FallbackScreen from '../scenes/FallbackScreen';

import { metaTitleBase } from '../constants';

const App = () => (
  <div id="app-container">
    <Helmet>
      <title>{metaTitleBase}</title>
    </Helmet>

    <Switch>
      <Route exact path={['/', '/about']} component={Main} />
      <Route path="/story/:id" component={StoryContainer} />
      <Route component={FallbackScreen} />
    </Switch>
  </div>
);

export default App;
