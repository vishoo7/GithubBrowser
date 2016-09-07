import React from 'react'
import Repo from './Repo'
import $ from "jquery";

var RepoList = React.createClass({
  getInitialState: function() {
    return {
      repos: []
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(`https://api.github.com/users/${this.props.username}/repos`, function (result) {
      var repos = result;
      this.setState({ 
        repos: repos
      }); 
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
      {this.state.repos.map(function(repo){
       return (
         <Repo name={repo.full_name} description={repo.description} updated={repo.updated_at}/>
       )
      })}
      </div>
    )
  }
});


export default RepoList