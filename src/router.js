import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';

import RepoListContainer from './components/containers/RepoListContainer';
import CommitListContainer from './components/containers/CommitListContainer'

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={RepoListContainer} />
        <Route path="commits">
          <Route path=":reponame" component={CommitListContainer} />
        </Route>
    </Route>
  </Router>
);
