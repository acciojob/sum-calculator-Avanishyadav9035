
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
 const [inputValue, setInputValue] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newSum = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(newSum);
    }, 0); // Ensures async non-blocking update

    return () => clearTimeout(timer);
  }, [numbers]);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setNumbers([...numbers, value]);
      setInputValue(''); // clear input
    }
 }
  return (
    <div>
        {/* Do not remove the main div */}
              <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleInputChange(e);
        }}
      />
      <p>Sum: {sum}</p>

    </div>
  )
}

export default App
