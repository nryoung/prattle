import React from 'react';
import renderer from 'react-test-renderer';
import MessageList from './MessageList';

const props = {
  messages: [
    {
      id: ':messageId',
      userId: ':userId',
      text: ':text',
    },
  ],
};

it('it renders', () => {
  const component = renderer.create(<MessageList {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
