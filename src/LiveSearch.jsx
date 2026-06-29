// Task 7: LiveSearch Component
import React, { useState } from 'react';

function LiveSearch() {
  const countries = [
    'Australia',
    'Brazil',
    'Canada',
    'Egypt',
    'France',
    'Germany',
    'India',
    'Japan'
  ];

  const [query, setQuery] = useState('');

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px' }}>
      <input
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', width: '90%', marginBottom: '10px' }}
      />

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <li key={index} style={{ padding: '5px 0', borderBottom: '1px solid #eee' }}>
              {country}
            </li>
          ))
        ) : (
          <li style={{ color: 'red' }}>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default LiveSearch;
