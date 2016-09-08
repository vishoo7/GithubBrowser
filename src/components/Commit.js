import React from 'react'

const infoStyle = {
    fontSize: "12px",
    fontWight: "bold",
    color: "#888"
}
const commitStyle = {
    paddingTop: "30px",
    paddingBottom: "30px"
}

class Commit extends React.Component {
  render() {
    return (
      <div style={commitStyle}>
            <h3>{this.props.sha}</h3>
            <div>
                {this.props.message}
            </div>
            <div style={infoStyle}>
                {this.props.author}
            </div>
        </div>
    );
  }
} 


export default Commit