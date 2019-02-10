import React from 'react';
import styled from 'styled-components';

const StyledSendMessage = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
`;

const SendMessage = () => (
  <StyledSendMessage>send message here</StyledSendMessage>
);

export default SendMessage;
