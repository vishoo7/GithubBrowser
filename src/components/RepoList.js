import React from 'react'
import { reduxForm } from 'redux-form'
//const  { DOM: { input } } = React
import Repo from './Repo'
import $ from "jquery";


class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }
  componentDidMount() {
    this.serverRequest = $.get(`https://api.github.com/users/${this.props.username}/repos`, function (result) {
      var repos = result;
      this.setState({ 
        repos: repos
      }); 
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    const { handleSubmit } = this.props
    
    return (
      <form onSubmit={handleSubmit}>
        <div>
        {this.state.repos.map(function(repo){
        return (
          <Repo key={repo.id} name={repo.full_name} description={repo.description} updated={repo.updated_at}/>
        )
        })}
        </div>
      </form>
    );
  }
}


export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false
})(RepoList)
