// Task 4: FruitList Component
import React from 'react';

function FruitList() {
  const fruits = [
    { id: 1, name: 'Apple', emoji: '🍎', color: '#ffe6e6' },
    { id: 2, name: 'Banana', emoji: '🍌', color: '#ffffcc' },
    { id: 3, name: 'Grapes', emoji: '🍇', color: '#f3e6ff' },
    { id: 4, name: 'Orange', emoji: '🍊', color: '#ffeedb' },
    { id: 5, name: 'Watermelon', emoji: '🍉', color: '#e6ffe6' }
  ];

  return (
    <div style={{ padding: '10px' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {fruits.map((fruit) => (
          <li key={fruit.id} style={{ backgroundColor: fruit.color, padding: '8px 12px', margin: '5px 0', borderRadius: '5px' }}>
            {fruit.emoji} {fruit.name}
          </li>
        ))}
      </ul>
      <p style={{ fontWeight: 'bold' }}>Total fruits: {fruits.length}</p>
    </div>
  );
}

export default FruitList;
