import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import '@bbc/telescope-kit-base';
import 'normalize.css/normalize.css';

import Home from './Components/Home';
import Article from './Components/Article';
import NotFound from './Components/404';
import NoAccess from './Components/403';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL || '/'}>
    <Switch>
      <Route path="/noaccess">
        <NoAccess />
      </Route>
      <Route path="/:subject/:article">
        <Article />
      </Route>
      <Route path="/:subject">
        <Home />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/*">
        <NotFound />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
