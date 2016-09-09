import React from 'react'
import Commit from '../views/Commit'
import SearchBar from './SearchBar'


class CommitList extends React.Component {
  constructor(props) {
    super(props);
    this.filterText = '';
    this.state = {
      filterText: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    let rows = [];
    let commits = this.props.commits.splice(0,20);
    commits.forEach(function(commit) {
          if (this.state.filterText !== "" && commit.commit.message.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1 ) {
            return;
          }
          rows.push(<Commit key={commit.sha} sha={commit.sha} message={commit.commit.message} author={commit.author.login}/>);
        }.bind(this));
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

export default CommitList;