// Task 6: ColourChanger Component
import React, { useState } from 'react';

function ColourChanger() {
  const [colour, setColour] = useState('Red');
  const [bgStyle, setBgStyle] = useState('red');

  const handleColourChange = (name, hex) => {
    setColour(name);
    setBgStyle(hex);
  };

  const handleRandom = () => {
    const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColour(randomHex);
    setBgStyle(randomHex);
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '350px' }}>
      <div style={{
        width: '100%',
        height: '100px',
        backgroundColor: bgStyle,
        borderRadius: '5px',
        marginBottom: '10px',
        border: '1px solid #999'
      }}></div>

      <p>Current Colour: <strong>{colour}</strong></p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px' }}>
        <button onClick={() => handleColourChange('Red', 'red')}>Red</button>
        <button onClick={() => handleColourChange('Blue', 'blue')}>Blue</button>
        <button onClick={() => handleColourChange('Green', 'green')}>Green</button>
        <button onClick={() => handleColourChange('Yellow', 'yellow')}>Yellow</button>
        <button onClick={() => handleColourChange('Purple', 'purple')}>Purple</button>
        <button onClick={handleRandom}>Random Colour</button>
      </div>
    </div>
  );
}

export default ColourChanger;
