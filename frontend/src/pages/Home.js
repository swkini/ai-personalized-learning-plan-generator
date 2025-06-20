import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [role, setRole] = useState('');
  const [field, setField] = useState('');
  const [hours, setHours] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      role,
      field,
      hours
    };

    try {
      const response = await fetch('http://localhost:5000/plan/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("Plan received:", data);

      // Pass data to dashboard
      navigate('/dashboard', { state: { role, field, hours, plan: data.plan } });

    } catch (error) {
      console.error('Error generating plan:', error);
    }
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
