import { css } from 'styled-components';

// screen breakpoints
const breakpoints = [
  {
    name: 'screenMedium',
    value: 776,
  },
];

const maxWidth = (breakpoint, compiledCss) => css`
  @media (max-width: ${breakpoint - 1}px) {
    ${compiledCss}
  }
`;

const minWidth = (breakpoint, compiledCss) => css`
  @media (min-width: ${breakpoint}px) {
    ${compiledCss}
  }
`;

const breakpointsReducer = (media, { name, value }) =>
  Object.assign(media, {
    [`${name}Down`]: (...args) => maxWidth(value, css(...args)),
    [`${name}Up`]: (...args) => minWidth(value, css(...args)),
  });

export default {
  ...breakpoints.reduce(breakpointsReducer, {}),
};
