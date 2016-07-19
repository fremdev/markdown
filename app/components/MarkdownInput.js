import React from 'react';
require('../styles/markdownInput.scss');

const MarkdownInput = React.createClass({
  render: function() {
    return (
      <textarea className="markdown"
        value={this.props.markdown}
        onChange={this.props.onChange}>
      </textarea>
    );
  }
});

export default MarkdownInput;
