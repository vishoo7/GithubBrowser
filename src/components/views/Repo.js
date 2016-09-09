import React from 'react'
import { Link } from 'react-router';

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

            <h3><Link to={'/commits/' + props.reponame}>{props.fullname}</Link></h3>
            <div>
                {props.description}
            </div>
            <div style={infoStyle}>
                Updated: {props.updated}
            </div>
        </div>
  );
};

export default Repo