import React from 'react';
import renderer from 'react-test-renderer';
import Message from './Message';

const props = {
  message: {
    sender: { name: ':senderName' },
    text: ':text',
  },
};

it('it renders', () => {
  const component = renderer.create(<Message {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
