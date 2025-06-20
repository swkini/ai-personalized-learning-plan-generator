import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const { role, field, hours, plan } = location.state || {};

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Field of Interest:</strong> {field}</p>
      <p><strong>Available Hours:</strong> {hours} hrs/week</p>

      <div className="plan">
        <h3>AI Generated Plan</h3>
        <p>{plan ? plan : "No plan generated yet."}</p>
      </div>
    </div>
  );
}

export default Dashboard;
