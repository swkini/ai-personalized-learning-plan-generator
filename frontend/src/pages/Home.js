import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [role, setRole] = useState('');
  const [field, setField] = useState('');
  const [hours, setHours] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard', { state: { role, field, hours } });
  };

  return (
    <div className="container">
      <h2>Generate Your Personalized Learning Plan</h2>
      <form onSubmit={handleSubmit} className="form">
        <input placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
        <input placeholder="Field of Interest" value={field} onChange={(e) => setField(e.target.value)} required />
        <input placeholder="Available Hours per Week" value={hours} onChange={(e) => setHours(e.target.value)} required />
        <button type="submit">Generate Plan</button>
      </form>
    </div>
  );
}

export default Home;
