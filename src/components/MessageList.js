import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withChatkit from '../containers/WithChatkit';
import media from '../styles/media';
import Message from './Message';

const StyledMessageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 72px 16px 72px;

  ${media.screenMediumUp`
    width: 600px;
    margin: 0 auto;
  `}

  // Add this to hide scrollbars on chrome
  // when using a non standard mouse on mac
  &::-webkit-scrollbar {
    width: 0;
  }
`;

class MessageList extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    const { chatkit } = this.props;
    chatkit.connect().then((currentUser) => {
      currentUser.subscribeToRoom({
        roomId: process.env.REACT_APP_ROOM,
        hooks: {
          onMessage: (message) => {
            this.setState({
              messages: [...this.state.messages, message],
            });
          },
        },
      });
    });
  }

  render() {
    const { messages } = this.state;
    return (
      <StyledMessageList>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </StyledMessageList>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default withChatkit(MessageList);
