import React from 'react';
import { createApolloLoadingProvider } from '../src';
import { render } from '@testing-library/react';
import { Todo } from './fixtures/Todo';

test('works with defaults', async () => {
  const MockedProvider = createApolloLoadingProvider();
  const { getByText } = render(
    <MockedProvider>
      <Todo />
    </MockedProvider>
  );

  expect(getByText('Loading...')).toBeTruthy();
});

test('allows user to provide a custom provider', () => {
  const MyCustomProvider = jest.fn(() => <div />);

  const CustomizedProvider = createApolloLoadingProvider({
    provider: MyCustomProvider,
  });
  render(<CustomizedProvider> </CustomizedProvider>);
  expect(MyCustomProvider).toHaveBeenCalled();
});
