import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

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
