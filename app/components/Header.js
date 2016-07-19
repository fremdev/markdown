import React from 'react';
require('../styles/header.scss');

const Header = React.createClass({
  render: function() {
    return (
      <div className='header'><h1>My Markdown Previewer</h1></div>
    );
  }
});

export default Header;
