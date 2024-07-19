import { useState, useEffect } from 'react';

const useFizzBuzz = (maxNumber) => {
  const [fizzBuzzArray, setFizzBuzzArray] = useState([]);

  useEffect(() => {
    const generateFizzBuzz = () => {
      const result = [];
      for (let i = 0; i <= maxNumber; i++) {
        if (i === 0) {
          result.push("This is Zero index !");
        } else if (i % 3 === 0 && i % 5 === 0) {
          result.push("FizzBuzz");
        } else if (i % 3 === 0) {
          result.push("Fizz");
        } else if (i % 5 === 0) {
          result.push("Buzz");
        } else {
          result.push(i);
        }
      }
      setFizzBuzzArray(result);
    };

    generateFizzBuzz();
  }, [maxNumber]);

  return fizzBuzzArray;
};

export default useFizzBuzz;
