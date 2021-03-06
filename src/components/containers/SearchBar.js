import React, { Component } from 'react'


class SearchBar extends Component {

  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search comments..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange.bind(this)}
        />
      </form>
    )
  }
}

export default SearchBar
