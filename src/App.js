import React, { Component } from 'react';
import GlobalStyle from './css';
import Title from './components/Title';
import MessageList from './components/MessageList';
import SendMessage from './components/SendMessage';

import { MOCK_MESSAGES } from './mock_data';

class App extends Component {
  render() {
    return (
      <div id="app">
        <GlobalStyle />
        <Title />
        <MessageList messages={MOCK_MESSAGES} />
        <SendMessage />
      </div>
    );
  }
}

export default App;
