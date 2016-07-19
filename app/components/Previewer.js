import React from 'react';
import marked from 'marked';

require('../styles/previewer.scss');

const Previewer = React.createClass({
  render: function() {
    var output = marked(this.props.markdown);
    return (
      <div className="previewer" dangerouslySetInnerHTML={{__html: output}}></div>
    )
  }
});

export default Previewer;
