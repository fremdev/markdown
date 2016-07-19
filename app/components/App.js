import React from 'react';
import MarkdownInput from './MarkdownInput';
import Previewer from './Previewer';

const App = React.createClass({
  getInitialState: function() {
    return {markdown: 'Input your __markdown__ here please'};
  },
  handleChange: function(event) {
    this.setState({markdown: event.target.value});
  },
  render: function() {
    return (
      <div>
        <MarkdownInput markdown={this.state.markdown} onChange={this.handleChange} />
        <Previewer markdown={this.state.markdown}/>
      </div>
    )
  }
});

export default App;
