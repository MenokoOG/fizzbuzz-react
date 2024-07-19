import { renderHook } from '@testing-library/react-hooks';
import useFizzBuzz from '../useFizzBuzz';

test('generates FizzBuzz array', () => {
  const { result } = renderHook(() => useFizzBuzz(15));
  expect(result.current).toEqual([
    "This is Zero index !", 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"
  ]);
});
