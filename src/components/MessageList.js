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
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: null,
      messages: [],
    };
    this.lastMessage = React.createRef();
  }

  scrollToBottom = () => {
    window.scrollTo(0, this.lastMessage.current.offsetTop);
  };

  componentDidMount() {
    const { chatkit } = this.props;
    chatkit.connect().then((currentUser) => {
      currentUser.subscribeToRoom({
        roomId: process.env.REACT_APP_ROOM,
        hooks: {
          onMessage: (message) => {
            this.setState(
              {
                currentUserId: currentUser.id,
                messages: [...this.state.messages, message],
              },
              () => this.scrollToBottom()
            );
          },
        },
      });
    });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { messages, currentUserId } = this.state;
    return (
      <StyledMessageList>
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isOwnMessage={currentUserId === message.sender.id}
          />
        ))}
        <div ref={this.lastMessage} />
      </StyledMessageList>
    );
  }
}

MessageList.propTypes = {
  chatkit: PropTypes.object.isRequired,
};

export { MessageList };

export default withChatkit(MessageList);
