import React from 'react';
import renderer from 'react-test-renderer';
import flushPromises from '../utils/FlushPromises';
import { TypingIndicator } from './TypingIndicator';

const props = {
  chatkit: {
    connect: jest.fn(
      () =>
        new Promise((resolve) =>
          resolve({
            subscribeToRoom: jest.fn(
              () =>
                new Promise((resolve) =>
                  resolve({ id: ':messageId', text: ':messageText' })
                )
            ),
          })
        )
    ),
  },
};

it('it renders', async () => {
  const component = renderer.create(<TypingIndicator {...props} />);
  await flushPromises();
  expect(component.toJSON()).toMatchSnapshot();
});
