import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config'
import * as serviceWorker from './serviceWorker';

import routes from './route/index';
import './index.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  (<HashRouter>
    {renderRoutes(routes)}
  </HashRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();