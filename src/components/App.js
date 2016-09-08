import React, { Component } from 'react'
import RepoList from './RepoList'
import CommitList from './CommitList'

class App extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1,
      repoName: "AsyncDisplayKit"
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page, repoName } = this.state
    return (<div>
        {page === 1 && <RepoList username={this.props.username} onSubmit={this.nextPage}/>}
        {page === 2 && <CommitList username={this.props.username} reponame={repoName} previousPage={this.previousPage} />}
      </div>
    )
  }
}

export default App

