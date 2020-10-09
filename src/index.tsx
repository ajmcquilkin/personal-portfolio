import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'react-lazy-load-image-component/src/effects/opacity.css'; // Lazy image loading

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
