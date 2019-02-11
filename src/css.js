import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Didact Gothic', sans-serif;
    background-image: url("red-room.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100vw 100vh;
  }
`;
