import React from 'react';
import renderer from 'react-test-renderer';
import flushPromises from '../utils/FlushPromises';
import { SendMessage } from './SendMessage';

const props = {
  chatkit: {
    connect: jest.fn(
      () =>
        new Promise((resolve) =>
          resolve({
            sendMessage: jest.fn(() => new Promise((resovle) => resolve())),
          })
        )
    ),
  },
};

it('it renders', async () => {
  const component = renderer.create(<SendMessage {...props} />);
  await flushPromises();
  expect(component.toJSON()).toMatchSnapshot();
});
