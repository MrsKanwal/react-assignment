// Task 3: ProfileCard Component
import React from 'react';

function ProfileCard({ name, age, hobby = 'Not specified', avatarUrl }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px', width: '200px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <img src={avatarUrl || 'https://via.placeholder.com/60'} alt={name} width={60} height={60} style={{ borderRadius: '50%' }} />
      <h3 style={{ margin: '10px 0 5px 0' }}>{name}</h3>
      <p style={{ margin: '3px 0' }}>Age: {age}</p>
      <p style={{ margin: '3px 0' }}>Hobby: {hobby}</p>
    </div>
  );
}

export default ProfileCard;
