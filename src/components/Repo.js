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
class Repo extends React.Component {
  render() {
    return (
      <div style={commitStyle}>
            <h3 onClick={this.props.onClick}><a href="#">{this.props.name}</a></h3>
            <div>
                {this.props.description}
            </div>
            <div style={infoStyle}>
                {this.props.updated}
            </div>
        </div>
    );
  }
}

export default Repo