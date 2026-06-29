// Task 5: ClickCounter Component
import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);
  const [plusClicks, setPlusClicks] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setPlusClicks(plusClicks + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', maxWidth: '300px' }}>
      <h3 style={{ color: count > 10 ? 'red' : 'black' }}>
        Current Count: {count}
      </h3>
      
      {count === 0 && (
        <p style={{ color: 'gray', fontSize: '14px' }}>Count is at 0! It cannot go below zero.</p>
      )}

      <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <p style={{ fontSize: '14px' }}>Total '+1' button clicks: {plusClicks}</p>
    </div>
  );
}

export default ClickCounter;
