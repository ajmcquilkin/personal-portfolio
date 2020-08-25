// Inspiration: https://github.com/supasate/connected-react-router/blob/master/examples/typescript/src/configureStore.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import './index.scss';

/**
 * Allow the react app to access this store
 */
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('main'),
);
