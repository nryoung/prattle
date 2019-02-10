import React from 'react';
import ChatkitContext from './ChatkitContext';

export default (WrappedComponent) => (props) => (
  <ChatkitContext.Consumer>
    {(chatkit) => <WrappedComponent {...props} chatkit={chatkit} />}
  </ChatkitContext.Consumer>
);
