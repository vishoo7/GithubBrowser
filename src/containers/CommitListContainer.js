import React from 'react';
import { connect } from 'react-redux';
import CommitList from './CommitList';
import * as githubApi from '../api/github-api';

const CommitListContainer = React.createClass({

  componentDidMount: function() {
    githubApi.fetchCommits('facebook', this.props.params.reponame);
  },

  render: function() {
    return (
      <CommitList commits={this.props.commits} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    commits: store.commits.commits
  };
};

export default connect(mapStateToProps)(CommitListContainer);
