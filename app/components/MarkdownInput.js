import React from 'react';

const MarkdownInput = React.createClass({
  render: function() {
    return (
      <textarea
        value={this.props.markdown}
        onChange={this.props.onChange}>
      </textarea>
    );
  }
});

export default MarkdownInput;
