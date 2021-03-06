import React, { Component } from 'react';
import ChatkitContext from './containers/ChatkitContext';
import Chatkit from './chatkit';
import GlobalStyle from './css';
import Title from './components/Title';
import MessageList from './components/MessageList';
import TypingIndicator from './components/TypingIndicator';
import SendMessage from './components/SendMessage';

class App extends Component {
  render() {
    return (
      <div id="app">
        <GlobalStyle />
        <ChatkitContext.Provider value={Chatkit}>
          <Title />
          <MessageList />
          <TypingIndicator />
          <SendMessage />
        </ChatkitContext.Provider>
      </div>
    );
  }
}

export default App;
