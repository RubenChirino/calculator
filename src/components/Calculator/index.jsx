import React, { useState } from 'react';

import './styles.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const add = () => {
    setResult(result + Number(input));
    setInput('');
  };

  const subtract = () => {
    setResult(result - Number(input));
    setInput('');
  };

  const multiply = () => {
    const newValue = result * Number(input)
    setResult(newValue);
    setInput('');
  };

  const divide = () => {
    if (Number(input) !== 0) {
      const newValue = result / Number(input);
      setResult(newValue);
    } else {
      alert("Cannot divide by zero");
    }
    setInput('');
  };

  const resetInput = () => {
    setInput('');
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="result">{result}</div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Enter a number"
      />
      <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>x</button>
        <button onClick={divide}>÷</button>
      </div>
      <div className="reset-buttons">
        <button onClick={resetInput}>Reset input</button>
        <button onClick={resetResult}>Reset result</button>
      </div>
    </div>
  );
}

export default Calculator;
