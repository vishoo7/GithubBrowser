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
const Commit = function(props) {
  return (
    <div style={commitStyle}>
            <h3>{props.sha}</h3>
            <div>
                {props.message}
            </div>
            <div style={infoStyle}>
                User: {props.author}
            </div>
        </div>
  );
};


export default Commit