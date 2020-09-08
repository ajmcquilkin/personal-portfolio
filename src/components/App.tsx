import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingScreen from '../scenes/LandingScreen';
import Home from '../scenes/Home';
import About from '../scenes/About';

/**
 * This history is loaded from the redux state in src/index.ts
 * When the URL location within the app changes, this will be logged to redux
 */
interface AppProps {

}

const App = () => (
  <div id="app-container">
    <LandingScreen />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </div>
);

export default App;
