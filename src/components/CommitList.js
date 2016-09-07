import React from 'react'
import Commit from './Commit'
import $ from "jquery";

class CommitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commits: []
    };
  }
  
  componentDidMount() {
    this.serverRequest = $.get(`https://api.github.com/users/${this.props.username}/repos`, function (result) {
      var commits = result;
      this.setState({ 
        commits: commits
      }); 
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
      {this.state.commits.map(function(commit){
       return (
         <Commit sha={commit.sha} message={commit.commit.message} author={commit.author.login}/>
       )
      })}
      </div>
    );
  }
}



export default CommitList