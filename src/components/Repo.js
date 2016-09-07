import React from 'react'

class Repo extends React.Component {
  render() {
    return (
      <div>
            <div>
                <h1 onClick={this.nextPage}>{this.props.name}</h1>
            </div>
            <div>
                {this.props.description}
            </div>
            <div>
                {this.props.updated}
            </div>
        </div>
    );
  }
}

export default Repo