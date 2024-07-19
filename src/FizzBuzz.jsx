import React, { useState } from 'react';
import useFizzBuzz from './useFizzBuzz';

const FizzBuzz = () => {
  const [maxNumber, setMaxNumber] = useState(100);
  const fizzBuzzArray = useFizzBuzz(maxNumber);

  const handleInputChange = (e) => {
    const value = e.target.value === '' ? 0 : Math.min(Math.max(Number(e.target.value), 0), 300);
    setMaxNumber(value);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Menoko OG - Original Geek! FizzBuzz Game</h1>
      <div className="mb-4">
        <label htmlFor="range" className="block text-sm font-medium text-gray-700">
          Select Range: {maxNumber}
        </label>
        <input
          id="range"
          type="range"
          min="0"
          max="300"
          value={maxNumber}
          onChange={(e) => setMaxNumber(Number(e.target.value))}
          className="mt-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700">
          Enter Number:
        </label>
        <input
          id="numberInput"
          type="number"
          min="0"
          max="300"
          value={maxNumber}
          onChange={handleInputChange}
          className="mt-2 p-2 border rounded"
        />
      </div>
      <div className="grid grid-cols-10 gap-4">
        {fizzBuzzArray.map((item, index) => (
          <div
            key={index}
            className={`p-4 border rounded text-center transform transition duration-500 hover:scale-110 hover:shadow-lg ${
              item === "Fizz"
                ? "bg-green-200 animate-bounce"
                : item === "Buzz"
                ? "bg-blue-200 animate-pulse"
                : item === "FizzBuzz"
                ? "bg-yellow-200 animate-spin"
                : "bg-gray-100"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FizzBuzz;
