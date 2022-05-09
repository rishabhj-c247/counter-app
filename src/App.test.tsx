import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { decrement, increment } from './store/counterSlice';
import store from './store';

it('increment count by one when +1 is clicked', () => {
  const { getByText, getByTestId } = render(<App />);

  fireEvent.click(getByText('+1'));
  let num = getByText('1');
  expect(num).toBeInTheDocument();
});
it('decrement count by one when down is clicked', () => {
  const { getByText, getByTestId } = render(<App />);
  //  fireEvent.click(getByText('+1'));
  fireEvent.click(getByText('-1'));
  let num = getByText('0');
  expect(num).toBeInTheDocument();
});

describe('Counter tests by dispatch action in redux', () => {
  it('increment count by one', async () => {
    const { count } = store.getState().counter;
    store.dispatch(increment());
    const { count: result } = store.getState().counter;
    expect(result).toBe(count + 1);
  });
  it('decrement count by one', async () => {
    const { count } = store.getState().counter;
    store.dispatch(decrement());
    const { count: result } = store.getState().counter;
    expect(result).toBe(count - 1);
  });
});
