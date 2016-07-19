import React from 'react';
import marked from 'marked';

const Previewer = React.createClass({
  render: function() {
    var output = marked(this.props.markdown);
    return (
      <div dangerouslySetInnerHTML={{__html: output}}></div>
    )
  }
});

export default Previewer;
