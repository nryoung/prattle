import React, { Component } from 'react';
import styled from 'styled-components';
import * as colors from '../styles/colors';
import withChatkit from '../containers/WithChatkit';

const StyledTypingIndicator = styled.div`
  position: fixed;
  bottom: 56px;
  width: 100vw;
  max-width: 100%;
  text-align: center;
`;

const TypingIndicatorMessage = styled.div`
  display: inline-block;
  border-radius: 8px;
  background-color: ${colors.miami};
  padding: 8px;
  transition: opacity 500ms linear;
  opacity: ${(props) => (props.isTyping ? 1 : 0)};
`;

class TypingIndicator extends Component {
  state = {
    isSomeoneTyping: false,
    userNameTyping: null,
  };

  componentDidMount() {
    const { chatkit } = this.props;
    chatkit.connect().then((currentUser) => {
      currentUser.subscribeToRoom({
        roomId: process.env.REACT_APP_ROOM,
        hooks: {
          onUserStartedTyping: (user) => {
            this.setState({ isSomeoneTyping: true, userNameTyping: user.name });
          },
          onUserStoppedTyping: (user) => {
            this.setState({ isSomeoneTyping: false });
          },
        },
      });
    });
  }

  render() {
    const { userNameTyping, isSomeoneTyping } = this.state;
    return (
      <StyledTypingIndicator>
        <TypingIndicatorMessage isTyping={isSomeoneTyping}>
          {userNameTyping} is typing!
        </TypingIndicatorMessage>
      </StyledTypingIndicator>
    );
  }
}

export { TypingIndicator };

export default withChatkit(TypingIndicator);
