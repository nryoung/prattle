import React from 'react';
import renderer from 'react-test-renderer';
import SendMessage from './SendMessage';

it('it renders', () => {
  const component = renderer.create(<SendMessage />);
  expect(component.toJSON()).toMatchSnapshot();
});
