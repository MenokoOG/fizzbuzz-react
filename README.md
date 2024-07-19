
# Menoko OG - Original Geek! FizzBuzz Game

This is a fun and interactive FizzBuzz game built with React and Tailwind CSS. The application allows users to select a range using a slider or input a number directly to generate the FizzBuzz sequence. The cards representing the sequence are styled with cool effects and animations to make the experience more engaging.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [React Concepts](#react-concepts)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive slider to select the range for the FizzBuzz sequence.
- Input field to directly input a number for the FizzBuzz sequence.
- Dynamic and engaging animations for Fizz, Buzz, and FizzBuzz cards.
- Responsive design using Tailwind CSS.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/fizzbuzz-game.git
```

2. Navigate to the project directory:

```bash
cd fizzbuzz-game
```
3. Remove .git folder
```bash
rm -rf .git
```

4. Install the dependencies:

```bash
npm install
# or
yarn install
```

5. Start the development server:

```bash
npm run dev
# or
yarn start
```



## Usage

- Use the slider to select a range from 0 to 300.
- Use the input field to enter a specific number directly.
- The cards representing the FizzBuzz sequence will update dynamically based on the selected range or input number.

## React Concepts

### Custom Hooks

This application uses a custom hook, `useFizzBuzz`, to generate the FizzBuzz sequence up to the specified maximum number. Custom hooks allow for reusable logic across components, making the code more modular and easier to maintain.

```javascript
const useFizzBuzz = (maxNumber) => {
  const [fizzBuzzArray, setFizzBuzzArray] = useState([]);
  useEffect(() => {
    const generateFizzBuzz = () => {
      const result = [];
      for (let i = 0; i <= maxNumber; i++) {
        if (i === 0) {
          result.push("FizzBuzz");
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
```

### State Management

The `FizzBuzz` component uses the `useState` hook to manage the state of the maximum number. This allows the component to re-render whenever the state changes, ensuring the UI is always up-to-date with the latest data.

```javascript
const [maxNumber, setMaxNumber] = useState(100);
```

### Event Handling

Event handlers are used to update the state based on user interactions with the slider and input field. This makes the application interactive and responsive to user input.

```javascript
const handleInputChange = (e) => {
  const value = e.target.value === '' ? 0 : Math.min(Math.max(Number(e.target.value), 0), 300);
  setMaxNumber(value);
};
```

### Tailwind CSS

Tailwind CSS is used for styling the application, providing a utility-first approach to quickly build modern and responsive designs. Custom animations and hover effects enhance the user experience.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-pulse {
  animation: pulse 1s infinite;
}

.animate-spin {
  animation: spin 1s linear infinite;
}
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


