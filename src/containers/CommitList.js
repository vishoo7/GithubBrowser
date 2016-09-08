import React from 'react'
import Commit from '../components/Commit'
import { reduxForm } from 'redux-form'
import SearchBar from '../containers/SearchBar'
import $ from "jquery";

class CommitList extends React.Component {
  constructor(props) {
    super(props);
    this.filterText = '';
    this.state = {
      commits: [],
      reponame: props.reponame
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  componentDidMount() {
    this.serverRequest = $.get(`https://api.github.com/repos/${this.props.username}/${this.state.reponame}/commits`, function (result) {
      var commits = result.splice(0,20);
      this.setState({ 
        commits: commits,
        filterText: ""
      }); 
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    let rows = [];
    this.state.commits.forEach(function(commit) {
          if (this.state.filterText !== "" && commit.commit.message.indexOf(this.state.filterText) === -1 ) {
            return;
          }
          rows.push(<Commit key={commit.sha} sha={commit.sha} message={commit.commit.message} author={commit.author.login}/>);
        }.bind(this));
    console.log(rows);
    return (
      <div>
        <SearchBar
            filterText={this.state.filterText}
            onUserInput={this.handleUserInput}
          />
        {rows}
      </div>
    );
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false
})(CommitList)