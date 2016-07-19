import React from 'react';
require('../styles/footer.scss');

const Footer = React.createClass({
  render: function() {
    return (
      <div className='footer'>Designed and built by <a href="https://twitter.com/fremdev" target="_blank">@fremdev</a> • 2016</div>
    );
  }
});

export default Footer;
