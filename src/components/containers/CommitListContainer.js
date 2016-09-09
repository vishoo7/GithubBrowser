import React from 'react';
import { connect } from 'react-redux';
import CommitList from './CommitList';
import * as githubApi from '../../api/github-api';

class CommitListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.username ='facebook';
  }
  
  componentDidMount() {
    githubApi.fetchCommits(this.username, this.props.params.reponame);
  }

  render() {
    return (
      <CommitList commits={this.props.commits} />
    );
  }

}

const mapStateToProps = function(store) {
  return {
    commits: store.commits.commits
  };
};

export default connect(mapStateToProps)(CommitListContainer);
