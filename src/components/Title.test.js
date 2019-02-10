import React from 'react';
import renderer from 'react-test-renderer';
import Title from './Title';

it('it renders', () => {
  const component = renderer.create(<Title />);
  expect(component.toJSON()).toMatchSnapshot();
});
