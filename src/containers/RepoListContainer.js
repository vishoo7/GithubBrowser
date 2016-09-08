import React from 'react';
import { connect } from 'react-redux';
import RepoList from './RepoList';
import * as githubApi from '../api/github-api';
import store from '../store';
import { loadRepository } from '../actions/repository';

const RepoListContainer = React.createClass({

  componentDidMount: function() {
    githubApi.fetchRepository('facebook');
  },

  render: function() {
    return (
      <RepoList repos={this.props.repos} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    repos: store.repository.repos
  };
};

export default connect(mapStateToProps)(RepoListContainer);
