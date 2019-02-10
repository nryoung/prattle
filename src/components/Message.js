import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const StyledMessage = styled.div`
  flex: 1 1 100%;
  margin: 0 0 16px 0;
`;

const MessageUser = styled.div`
  margin-bottom: 8px;
`;

const MessageTextWrapper = styled.div`
  display: inline-block;
  border-radius: 8px;
  word-break: break-word;
  background-color: ${colors.acidWash};
  padding: 8px;
`;

const MessageText = styled.span`
  color: ${colors.pureWhite};
`;

const Message = ({ message }) => (
  <StyledMessage>
    <MessageUser>{message.userId}:</MessageUser>
    <MessageTextWrapper>
      <MessageText>{message.text}</MessageText>
    </MessageTextWrapper>
  </StyledMessage>
);

export default Message;
