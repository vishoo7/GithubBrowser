import React from 'react';
import { connect } from 'react-redux';
import RepoList from '../views/RepoList';
import * as githubApi from '../../api/github-api';

class RepoListContainer extends React.Component{
  constructor(props) {
    super(props);
    this.username ='facebook';
  }

  componentDidMount() {
    githubApi.fetchRepository(this.username);
  }

  render() {
    return (
      <RepoList repos={this.props.repos} />
    );
  }

};

const mapStateToProps = function(store) {
  return {
    repos: store.repository.repos
  };
};

export default connect(mapStateToProps)(RepoListContainer);
