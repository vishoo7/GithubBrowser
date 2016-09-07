import React from 'react'

var Repo = React.createClass({
  render: function(){
    return (
        <div>
            <div>
                <h1>{this.props.name}</h1>
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
});


export default Repo