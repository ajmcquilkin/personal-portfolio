import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

import LandingScreen from '../scenes/LandingScreen';

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
      <LandingScreen />
      <Switch>
        <Route exact path="/" render={() => (<div />)} />
        <Route exact path="/about" render={() => (<div />)} />
      </Switch>
    </div>
  </ConnectedRouter>
);

export default App;
