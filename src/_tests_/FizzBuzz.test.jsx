import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FizzBuzz from '../FizzBuzz';

test('renders FizzBuzz heading', () => {
  render(<FizzBuzz />);
  expect(screen.getByText(/Menoko OG - Original Geek! FizzBuzz Game/i)).toBeInTheDocument();
});

test('changes range input value', () => {
  render(<FizzBuzz />);
  const rangeInput = screen.getByLabelText(/Select Range:/i);
  fireEvent.change(rangeInput, { target: { value: 150 } });
  expect(rangeInput.value).toBe('150');
});

test('renders FizzBuzz elements', () => {
  render(<FizzBuzz />);
  const rangeInput = screen.getByLabelText(/Select Range:/i);
  fireEvent.change(rangeInput, { target: { value: 15 } });
  const fizzBuzzElements = screen.getAllByText(/FizzBuzz/i);
  expect(fizzBuzzElements.length).toBeGreaterThan(0);
});
