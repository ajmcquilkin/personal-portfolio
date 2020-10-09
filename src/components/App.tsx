import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import StoryContainer from './Story';
import FallbackScreen from '../scenes/FallbackScreen';

interface AppProps {

}

const App = () => (
  <div id="app-container">
    <Switch>
      <Route exact path={['/', '/about']} component={Main} />
      <Route path="/story/:id" component={StoryContainer} />
      <Route component={FallbackScreen} />
    </Switch>
  </div>
);

export default App;
