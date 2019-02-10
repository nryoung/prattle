import React, { Component } from 'react';
import GlobalStyle from './css';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div id="app">
        <GlobalStyle />
        <Title />
      </div>
    );
  }
}

export default App;
