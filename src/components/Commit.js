import React from 'react'

class Commit extends React.Component {
  render() {
    return (
      <div>
            <div>
                <h1>{this.props.sha}</h1>
            </div>
            <div>
                {this.props.message}
            </div>
            <div>
                {this.props.author}
            </div>
        </div>
    );
  }
}


export default Commit