import React from 'react';
import Header from './header';
import MarkdownInput from './MarkdownInput';
import Previewer from './Previewer';
import sampleMarkdown from './sample';
import Footer from './footer';
require('../styles/app.scss');

const App = React.createClass({
  getInitialState: function() {
    return {markdown: sampleMarkdown};
  },
  handleChange: function(event) {
    this.setState({markdown: event.target.value});
  },
  render: function() {
    return (
      <div className="container">
        <Header />
        <MarkdownInput markdown={this.state.markdown} onChange={this.handleChange} />
        <Previewer markdown={this.state.markdown}/>
        <Footer />
      </div>
    )
  }
});

export default App;
