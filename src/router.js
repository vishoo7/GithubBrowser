import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';

import RepoListContainer from './containers/RepoListContainer';
import CommitList from './containers/CommitList'

export default (

  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={RepoListContainer} />
        <Route path="commit">
          <Route component={CommitList}>
          </Route>
        </Route>


    </Route>
  </Router>
);
