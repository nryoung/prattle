import React from 'react';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const StyledTitle = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.paranormalGreen};
  height: 56px;
`;

const TitleLink = styled.a`
  font-size: 32px;
  color: ${colors.forestBrown};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = () => (
  <StyledTitle>
    <TitleLink href="/">Prattle</TitleLink>
  </StyledTitle>
);

export default Title;
