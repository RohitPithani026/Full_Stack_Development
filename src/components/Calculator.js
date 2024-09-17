import React, { useState } from "react";
import './Calculator.css';

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const calculate = () => {
    try {
      setResult(eval(expression));  // Eval used here for simplicity; avoid in production.
    } catch {
      setResult("Error");
    }
  };

  const clear = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input type="text" value={expression} disabled />
      <div className="result">{result}</div>
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "+", "-", "*", "/"].map((val) => (
          <button key={val} onClick={() => handleClick(val.toString())}>{val}</button>
        ))}
        <button onClick={calculate}>=</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
