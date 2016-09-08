import React from 'react'
import Commit from '../components/Commit'
import SearchBar from '../containers/SearchBar'


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
    this.props.commits.forEach(function(commit) {
          if (this.state.filterText !== "" && commit.commit.message.indexOf(this.state.filterText) === -1 ) {
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