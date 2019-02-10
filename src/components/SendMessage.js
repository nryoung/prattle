import React, { Component } from 'react';
import styled from 'styled-components';
import withChatkit from '../containers/WithChatkit';
import media from '../styles/media';
import * as colors from '../styles/colors';

const StyledSendMessage = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  background-color: ${colors.pureWhite};
`;

const SendMessageForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 0 8px 0;
  width: 100%;
  max-width: 100%;
`;

const MessageInput = styled.input`
  border: 4px solid ${colors.tronTurqouise};
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  ${media.screenMediumUp`
    width: 600px;
  `}
`;

class SendMessage extends Component {
  state = {
    message: '',
  };

  componentDidMount() {
    const { chatkit } = this.props;
    chatkit.connect().then((currentUser) => {
      this.sendMessage = currentUser.sendMessage;
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { message } = this.state;
    this.sendMessage({
      text: message,
      roomId: process.env.REACT_APP_ROOM,
    })
      .then(() => this.setState({ message: '' }))
      .catch((err) => {
        console.log('message not sent!');
      });
  };

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    const { message } = this.state;
    return (
      <StyledSendMessage>
        <SendMessageForm onSubmit={this.handleSubmit}>
          <MessageInput
            onChange={this.handleChange}
            placeholder="Type your message here and hit ENTER!"
            value={message}
            type="text"
          />
        </SendMessageForm>
      </StyledSendMessage>
    );
  }
}

export default withChatkit(SendMessage);
