import React from 'react';

const MainLayout = React.createClass({
  render: function() {
    return (
      <div>
        <main>
          <h1>Github Browser</h1>
          {this.props.children}
        </main>
      </div>
    );
  }
});

export default MainLayout;
