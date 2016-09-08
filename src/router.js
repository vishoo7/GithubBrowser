import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';

import RepoListContainer from './containers/RepoListContainer';
import CommitListContainer from './containers/CommitListContainer'

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
