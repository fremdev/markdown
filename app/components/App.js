import React from 'react';
import MarkdownInput from './MarkdownInput';
import Previewer from './Previewer';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <MarkdownInput />
        <Previewer />
      </div>
    )
  }
});

export default App;
