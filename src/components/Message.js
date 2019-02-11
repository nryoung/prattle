import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const StyledMessage = styled.div`
  flex: 1 1 100%;
  margin-bottom: 16px;
  ${(props) =>
    props.isOwnMessage &&
    `
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  `}
`;

const MessageUser = styled.div`
  flex: 1 1 100%;
  margin-bottom: 8px;
  ${(props) => props.isOwnMessage && 'text-align: right;'}
`;

const MessageTextWrapper = styled.div`
  display: inline-block;
  border-radius: 8px;
  word-break: break-word;
  ${(props) =>
    props.isOwnMessage
      ? `background-color: ${colors.redRoomRed}`
      : `background-color: ${colors.softPeach}`};
  padding: 8px;
`;

const MessageText = styled.span`
  color: ${colors.pureWhite};
`;

const Message = ({ message, message: { sender }, isOwnMessage }) => (
  <StyledMessage isOwnMessage={isOwnMessage}>
    <MessageUser isOwnMessage={isOwnMessage}>{sender.name}:</MessageUser>
    <MessageTextWrapper isOwnMessage={isOwnMessage}>
      <MessageText>{message.text}</MessageText>
    </MessageTextWrapper>
  </StyledMessage>
);

Message.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  isOwnMessage: PropTypes.bool.isRequired,
};

export default Message;
