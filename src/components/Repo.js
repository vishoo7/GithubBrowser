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
const Repo = function(props) {
  return (
      <div style={commitStyle}>
            <h3 onClick={props.onClick}><a href="#">{props.name}</a></h3>
            <div>
                {props.description}
            </div>
            <div style={infoStyle}>
                {props.updated}
            </div>
        </div>
  );
};

export default Repo