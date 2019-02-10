import React, { Component } from 'react';
import styled from 'styled-components';
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
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit called!');
  };
  handleChange = () => {
    console.log('change called!');
  };
  render() {
    return (
      <StyledSendMessage>
        <SendMessageForm onSubmit={this.handleSubmit}>
          <MessageInput
            onChange={this.handleChange}
            placeholder="Type your message here and hit ENTER!"
            typ="text"
          />
        </SendMessageForm>
      </StyledSendMessage>
    );
  }
}

export default SendMessage;
