import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders FizzBuzz component', () => {
  render(<App />);
  expect(screen.getByText(/Menoko OG - Original Geek! FizzBuzz Game/i)).toBeInTheDocument();
});
