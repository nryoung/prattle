import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';
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

  &::-webkit-scrollbar {
    width: 0 !important; // Add this to hide scrollbars on chrome
  }
`;

const MessageList = ({ messages }) => (
  <StyledMessageList>
    {messages.map((message) => (
      <Message key={message.id} message={message} />
    ))}
  </StyledMessageList>
);

export default MessageList;
