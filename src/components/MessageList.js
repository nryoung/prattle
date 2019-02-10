import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const MessageList = ({ messages }) => (
  <StyledMessageList>
    {messages.map((message) => (
      <Message key={message.id} message={message} />
    ))}
  </StyledMessageList>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MessageList;
